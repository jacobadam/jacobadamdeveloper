import { motion } from "motion/react";
import React from "react";

const services = [
  {
    title: "Mobile First Design",
    description:
      "Optimized for every device, starting with mobile — ensuring fast load times, seamless navigation, and a user experience that drives engagement from the first tap",
    svgPath: "/custom-website.svg",
    alt: "Code icon",
  },
  {
    title: "Responsive Design",
    description:
      "Flexible layouts that respond smoothly to all screen sizes — ensuring visual consistency, intuitive interaction, and a great experience on every type of device",
    svgPath: "/responsive-design.svg",
    alt: "Devices icon",
  },
  {
    title: "Optimized Page Speed",
    description:
      "Websites designed to load fast and run smoothly — reducing bounce rates, keeping visitors engaged, and improving overall performance across all major devices",
    svgPath: "/performance-optimization.svg",
    alt: "Chart icon",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Strategic SEO implementation that improves visibility — boosting rankings in search results, increasing organic traffic, and helping your site reach more users",
    svgPath: "/seo.svg",
    alt: "SEO icon",
  },
];

export default function HomeServices() {
  return (
    <section className="w-full h-full py-24 md:py-8 flex items-center justify-center bg-zinc-950 dark:bg-zinc-950">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="lg:w-4/5 flex flex-col items-center justify-center mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h1 className="text-2xl xl:text-3xl font-bold mb-2 text-zinc-100">
              Quality Design, Real Impact
            </h1>
            <p className="text-gray-300 text-center leading-relaxed">
              Discover a range of solutions tailored <br /> to meet your
              business needs
            </p>
            <a
              href="/services"
              aria-label="Go to services"
              className="flex justify-center items-center relative h-[50px] w-40 overflow-hidden border border-[#6fa96f] bg-transparent px-3 text-[#6fa96f] dark:hover:text-black hover:shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#6fa96f] before:transition-all before:duration-500 hover:text-white hover:shadow-[#6fa96f] hover:before:left-0 hover:before:w-full rounded-full font-semibold mt-4"
            >
              <span className="relative">Services</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 p-0.5 transition-all duration-500 hover:scale-[1.00] hover:bg-slate-800"
              >
                <div className="h-full relative flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-slate-800 dark:bg-black p-8 transition-colors duration-500 group-hover:bg-slate-800">
                  <div className="inline-block rounded-lg p-2">
                    <img
                      className="w-11 h-11 object-contain bg-white p-1 rounded"
                      key={index}
                      src={service.svgPath}
                      alt={service.alt}
                      aria-hidden="true"
                      width="32"
                      height="32"
                    />
                  </div>
                  <h2 className="relative mb-4 w-full text-xl font-bold text-white dark:text-gray-50 text-center">
                    {service.title}
                  </h2>
                  <p className="relative text-gray-50 dark:text-gray-300 text-center hidden md:flex">
                    {service.description}
                  </p>
                </div>

                <motion.div
                  initial={{ rotate: "0deg" }}
                  animate={{ rotate: "360deg" }}
                  style={{ scale: 1.75 }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.5,
                    ease: "linear",
                  }}
                  className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-700 via-indigo-700/0 to-indigo-700 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
