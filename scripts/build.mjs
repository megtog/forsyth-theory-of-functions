import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import MarkdownIt from "markdown-it";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(scriptDirectory, "..");
const stylesheetPath = path.join(projectDirectory, "styles.css");
const pages = [
  {
    source: "contents.md",
    output: "index.html",
    title: "Forsyth — Theory of Functions of a Complex Variable",
    description: "A reading guide to A. R. Forsyth's Theory of Functions of a Complex Variable",
  },
  {
    source: "section-10.md",
    output: "section-10.html",
    title: "Forsyth — §10. Conditions of functionality",
    description: "A transcription of §10 from A. R. Forsyth's Theory of Functions of a Complex Variable",
  },
  {
    source: "section-11.md",
    output: "section-11.html",
    title: "Forsyth — §11. Example of Riemann's definition",
    description: "A transcription of §11 from A. R. Forsyth's Theory of Functions of a Complex Variable",
  },
  {
    source: "section-12.md",
    output: "section-12.html",
    title: "Forsyth — §12. Definitions",
    description: "A transcription of §12 from A. R. Forsyth's Theory of Functions of a Complex Variable",
  },
  {
    source: "section-13.md",
    output: "section-13.html",
    title: "Forsyth — §13. Examples illustrating the definitions",
    description: "A transcription of §13 from A. R. Forsyth's Theory of Functions of a Complex Variable",
  },
  {
    source: "section-14.md",
    output: "section-14.html",
    title: "Forsyth — §14. Definition of an integral; definitions as to convergence",
    description: "A transcription of §14 from A. R. Forsyth's Theory of Functions of a Complex Variable",
  },
  {
    source: "section-15.md",
    output: "section-15.html",
    title: "Forsyth — §15. Inferences from the definition of an integral",
    description: "A transcription of §15 from A. R. Forsyth's Theory of Functions of a Complex Variable",
  },
  {
    source: "section-25.md",
    output: "section-25.html",
    title: "Forsyth — §25. Examples",
    description: "A transcription of §25 from A. R. Forsyth's Theory of Functions of a Complex Variable",
  },
  {
    source: "sections-10-11-commentary.md",
    output: "sections-10-11-commentary.html",
    title: "Forsyth — Modern commentary on §§10–11",
    description: "A modern commentary on §§10–11 of A. R. Forsyth's Theory of Functions of a Complex Variable",
  },
];

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
    /\$\$([\s\S]*?)\$\$/g,
    (_, expression) => {
      const index = expressions.push({ display: true, expression: expression.trim() }) - 1;
      return `MATHDISPLAYPLACEHOLDER${index}END`;
    },
  );

  protectedMarkdown = protectedMarkdown.replace(
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

function restoreMath(html, expressions) {
  let restoredHtml = html.replace(/<p>MATHDISPLAYPLACEHOLDER(\d+)END<\/p>/g, (_, index) => {
    const expression = expressions[Number(index)];
    return `<div class="display-math">\\[\n${escapeHtml(expression.expression)}\n\\]</div>`;
  });

  return restoredHtml.replace(/MATH(?:DISPLAY|INLINE)PLACEHOLDER(\d+)END/g, (_, index) => {
    const expression = expressions[Number(index)];
    const delimiters = expression.display ? ["\\[", "\\]"] : ["\\(", "\\)"];
    return `${delimiters[0]}${escapeHtml(expression.expression)}${delimiters[1]}`;
  });
}

function footnoteId(label) {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "note";
}

function renderMarkdown(markdown) {
  const footnotes = new Map();
  let source = markdown.replace(/^\[\^([^\]]+)\]:\s*(.+(?:\n {2,}.*)*)$/gm, (_, label, definition) => {
    footnotes.set(label, definition.replace(/\n {2,}/g, "\n"));
    return "";
  });

  const references = [];
  const referenceCounts = new Map();
  source = source.replace(/\[\^([^\]]+)\]/g, (match, label) => {
    if (!footnotes.has(label)) {
      return match;
    }
    const count = (referenceCounts.get(label) ?? 0) + 1;
    referenceCounts.set(label, count);
    const index = references.push({ label, count }) - 1;
    return `FOOTNOTEREFPLACEHOLDER${index}END`;
  });

  const renderer = new MarkdownIt({ html: false, linkify: false, typographer: false });
  const { expressions, protectedMarkdown } = protectMath(source);
  let html = restoreMath(renderer.render(protectedMarkdown), expressions);

  html = html.replace(/FOOTNOTEREFPLACEHOLDER(\d+)END/g, (_, index) => {
    const { label, count } = references[Number(index)];
    const id = footnoteId(label);
    return `<sup id="footnote-ref-${id}-${count}"><a href="#footnote-${id}" aria-label="Footnote ${escapeHtml(label)}">${escapeHtml(label)}</a></sup>`;
  });

  const labels = [...new Set(references.map(({ label }) => label))];
  if (labels.length === 0) {
    return html;
  }

  const footnotesHtml = labels.map((label) => {
    const { expressions: noteExpressions, protectedMarkdown: noteMarkdown } = protectMath(footnotes.get(label));
    const body = restoreMath(renderer.renderInline(noteMarkdown), noteExpressions);
    const id = footnoteId(label);
    return `<li id="footnote-${id}">${body} <a class="footnote-backref" href="#footnote-ref-${id}-1" aria-label="Back to footnote ${escapeHtml(label)} reference">↩</a></li>`;
  }).join("\n");

  return `${html}<section class="footnotes" aria-label="Footnotes"><ol>\n${footnotesHtml}\n</ol></section>\n`;
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

function createHtml(content, stylesheet, headings, { title, description }) {
  const navigation = headings
    .map(({ id, text }) => `<li><a href="#${id}">${text}</a></li>`)
    .join("\n");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(description)}">
  <title>${escapeHtml(title)}</title>
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

const stylesheet = await readFile(stylesheetPath, "utf8");
const generatedPages = await Promise.all(pages.map(async (page) => {
  const source = await readFile(path.join(projectDirectory, page.source), "utf8");
  const { headings, html: content } = addHeadingIds(renderMarkdown(source));
  return { ...page, html: createHtml(content, stylesheet, headings, page) };
}));

if (process.argv.includes("--check")) {
  for (const page of generatedPages) {
    const existing = await readFile(path.join(projectDirectory, page.output), "utf8");
    if (existing !== page.html) {
      throw new Error(`${page.output} is out of date; run npm run build.`);
    }
    console.log(`${page.output} is current.`);
  }
} else {
  await Promise.all(generatedPages.map((page) =>
    writeFile(path.join(projectDirectory, page.output), page.html, "utf8"),
  ));
  console.log(`Built ${generatedPages.map((page) => page.output).join(" and ")}.`);
}
