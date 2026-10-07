import type { BookMediaAsset } from "../config/media";

type BookCollectionImageProps = {
  book: BookMediaAsset;
  alt: string;
  className?: string;
  eager?: boolean;
};

const BookCollectionImage = ({
  book,
  alt,
  className = "",
  eager = false,
}: BookCollectionImageProps) => {
  if (!book.src) return null;

  const rotated = book.rotate === 90;

  return (
    <div
      className={
        "book-photo-frame " +
        (rotated ? "book-photo-frame-rotated " : "") +
        className
      }
    >
      <img
        src={book.src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding="async"
        className={rotated ? "book-photo-image-rotated" : "book-photo-image"}
      />
    </div>
  );
};

export default BookCollectionImage;
