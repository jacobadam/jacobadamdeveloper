import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderCard from "./SliderCard";

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

export default function HomeProjects() {
  return (
    <>
      <svg
        id="wave"
        className="bg-slate-200 dark:bg-black"
        style={{ transform: "rotate(0deg)", transition: "0.3s" }}
        viewBox="0 0 1440 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(79, 70, 229, 1)" offset="0%" />
            <stop stopColor="rgba(79, 70, 229, 1)" offset="100%" />
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          fill="url(#sw-gradient-0)"
          d="M0,80L80,73.3C160,67,320,53,480,51.7C640,50,800,60,960,65C1120,70,1280,70,1440,63.3C1600,57,1760,43,1920,35C2080,27,2240,23,2400,33.3C2560,43,2720,67,2880,70C3040,73,3200,57,3360,41.7C3520,27,3680,13,3840,15C4000,17,4160,33,4320,46.7C4480,60,4640,70,4800,70C4960,70,5120,60,5280,51.7C5440,43,5600,37,5760,38.3C5920,40,6080,50,6240,53.3C6400,57,6560,53,6720,48.3C6880,43,7040,37,7200,35C7360,33,7520,37,7680,38.3C7840,40,8000,40,8160,38.3C8320,37,8480,33,8640,26.7C8800,20,8960,10,9120,8.3C9280,7,9440,13,9600,18.3C9760,23,9920,27,10080,23.3C10240,20,10400,10,10560,6.7C10720,3,10880,7,11040,10C11200,13,11360,17,11440,18.3L11520,20L11520,100L11440,100C11360,100,11200,100,11040,100C10880,100,10720,100,10560,100C10400,100,10240,100,10080,100C9920,100,9760,100,9600,100C9440,100,9280,100,9120,100C8960,100,8800,100,8640,100C8480,100,8320,100,8160,100C8000,100,7840,100,7680,100C7520,100,7360,100,7200,100C7040,100,6880,100,6720,100C6560,100,6400,100,6240,100C6080,100,5920,100,5760,100C5600,100,5440,100,5280,100C5120,100,4960,100,4800,100C4640,100,4480,100,4320,100C4160,100,4000,100,3840,100C3680,100,3520,100,3360,100C3200,100,3040,100,2880,100C2720,100,2560,100,2400,100C2240,100,2080,100,1920,100C1760,100,1600,100,1440,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
        />
      </svg>

      <section className="relative bg-indigo-600 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-5">
          <div className="flex justify-center flex-wrap gap-8">
            <div className="w-full lg:w-2/5 flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold text-center text-white pb-4 md:pb-0">
                Latest Projects
              </h2>
              <div className="flex items-center gap-8">
                <button className="md:hidden portfolio-button-prev group flex justify-center items-center border border-black w-11 h-11 rounded-full transition-all">
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
                <button className="md:hidden portfolio-button-next group flex justify-center items-center border border-black w-11 h-11 rounded-full transition-all">
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
                    <SliderCard
                      image={slide.image}
                      title={slide.title}
                      url={slide.url}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <svg
        id="wave"
        className="dark:bg-black"
        style={{ transform: "rotate(180deg)", transition: "0.3s" }}
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(79, 70, 229, 1)" offset="0%"></stop>
            <stop stopColor="rgba(79, 70, 229, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          fill="url(#sw-gradient-0)"
          d="M0,80L120,73.3C240,67,480,53,720,51.7C960,50,1200,60,1440,65C1680,70,1920,70,2160,63.3C2400,57,2640,43,2880,35C3120,27,3360,23,3600,33.3C3840,43,4080,67,4320,70C4560,73,4800,57,5040,41.7C5280,27,5520,13,5760,15C6000,17,6240,33,6480,46.7C6720,60,6960,70,7200,70C7440,70,7680,60,7920,51.7C8160,43,8400,37,8640,38.3C8880,40,9120,50,9360,53.3C9600,57,9840,53,10080,48.3C10320,43,10560,37,10800,35C11040,33,11280,37,11520,38.3C11760,40,12000,40,12240,38.3C12480,37,12720,33,12960,26.7C13200,20,13440,10,13680,8.3C13920,7,14160,13,14400,18.3C14640,23,14880,27,15120,23.3C15360,20,15600,10,15840,6.7C16080,3,16320,7,16560,10C16800,13,17040,17,17160,18.3L17280,20L17280,100L17160,100C17040,100,16800,100,16560,100C16320,100,16080,100,15840,100C15600,100,15360,100,15120,100C14880,100,14640,100,14400,100C14160,100,13920,100,13680,100C13440,100,13200,100,12960,100C12720,100,12480,100,12240,100C12000,100,11760,100,11520,100C11280,100,11040,100,10800,100C10560,100,10320,100,10080,100C9840,100,9600,100,9360,100C9120,100,8880,100,8640,100C8400,100,8160,100,7920,100C7680,100,7440,100,7200,100C6960,100,6720,100,6480,100C6240,100,6000,100,5760,100C5520,100,5280,100,5040,100C4800,100,4560,100,4320,100C4080,100,3840,100,3600,100C3360,100,3120,100,2880,100C2640,100,2400,100,2160,100C1920,100,1680,100,1440,100C1200,100,960,100,720,100C480,100,240,100,120,100L0,100Z"
        ></path>
      </svg>
    </>
  );
}
