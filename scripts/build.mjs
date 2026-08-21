import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import MarkdownIt from "markdown-it";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(scriptDirectory, "..");
const sourcePath = path.join(projectDirectory, "contents.md");
const stylesheetPath = path.join(projectDirectory, "styles.css");
const outputPath = path.join(projectDirectory, "index.html");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function protectMath(markdown) {
  const expressions = [];
  let protectedMarkdown = markdown.replace(
    /\\\[([\s\S]*?)\\\]/g,
    (_, expression) => {
      const index = expressions.push({ display: true, expression: expression.trim() }) - 1;
      return `MATHDISPLAYPLACEHOLDER${index}END`;
    },
  );

  protectedMarkdown = protectedMarkdown.replace(
    /\$([^$\n]+?)\$/g,
    (_, expression) => {
      const index = expressions.push({ display: false, expression }) - 1;
      return `MATHINLINEPLACEHOLDER${index}END`;
    },
  );

  return { expressions, protectedMarkdown };
}

function renderMarkdown(markdown) {
  const { expressions, protectedMarkdown } = protectMath(markdown);
  const renderer = new MarkdownIt({ html: false, linkify: false, typographer: false });
  let html = renderer.render(protectedMarkdown);

  html = html.replace(/<p>MATHDISPLAYPLACEHOLDER(\d+)END<\/p>/g, (_, index) => {
    const expression = expressions[Number(index)];
    return `<div class="display-math">\\[\n${escapeHtml(expression.expression)}\n\\]</div>`;
  });

  return html.replace(/MATH(?:DISPLAY|INLINE)PLACEHOLDER(\d+)END/g, (_, index) => {
    const expression = expressions[Number(index)];
    const delimiters = expression.display ? ["\\[", "\\]"] : ["\\(", "\\)"];
    return `${delimiters[0]}${escapeHtml(expression.expression)}${delimiters[1]}`;
  });
}

function addHeadingIds(html) {
  const ids = [];
  const withIds = html.replace(/<h2>([^<]+)<\/h2>/g, (_, text) => {
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || `section-${ids.length + 1}`;
    ids.push({ id, text });
    return `<h2 id="${id}">${text}</h2>`;
  });
  return { headings: ids, html: withIds };
}

function createHtml(content, stylesheet, headings) {
  const navigation = headings
    .map(({ id, text }) => `<li><a href="#${id}">${text}</a></li>`)
    .join("\n");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="A reading guide to A. R. Forsyth's Theory of Functions of a Complex Variable">
  <title>Forsyth — Theory of Functions of a Complex Variable</title>
  <style>
${stylesheet}
  </style>
  <script>
    window.MathJax = {
      svg: { fontCache: "local" },
      options: {
        enableMenu: true,
        menuOptions: { settings: { enrich: false, speech: false, braille: false, assistiveMml: true } }
      }
    };
  </script>
  <script defer src="./vendor/mathjax/tex-svg.js"></script>
</head>
<body>
  <a class="skip-link" href="#contents">Skip to contents</a>
  <header class="book-header">
    <p class="eyebrow">A. R. Forsyth · Third edition · 1918</p>
    <h1><em>Theory of Functions of a Complex Variable</em></h1>
    <p class="subtitle">A working reading guide and transcription project</p>
  </header>
  <div class="reader-layout">
    <nav class="chapter-nav" aria-label="Page sections">
      <p>On this page</p>
      <ol>
        ${navigation}
      </ol>
    </nav>
    <main id="contents" class="content">
${content}
    </main>
  </div>
  <footer>
    <p>Generated locally from the repository's canonical Markdown source. Page scans are authoritative for individual entries and mathematical notation.</p>
  </footer>
</body>
</html>
`;
}

const [source, stylesheet] = await Promise.all([
  readFile(sourcePath, "utf8"),
  readFile(stylesheetPath, "utf8"),
]);
const { headings, html: content } = addHeadingIds(renderMarkdown(source));
const output = createHtml(content, stylesheet, headings);

if (process.argv.includes("--check")) {
  const existing = await readFile(outputPath, "utf8");
  if (existing !== output) {
    throw new Error("index.html is out of date; run npm run build.");
  }
  console.log("index.html is current.");
} else {
  await writeFile(outputPath, output, "utf8");
  console.log("Built index.html from contents.md.");
}
