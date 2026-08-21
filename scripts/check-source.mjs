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

if (!source.includes("## Forsyth's suggested first course")) {
  throw new Error("contents.md is missing Forsyth's reading recommendation.");
}

console.log("Contents source has all 22 chapters and reading guidance.");
