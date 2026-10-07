# Nalin Dada image structure

The production site now uses only selected real photos supplied for Nalin Dada.

## Active folders

- `public/images/nalin/` — selected real photographs of Nalin Dada
- `public/images/books/` — selected real photographs of his book collection

Image paths are connected centrally from:

`src/config/media.ts`

## Current Nalin Dada photos

- `nalin-speaking-event.jpeg`
- `nalin-riverside.jpeg`
- `nalin-riverside-prayer.jpeg`
- `nalin-spiritual-conversation.jpeg`
- `nalin-spiritual-meeting.jpeg`
- `nalin-consultation-discussion.jpeg`
- `nalin-event-group.jpeg`

## Current book collection photos

- `book-collection-01.jpeg` through `book-collection-09.jpeg`

Some source book photographs were taken sideways. Their orientation is corrected at display time by the reusable `BookCollectionImage` component.

## Adding another real image later

1. Put the new image in the appropriate folder.
2. Use a clear lowercase filename with hyphens.
3. Add or update the matching path in `src/config/media.ts`.
4. Use a truthful alt description.
5. Do not add stock, AI-generated, or dummy images.

## Ashram photos

No Ashram photo is currently shown unless a confirmed real image is explicitly connected. Do not infer that general outdoor or riverside photographs are the Ashram.
