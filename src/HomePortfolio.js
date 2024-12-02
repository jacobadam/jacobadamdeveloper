import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slidesData = [
  {
    image: "https://www.katieshevlin.com/hero-image.webp",
    title: "Content Services Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore.",
    url: "https://www.katieshevlin.com/",
  },
  {
    image: "https://www.neilnevitt.com/homepage-image.webp",
    title: "Healthcare Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore.",
    url: "https://www.neilnevitt.com/",
  },
];

export default function HomePortfolio() {
  return (
    <section className="py-16 bg-indigo-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center flex-wrap lg:flex-nowrap gap-8">
          <div className="w-full lg:w-2/5 flex flex-col items-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-5">
              Latest Projects
            </h2>
            <a
              href="/portfolio"
              className="cursor-pointer border border-black bg-black shadow-sm rounded-full py-2 px-4 w-32 lg:mx-0 mx-auto flex justify-center text-white font-semibold text-sm transition-all duration-300 hover:bg-white hover:text-black"
            >
              View More
            </a>
            <div className="flex items-center gap-8 mt-8">
              <button className="portfolio-button-prev group flex justify-center items-center border border-black w-11 h-11 rounded-full transition-all">
                <svg
                  className="h-6 w-6 text-black group-hover:text-white"
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
              <button className="portfolio-button-next group flex justify-center items-center border border-black w-11 h-11 rounded-full transition-all">
                <svg
                  className="h-6 w-6 text-black group-hover:text-white"
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
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 28,
                },
              }}
              className="portfolioSwiper"
            >
              {slidesData.map((slide, index) => (
                <SwiperSlide key={index} className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:blur-sm"
                    />

                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out">
                      <h3 className="text-lg text-white font-bold mb-3">
                        {slide.title}
                      </h3>
                      <a
                        href={slide.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white font-semibold bg-black/80 px-4 py-2 rounded-full transition-colors duration-300"
                      >
                        View project
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
