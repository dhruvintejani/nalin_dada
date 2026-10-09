export type MediaAsset = {
  readonly src: string | null;
  readonly alt: string;
  readonly recommendedFile: string;
  readonly position?: string;
  readonly fit?: "cover" | "contain";
};

export type BookMediaAsset = {
  readonly src: string | null;
  readonly recommendedFile: string;
  readonly rotate?: 0 | -90;
};

export const media = {
  photos: {
    homeHero: {
      src: "/images/nalin/nalin-dada-portrait-80.jpeg",
      alt: "Portrait of Nalin Dada",
      recommendedFile: "nalin-dada-portrait-80.jpeg",
      position: "center 42%",
    },
    homeAbout: {
      src: "/images/nalin/nalin-riverside.jpeg",
      alt: "Nalin Dada during a spiritual visit by the riverside",
      recommendedFile: "nalin-riverside.jpeg",
      position: "center 25%",
      fit: "cover",
    },
    aboutHero: {
      src: "/images/nalin/nalin-spiritual-conversation.jpeg",
      alt: "Nalin Dada in conversation during a spiritual visit",
      recommendedFile: "nalin-spiritual-conversation.jpeg",
      position: "center 42%",
    },
    aboutPortrait: {
      src: "/images/nalin/nalin-spiritual-meeting.jpeg",
      alt: "Nalin Dada with a spiritual elder during a meeting",
      recommendedFile: "nalin-spiritual-meeting.jpeg",
      position: "center 35%",
    },
    aboutJourneyOne: {
      src: "/images/nalin/nalin-riverside-prayer.jpeg",
      alt: "Nalin Dada during a spiritual moment by the riverside",
      recommendedFile: "nalin-riverside-prayer.jpeg",
      position: "center 40%",
    },
    aboutJourneyTwo: {
      src: "/images/nalin/nalin-event-group.jpeg",
      alt: "Nalin Dada at a public astrology and spiritual gathering",
      recommendedFile: "nalin-event-group.jpeg",
      position: "center 38%",
    },
    servicesHero: {
      src: "/images/nalin/nalin-spiritual-meeting.jpeg",
      alt: "Nalin Dada during a spiritual meeting",
      recommendedFile: "nalin-spiritual-meeting.jpeg",
      position: "30% center",
    },
    servicesConsultation: {
      src: "/images/nalin/nalin-consultation-discussion.jpeg",
      alt: "Nalin Dada in a personal discussion",
      recommendedFile: "nalin-consultation-discussion.jpeg",
      position: "69% center",
    },
    booksAuthor: {
      src: "/images/nalin/nalin-event-group.jpeg",
      alt: "Nalin Dada at a public astrology and spiritual gathering",
      recommendedFile: "nalin-event-group.jpeg",
      position: "66% center",
    },
    ashramHero: {
      src: null,
      alt: "Pitambara Peeth sadhana place associated with Nalin Dada",
      recommendedFile: "ashram-hero.webp",
    },
    ashramMain: {
      src: null,
      alt: "Nalin Dada's spiritual sadhana place",
      recommendedFile: "ashram-main.webp",
    },
    ashramGalleryOne: {
      src: null,
      alt: "Sadhana place exterior",
      recommendedFile: "ashram-gallery-01.webp",
    },
    ashramGalleryTwo: {
      src: null,
      alt: "Spiritual ritual or puja at the sadhana place",
      recommendedFile: "ashram-gallery-02.webp",
    },
    ashramGalleryThree: {
      src: null,
      alt: "Nalin Dada at the sadhana place",
      recommendedFile: "ashram-gallery-03.webp",
    },
    ashramGalleryFour: {
      src: null,
      alt: "Narmada or spiritual journey connected with Nalin Dada",
      recommendedFile: "ashram-gallery-04.webp",
    },
    appointmentHero: {
      src: "/images/nalin/nalin-consultation-discussion.jpeg",
      alt: "Nalin Dada during a personal consultation discussion",
      recommendedFile: "nalin-consultation-discussion.jpeg",
      position: "69% center",
    },
  },
  books: [
    { src: "/images/books/book-collection-01.jpeg", recommendedFile: "book-collection-01.jpeg", rotate: 0 },
    { src: "/images/books/book-collection-02.jpeg", recommendedFile: "book-collection-02.jpeg", rotate: -90 },
    { src: "/images/books/book-collection-03.jpeg", recommendedFile: "book-collection-03.jpeg", rotate: -90 },
    { src: "/images/books/book-collection-04.jpeg", recommendedFile: "book-collection-04.jpeg", rotate: -90 },
    { src: "/images/books/book-collection-05.jpeg", recommendedFile: "book-collection-05.jpeg", rotate: -90 },
    { src: "/images/books/book-collection-06.jpeg", recommendedFile: "book-collection-06.jpeg", rotate: -90 },
    { src: "/images/books/book-collection-07.jpeg", recommendedFile: "book-collection-07.jpeg", rotate: -90 },
    { src: "/images/books/book-collection-08.jpeg", recommendedFile: "book-collection-08.jpeg", rotate: 0 },
    { src: "/images/books/book-collection-09.jpeg", recommendedFile: "book-collection-09.jpeg", rotate: -90 },
  ] satisfies readonly BookMediaAsset[],
} as const;
