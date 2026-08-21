# Forsyth — *Theory of Functions of a Complex Variable*

Working repository for studying, annotating, and publishing material based on
A. R. Forsyth's 1918 third edition of *Theory of Functions of a Complex
Variable*.

The scan images and rough OCR remain in the parent `theoryoffunction00forsrich/`
directory. This repository will hold curated material derived from that source,
such as corrected transcriptions, notes, exercises, and a future static reading
site.

## Working files

- `contents.md` is the canonical chapter-level transcription and page source.
- `index.html` is generated from `contents.md`; do not edit it directly.
- `styles.css` controls the generated reading page.
- `vendor/mathjax/` contains a fixed local MathJax runtime, allowing the page
  to render TeX without a CDN.

## Build

Requires Node.js 22 and npm:

```bash
npm ci --no-audit
npm run vendor:mathjax
npm run build
npm run check
```

`npm run build:pages` writes a Cloudflare Pages-ready release to `dist/`.
The generated page can also be opened directly from `file://`.
