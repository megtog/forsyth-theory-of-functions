# Section transcription guide

Use this workflow when adding a complete numbered section of Forsyth's book to
the reading site. Markdown is the canonical source; generated HTML must not be
edited by hand.

## Authoritative source

The page scans in the parent directory are authoritative whenever OCR and the
scan disagree, especially for mathematical notation. Rough OCR can help locate
and draft text, but every paragraph and formula must be checked against the
corresponding scan.

The completed §25 transcription provides the first example of this workflow:

- `section-25.md` transcribes printed pages 43–49.
- The authoritative page images are scans `0071`–`0077` in
  `../theoryoffunction00forsrich_jpeg/`.
- Figures 8 and 9 were cropped from scans `0071` and `0073`, respectively, and
  are stored in `assets/`.

For a new section, confirm its first and last printed pages and scan numbers
before transcribing. Record that mapping near the beginning of its Markdown
source.

## Transcription conventions

- Preserve the printed wording, spelling, punctuation, terminology, example
  numbering, notes, footnotes, and attributions.
- Normalize line wrapping, end-of-line hyphenation, and obvious scan or OCR
  artifacts only.
- Represent mathematical notation as TeX. Use `$...$` for inline mathematics
  and `$$...$$` for displayed mathematics; the local builder protects both
  forms before Markdown rendering.
- Use semantic Markdown headings for examples and other subdivisions. Do not
  reproduce running page headers or printed page breaks.
- Check that the transcription includes every item up to the next numbered
  section, including material that continues across a page boundary.

## Exercise index

Whenever a transcribed section contains exercises or worked examples, update
`exercises.md` in the same change.

- Add a section heading and table if the section is not already represented.
- Include every printed exercise, preserving its printed label (`Ex.`,
  `Ex. 1`, and so on) in the exercise column.
- Give each exercise a short topic description. This description is editorial
  index material and need not reproduce the exercise wording.
- For an already published section, link the label to the generated heading,
  such as `./section-20.html#ex-1`; an unnumbered `## Ex.` heading has the
  anchor `#ex`.
- For a source-only transcription whose HTML page does not yet exist, leave
  the exercise label unlinked. Add the link when the section is published.
- Sections without exercises need no entry in the index.

Before finishing, compare the index with every `## Ex.` heading in the new
Markdown source so that no exercise is omitted.

## Figures

Include every figure referenced by the transcribed text.

- Prefer a faithful crop from the authoritative scan unless a different visual
  treatment has been explicitly chosen.
- Crop away surrounding body text while retaining the full drawing, labels,
  direction arrows, and printed figure caption.
- Store deployable images under `assets/` with names such as
  `section-25-fig-8.jpg`.
- Insert each image near its original textual reference using Markdown image
  syntax and descriptive alt text. Do not add a duplicate visible caption when
  the printed caption is already present in the crop.
- Image-viewing and cropping utilities vary by environment. Use an available
  tool, but always inspect the final crop at full size and preserve the full
  drawing, labels, direction arrows, and printed caption.
- Pay particular attention to thin lines, subscripts, primes, and arrowheads,
  which are easy to clip or misread.

### Optional ImageMagick commands

When ImageMagick's `convert` command is available, make a temporary reduced
copy for inspection, then crop the original-resolution scan. Replace the scan
number, dimensions, offsets, and asset name for the particular figure.

```sh
convert ../theoryoffunction00forsrich_jpeg/theoryoffunction00forsrich_0041.jpg \
  -resize 45% /tmp/section-preview.jpg

convert ../theoryoffunction00forsrich_jpeg/theoryoffunction00forsrich_0041.jpg \
  -crop WIDTHxHEIGHT+X+Y +repage assets/section-NN-fig-N.jpg
```

`WIDTH`, `HEIGHT`, `X`, and `Y` are scan-specific pixel values. Inspect the
cropped asset before adding it; these commands are examples, not a substitute
for visual verification.

## Site integration

Register each new Markdown source and generated HTML filename in
`scripts/build.mjs`. Link the page from the appropriate entry in `contents.md`.
Extend `scripts/build-pages.mjs` to copy any new page and its assets into
`dist/`, and add checks that the generated HTML references the expected assets.

Update `README.md` when the set of canonical sources or generated pages changes.
Regenerate all HTML through the build script.

## Verification

Run:

```sh
npm run build
npm run check
npm run build:pages
git diff --check
```

Then open the generated page locally and confirm:

- all TeX is typeset by the local MathJax runtime;
- every figure loads from both the project and `dist/`;
- prose, formulas, example numbering, and figure placement agree with the
  scans;
- every exercise in the transcribed sections appears in `exercises.md`, and
  links for published sections reach the corresponding exercise heading;
- display mathematics and figures do not overflow at desktop or mobile widths;
- navigation from `index.html` reaches the new section page.

Commit canonical Markdown, generated HTML, assets, build changes, and updated
documentation together.
