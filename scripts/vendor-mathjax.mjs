import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(scriptDirectory, "..");
const packageDirectory = path.join(projectDirectory, "node_modules", "mathjax");
const vendorDirectory = path.join(projectDirectory, "vendor", "mathjax");
const metadata = JSON.parse(await readFile(path.join(packageDirectory, "package.json"), "utf8"));

if (metadata.version !== "4.1.3") {
  throw new Error(`Expected MathJax 4.1.3, found ${metadata.version || "unknown"}.`);
}

await mkdir(path.dirname(vendorDirectory), { recursive: true });
await rm(vendorDirectory, { force: true, recursive: true });
await cp(packageDirectory, vendorDirectory, { recursive: true });
await writeFile(path.join(vendorDirectory, "VENDORED_VERSION"), `${metadata.version}\n`, "utf8");
console.log(`Vendored MathJax ${metadata.version}.`);
