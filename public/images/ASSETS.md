# Nalin Dada image replacement guide

The website is already wired to a central media manifest:

`src/config/media.ts`

## Recommended workflow

1. Export the real images as WebP where possible.
2. Put them in `public/images/`.
3. Open `src/config/media.ts`.
4. Change the matching `src: null` to `src: "/images/your-file.webp"`.
5. Keep or improve the supplied alt text.
6. Do not publish the private Ashram address or location metadata in filenames, captions, EXIF, or alt text.

## Recommended photo files

- `nalin-home-hero.webp` — portrait/landscape hero, ideally at least 1200px wide
- `nalin-home-about.webp`
- `nalin-about-hero.webp`
- `nalin-about-portrait.webp`
- `nalin-journey-01.webp`
- `nalin-journey-02.webp`
- `nalin-services-hero.webp`
- `nalin-consultation.webp`
- `nalin-books-author.webp`
- `ashram-hero.webp`
- `ashram-main.webp`
- `ashram-gallery-01.webp` through `ashram-gallery-04.webp`
- `nalin-appointment-hero.webp`

## Book covers

Use:

- `book-01.webp`
- `book-02.webp`
- ...
- `book-12.webp`

Then update the corresponding item in `media.books`.

Book covers work best around a 2:3 ratio, for example 800×1200.

## Performance

- Hero images are loaded eagerly and with high fetch priority.
- Other photos and book covers are lazy-loaded.
- Images use async decoding where appropriate.
- Avoid uploading original multi-megabyte phone photos directly. A practical target is roughly 150–350 KB for normal page images and 80–180 KB for book covers, while keeping text on covers readable.

## Privacy

Ashram photos can be used, but avoid GPS metadata, exact address text, visible route information, or identifying landmarks if Nalin Dada wants the location kept private.
