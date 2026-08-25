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
  cp(path.join(projectDirectory, "section-10.html"), path.join(outputDirectory, "section-10.html")),
  cp(path.join(projectDirectory, "section-11.html"), path.join(outputDirectory, "section-11.html")),
  cp(path.join(projectDirectory, "section-12.html"), path.join(outputDirectory, "section-12.html")),
  cp(path.join(projectDirectory, "section-13.html"), path.join(outputDirectory, "section-13.html")),
  cp(path.join(projectDirectory, "section-14.html"), path.join(outputDirectory, "section-14.html")),
  cp(path.join(projectDirectory, "section-15.html"), path.join(outputDirectory, "section-15.html")),
  cp(path.join(projectDirectory, "section-16.html"), path.join(outputDirectory, "section-16.html")),
  cp(path.join(projectDirectory, "section-17.html"), path.join(outputDirectory, "section-17.html")),
  cp(path.join(projectDirectory, "section-18.html"), path.join(outputDirectory, "section-18.html")),
  cp(path.join(projectDirectory, "section-19.html"), path.join(outputDirectory, "section-19.html")),
  cp(path.join(projectDirectory, "section-20.html"), path.join(outputDirectory, "section-20.html")),
  cp(path.join(projectDirectory, "section-21.html"), path.join(outputDirectory, "section-21.html")),
  cp(path.join(projectDirectory, "section-22.html"), path.join(outputDirectory, "section-22.html")),
  cp(path.join(projectDirectory, "section-25.html"), path.join(outputDirectory, "section-25.html")),
  cp(path.join(projectDirectory, "commentary-section-10-11.html"), path.join(outputDirectory, "commentary-section-10-11.html")),
  cp(path.join(projectDirectory, "commentary-section-14-15.html"), path.join(outputDirectory, "commentary-section-14-15.html")),
  cp(path.join(projectDirectory, "assets"), path.join(outputDirectory, "assets"), { recursive: true }),
  cp(path.join(projectDirectory, "vendor", "mathjax"), path.join(outputDirectory, "vendor", "mathjax"), { recursive: true }),
  writeFile(path.join(outputDirectory, "_headers"), "/\n  X-Content-Type-Options: nosniff\n", "utf8"),
]);

for (const page of ["index.html", "section-10.html", "section-11.html", "section-12.html", "section-13.html", "section-14.html", "section-15.html", "section-16.html", "section-17.html", "section-18.html", "section-19.html", "section-20.html", "section-21.html", "section-22.html", "section-25.html", "commentary-section-10-11.html", "commentary-section-14-15.html"]) {
  const html = await readFile(path.join(outputDirectory, page), "utf8");
  if (!html.includes("./vendor/mathjax/tex-svg.js")) {
    throw new Error(`Published ${page} is missing its local MathJax reference.`);
  }
  if (html.includes("[^")) {
    throw new Error(`Published ${page} contains unrendered footnote Markdown.`);
  }
}

const sectionAssets = {
  "section-11.html": ["section-11-fig-4.jpg"],
  "section-16.html": ["section-16-fig-5.jpg"],
  "section-18.html": ["section-18-fig-6.jpg"],
  "section-19.html": ["section-19-fig-1.jpg"],
  "section-25.html": ["section-25-fig-8.jpg", "section-25-fig-9.jpg"],
};

for (const [page, assets] of Object.entries(sectionAssets)) {
  const html = await readFile(path.join(outputDirectory, page), "utf8");
  for (const asset of assets) {
    if (!html.includes(`./assets/${asset}`)) {
      throw new Error(`Published ${page} is missing its ${asset} reference.`);
    }
    await readFile(path.join(outputDirectory, "assets", asset));
  }
}
console.log("Built Cloudflare Pages artifact in dist/.");
