import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SliderCard from "./SliderCard";

export default function HomePortfolio() {
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

  return (
    <div className="text-center bg-stone-300 py-8">
      <h2 className="text-2xl lg:text-3xl font-semibold lg:font-bold text-gray-900 pt-5 py-8">
        Portfolio
      </h2>

      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <SliderCard
              image={slide.image}
              title={slide.title}
              description={slide.description}
              url={slide.url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
