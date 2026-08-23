# Repository guidance

This repository contains scan-verified transcriptions and generated reading
pages for A. R. Forsyth's *Theory of Functions of a Complex Variable*.

## Source authority

- Treat the page scans in the parent directory as authoritative whenever they
  differ from OCR, especially for mathematical notation.
- Use OCR only to locate or draft material. Check every paragraph, formula,
  exercise, footnote, and figure against the corresponding scan.
- Preserve the printed wording, spelling, punctuation, terminology, and
  notation. Normalize line wrapping, end-of-line hyphenation, and evident
  typographic or OCR artifacts only.

## Workflows

- For complete numbered sections, follow `SECTION_TRANSCRIPTION.md`.
- For the book's detailed contents, follow
  `DETAILED_CONTENTS_TRANSCRIPTION.md`.
- Markdown is the canonical source. Do not edit generated HTML by hand.
- Include every figure referenced by a transcription. Prefer a faithful scan
  crop, store it under `assets/`, and retain the complete drawing, labels,
  arrows, and printed caption.

Keep the requested scope in mind:

- A transcription-only request adds the canonical Markdown and any required
  figure assets.
- A request to publish or make a section viewable in HTML also adds contents
  navigation, build registration, deployment copying and checks, README
  listings, and regenerated HTML.

Commit generated HTML and other relevant generated artifacts with their
canonical sources when a commit is requested. Do not create commits unless the
user asks for one.

## Verification

For a published page, run:

```sh
npm run build
npm run check
npm run build:pages
git diff --check
```

For a source-only or documentation-only change, run the applicable smaller
subset, including `git diff --check`. When HTML is generated, inspect it to
confirm that TeX renders, figures load in both the project and `dist/`, content
does not overflow, and navigation reaches the page.
