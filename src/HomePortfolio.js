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
  {
    image:
      "https://images.unsplash.com/photo-1544973302-9a1139be67f5?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjY5OXwwfDF8c2VhY2h8NDB8fGluc3RhZ3JhbXxlbnwwfHx8fDE2NzM5NzUzNzY&ixlib=rb-1.2.1&q=80&w=1080",
    title: "Tips for maximizing your living space",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore.",
    url: "#",
  },
];

export default function HomePortfolio() {
  return (
    <section className="py-24 bg-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center flex-wrap lg:flex-nowrap gap-8">
          <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start">
            <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-5">
              Our latest <span className="text-indigo-600">Portfolio</span>
            </h2>
            <p className="text-gray-500 mb-10 max-lg:max-w-xl max-lg:mx-auto">
              Welcome to our blog section, where knowledge meets inspiration.
              Explore insightful articles, expert tips, and the latest trends in
              our field.
            </p>
            <a
              href="/portfolio"
              className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 lg:mx-0 mx-auto flex justify-center text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-100"
            >
              View More
            </a>
            <div className="flex items-center gap-8 mt-8">
              <button className="portfolio-button-prev group flex justify-center items-center border border-indigo-600 w-11 h-11 rounded-full hover:bg-indigo-600 transition-all">
                <svg
                  className="h-6 w-6 text-indigo-600 group-hover:text-white"
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
              <button className="portfolio-button-next group flex justify-center items-center border border-indigo-600 w-11 h-11 rounded-full hover:bg-indigo-600 transition-all">
                <svg
                  className="h-6 w-6 text-indigo-600 group-hover:text-white"
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
                  <div className="mb-9">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-48 object-cover rounded-2xl"
                    />
                  </div>
                  <h3 className="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-indigo-600">
                    {slide.title}
                  </h3>
                  <a
                    href={slide.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg text-indigo-700 font-semibold"
                  >
                    Read more
                    <svg width="15" height="12" viewBox="0 0 15 12" fill="none">
                      <path
                        d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                        stroke="#4338CA"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
