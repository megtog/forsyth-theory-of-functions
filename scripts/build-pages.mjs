import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(scriptDirectory, "..");
const outputDirectory = path.join(projectDirectory, "dist");

await new Promise((resolve, reject) => {
  const child = spawn(process.execPath, [path.join(scriptDirectory, "build.mjs")], {
    cwd: projectDirectory,
    stdio: "inherit",
  });
  child.once("error", reject);
  child.once("exit", (code) => code === 0 ? resolve() : reject(new Error(`Build exited with code ${code}.`)));
});

await rm(outputDirectory, { force: true, recursive: true });
await mkdir(outputDirectory, { recursive: true });
await Promise.all([
  cp(path.join(projectDirectory, "index.html"), path.join(outputDirectory, "index.html")),
  cp(path.join(projectDirectory, "vendor", "mathjax"), path.join(outputDirectory, "vendor", "mathjax"), { recursive: true }),
  writeFile(path.join(outputDirectory, "_headers"), "/\n  X-Content-Type-Options: nosniff\n", "utf8"),
]);

const html = await readFile(path.join(outputDirectory, "index.html"), "utf8");
if (!html.includes("./vendor/mathjax/tex-svg.js")) {
  throw new Error("Published HTML is missing its local MathJax reference.");
}
console.log("Built Cloudflare Pages artifact in dist/.");
