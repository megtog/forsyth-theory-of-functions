import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(scriptDirectory, "..");
const source = await readFile(path.join(projectDirectory, "contents.md"), "utf8");

if (!source.includes("## Chapters")) {
  throw new Error("contents.md is missing its chapter table.");
}

const chapterRows = [...source.matchAll(/^\| (I|II|III|IV|V|VI|VII|VIII|IX|X|XI|XII|XIII|XIV|XV|XVI|XVII|XVIII|XIX|XX|XXI|XXII) \|/gm)];
if (chapterRows.length !== 22) {
  throw new Error(`Expected 22 chapter rows, found ${chapterRows.length}.`);
}

if (!source.includes("## Detailed contents")) {
  throw new Error("contents.md is missing its detailed contents section.");
}

const detailedChapters = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
for (const chapter of detailedChapters) {
  const heading = `### Chapter ${chapter}`;
  const chapterStart = source.indexOf(heading);
  if (chapterStart === -1) {
    throw new Error(`Detailed contents is missing Chapter ${chapter}.`);
  }

  const nextChapter = source.indexOf("### Chapter ", chapterStart + heading.length);
  const chapterEnd = nextChapter === -1 ? source.length : nextChapter;
  const chapterContents = source.slice(chapterStart, chapterEnd);
  if (!/^\| Sections \| Description \| Page \|$/m.test(chapterContents)) {
    throw new Error(`Detailed contents for Chapter ${chapter} is missing its table.`);
  }
}

const detailedSectionRows = [...source.matchAll(/^\| ([^|]+) \|/gm)]
  .map(([, row]) => row.replace(/\[([0-9]+)\]\([^)]*\)/g, "$1"))
  .filter((row) => /^(?:[0-9]+)(?:[–, ]+[0-9]+)*$/.test(row));
const detailedSections = new Set();
for (const row of detailedSectionRows) {
  for (const part of row.split(", ")) {
    const [first, last = first] = part.split("–").map(Number);
    for (let section = first; section <= last; section += 1) {
      detailedSections.add(section);
    }
  }
}

const missingDetailedSections = [];
for (let section = 1; section <= 119; section += 1) {
  if (!detailedSections.has(section)) {
    missingDetailedSections.push(section);
  }
}
if (missingDetailedSections.length > 0) {
  throw new Error(`Detailed contents is missing sections: ${missingDetailedSections.join(", ")}.`);
}

if (!source.includes("## Forsyth's suggested first course")) {
  throw new Error("contents.md is missing Forsyth's reading recommendation.");
}

console.log("Contents source has all 22 chapters, detailed coverage through §119, and reading guidance.");
