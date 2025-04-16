import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderCard from "./SliderCard.jsx";

const slidesData = [
  {
    image: "https://www.katieshevlin.com/hero-image.webp",
    title: "Content Services Website",
    url: "https://www.katieshevlin.com/",
  },
  {
    image: "https://www.neilnevitt.com/homepage-image.webp",
    title: "Healthcare Website",
    url: "https://www.neilnevitt.com/",
  },
];

export default function HomeProjects() {
  return (
    <>
      <section className="relative bg-[#8FBC8F] dark:bg-black py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-5">
          <div className="flex justify-center flex-wrap gap-8">
            <div className="w-full lg:w-2/5 flex flex-col items-center justify-center">
              <h1 className="text-2xl lg:text-3xl font-bold text-center text-gray-50 pb-4 md:pb-8">
                Latest Projects
              </h1>
              <div className="flex items-center gap-8">
                <button
                  className="md:hidden portfolio-button-prev group flex justify-center items-center border border-black w-11 h-11 rounded-full transition-all"
                  aria-label="Previous slide"
                >
                  <svg
                    className="h-6 w-6 text-black group-hover:text-gray-50"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className="md:hidden portfolio-button-next group flex justify-center items-center border border-black w-11 h-11 rounded-full transition-all"
                  aria-label="Next slide"
                >
                  <svg
                    className="h-6 w-6 text-black group-hover:text-gray-50"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="w-full lg:w-3/5">
              <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={2}
                spaceBetween={28}
                navigation={{
                  nextEl: ".portfolio-button-next",
                  prevEl: ".portfolio-button-prev",
                }}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    loop: true,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 28,
                    loop: false,
                  },
                }}
                aria-live="polite"
              >
                {slidesData.map((slide, index) => (
                  <SwiperSlide
                    key={index}
                    className="group"
                    aria-label={`Slide ${index + 1}`}
                  >
                    <SliderCard
                      image={slide.image}
                      title={slide.title}
                      url={slide.url}
                      ariaLabel={`View the ${slide.title} project`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
