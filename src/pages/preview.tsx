import { useState } from "react";

const slide = [
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/00/ae/00/hotel-florita.jpg?w=1200&h=-1&s=1",
  },
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/77/f8/11/board-walk-by-the-guest.jpg?w=1000&h=-1&s=1",
  },
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/25/a1/84/cathedrale-du-cap-haitien.jpg?w=700&h=500&s=1",
  },

  {
    url: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/7e/e3/9b.jpg",
  },
  {
    url: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/7e/e3/99.jpg",
  },

  {
    url: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/0f/f5/76.jpg",
  },
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/0f/43/e2/les-gonaivs.jpg?w=1200&h=-1&s=1",
  },
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/5f/f5/22/grounds--v13124919.jpg?w=1200&h=-1&s=1",
  },
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/5f/f1/3e/pool--v13124878.jpg?w=1200&h=-1&s=1",
  },
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/aa/57/51/suites-la-colline.jpg?w=1200&h=-1&s=1",
  },
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/39/e7/e3/dan-s-creek-hotel.jpg?w=1000&h=-1&s=1",
  },
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/29/5b/ad/dan-s-creek-hotel.jpg?w=1000&h=-1&s=1",
  },
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/d3/e2/f8/inside-main-gallery-of.jpg?w=1200&h=-1&s=1",
  },
];

const previewBtn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);

const nextBtn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

const CarousselSlide = () => {
  const [currentIndex, setCurrentIdex] = useState(0);
  const handlePreview = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slide.length - 1 : currentIndex - 1;
    setCurrentIdex(newIndex);
  };
  const handleNext = () => {
    const isLastSlide = currentIndex === slide.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIdex(newIndex);
  };

  return (
    <div className=" h-[450px] w-full md:mt-20 relative group">
      <div
        className="md:w-3/4 h-full mx-auto rounded-lg bg-contain bg-no-repeat md:bg-cover duration-500"
        style={{ backgroundImage: `url(${slide[currentIndex].url})` }}
      ></div>
      <div
        className="hidden group-hover:block w-10 absolute md:top-[50%] top-[40%] translate-y-[-50%] left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={handlePreview}
      >
        {previewBtn}
      </div>
      <div
        className="hidden group-hover:block w-10 absolute md:top-[50%] top-[40%] translate-y-[-50%] right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={handleNext}
      >
        {nextBtn}
      </div>
    </div>
  );
};

export default CarousselSlide;
