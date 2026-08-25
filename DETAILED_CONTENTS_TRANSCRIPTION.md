# Detailed contents transcription guide

`contents.md` is the canonical editable source for the reading page. The
generated `index.html` must always be rebuilt from it; do not edit the HTML by
hand.

## Source material

The book scans are authoritative whenever OCR and the scan disagree, especially
for mathematical notation. The detailed contents of Chapters I–X use:

- `../theoryoffunction00forsrich_jpeg/theoryoffunction00forsrich_0017.jpg`
- `../theoryoffunction00forsrich_jpeg/theoryoffunction00forsrich_0018.jpg`
- `../theoryoffunction00forsrich_jpeg/theoryoffunction00forsrich_0019.jpg`
- `../theoryoffunction00forsrich_jpeg/theoryoffunction00forsrich_0020.jpg`
- `../theoryoffunction00forsrich_jpeg/theoryoffunction00forsrich_0021.jpg`
- `../theoryoffunction00forsrich_jpeg/theoryoffunction00forsrich_0022.jpg`

Scans 0017–0019 cover Chapters I–V; scan 0019 also contains Chapter VI. Scan
0020 contains Chapter VII and the beginning of Chapter VIII; scan 0021 finishes
Chapter VIII and contains Chapters IX and most of X; scan 0022 finishes Chapter
X. Together these pages cover the printed contents through §119 and the
unnumbered note following it. The adjacent scan pages are the starting point
for later chapters; confirm the exact range against the printed chapter
boundaries before transcribing.

## Format

Keep the existing `## Chapters` table as the short navigation layer. Add later
transcriptions below `## Detailed contents`, one `### Chapter ... — ...`
heading that repeats the full printed chapter title, and one table per chapter:

```markdown
### Chapter VI — Functions with a Limited Number of Essential Singularities

| Sections | Description | Page |
| --- | --- | ---: |
| 62 | Faithful cleaned description | 115 |
```

- Make one table row for every printed contents entry. Preserve grouped section
  numbers (for example, `62, 63` or `68–71`) and the printed page number.
- Preserve the printed terminology and phrasing. Normalize line wrapping and
  obvious scan or OCR artifacts only.
- Keep page numbers as plain printed-page references; do not link them to scan
  folders, so the deployed page remains self-contained.
- Write mathematical notation using `$...$`, not `\(...\)`. The local build
  pipeline protects dollar-delimited TeX and emits MathJax-compatible inline
  delimiters. In Markdown tables, use `\lvert` and `\rvert` rather than literal
  vertical bars inside TeX.

## Checks and build

After adding or changing detailed entries:

```sh
npm run build
npm run check
```

`npm run build` regenerates `index.html`; commit it with `contents.md`.
`scripts/check-source.mjs` currently verifies the detailed tables and full
section coverage for Chapters I–X (§§1–119). Extend that check when adding the
next chapter range. For formula-heavy changes, open the generated page locally
and confirm MathJax typesets each expression rather than displaying TeX source.
