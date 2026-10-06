export type MediaAsset = {
  readonly src: string | null;
  readonly alt: string;
  readonly recommendedFile: string;
  readonly position?: string;
};

export const media = {
  photos: {
    homeHero: {
      src: "/images/nalin-speaking.jpg",
      alt: "Nalin Dada speaking at an astrology and spiritual event",
      recommendedFile: "nalin-home-hero.webp",
      position: "center 30%",
    },
    homeAbout: {
      src: "/images/nalin-speaking.jpg",
      alt: "Nalin Dada sharing spiritual and life guidance",
      recommendedFile: "nalin-home-about.webp",
      position: "center 22%",
    },
    aboutHero: {
      src: "/images/nalin-speaking.jpg",
      alt: "Nalin Dada speaking at a spiritual and astrology gathering",
      recommendedFile: "nalin-about-hero.webp",
      position: "center 27%",
    },
    aboutPortrait: {
      src: null,
      alt: "Portrait of Nalin Dada",
      recommendedFile: "nalin-about-portrait.webp",
    },
    aboutJourneyOne: {
      src: null,
      alt: "Nalin Dada during an earlier spiritual journey or gathering",
      recommendedFile: "nalin-journey-01.webp",
    },
    aboutJourneyTwo: {
      src: null,
      alt: "Nalin Dada at his spiritual sadhana place",
      recommendedFile: "nalin-journey-02.webp",
    },
    servicesHero: {
      src: "/images/nalin-speaking.jpg",
      alt: "Nalin Dada speaking during a spiritual and astrology gathering",
      recommendedFile: "nalin-services-hero.webp",
      position: "center 27%",
    },
    servicesConsultation: {
      src: null,
      alt: "Nalin Dada in a personal consultation or discussion",
      recommendedFile: "nalin-consultation.webp",
    },
    booksAuthor: {
      src: "/images/nalin-speaking.jpg",
      alt: "Nalin Dada speaking and sharing knowledge at an event",
      recommendedFile: "nalin-books-author.webp",
      position: "center 24%",
    },
    ashramHero: {
      src: null,
      alt: "Pitambara Peeth private sadhana place associated with Nalin Dada",
      recommendedFile: "ashram-hero.webp",
    },
    ashramMain: {
      src: null,
      alt: "Nalin Dada's private spiritual sadhana place",
      recommendedFile: "ashram-main.webp",
    },
    ashramGalleryOne: {
      src: null,
      alt: "Ashram or sadhana place exterior",
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
      src: "/images/nalin-speaking.jpg",
      alt: "Nalin Dada speaking and guiding people at an event",
      recommendedFile: "nalin-appointment-hero.webp",
      position: "center 27%",
    },
  },
  books: [
    { src: null, recommendedFile: "book-01.webp" },
    { src: null, recommendedFile: "book-02.webp" },
    { src: null, recommendedFile: "book-03.webp" },
    { src: null, recommendedFile: "book-04.webp" },
    { src: null, recommendedFile: "book-05.webp" },
    { src: null, recommendedFile: "book-06.webp" },
    { src: null, recommendedFile: "book-07.webp" },
    { src: null, recommendedFile: "book-08.webp" },
    { src: null, recommendedFile: "book-09.webp" },
    { src: null, recommendedFile: "book-10.webp" },
    { src: null, recommendedFile: "book-11.webp" },
    { src: null, recommendedFile: "book-12.webp" },
  ],
} as const;
