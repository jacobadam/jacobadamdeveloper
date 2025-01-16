import React from "react";

const services = [
  {
    title: "Custom Build",
    description:
      "Clean, bespoke design with intuitive navigation and an engaging interface.",
    svgPath: "/custom-website2.svg",
    alt: "Code icon",
  },
  {
    title: "Responsive Design",
    description:
      "Websites that adapt to any screen size, ensuring an optimal experience across all devices.",
    svgPath: "/responsive-design.svg",
    alt: "Devices icon",
  },
  {
    title: "Performance Optimization",
    description:
      "A smooth, efficient user experience that drives engagement and conversion.",
    svgPath: "/performance-optimization.svg",
    alt: "Chart icon",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Proven SEO strategies that improve search rankings and drive more organic traffic. ",
    svgPath: "/seo.svg",
    alt: "SEO icon",
  },
];

export default function HomeServices() {
  return (
    <section className="flex items-center justify-center dark:bg-black">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="lg:w-4/5 flex flex-col items-center justify-center mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h1 className="text-2xl xl:text-3xl font-bold mb-2 dark:text-white">
              Quality Design, Real Impact
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
              Discover a range of solutions tailored <br /> to meet your
              business needs
            </p>
            <a
              href="/services"
              className="flex items-center justify-center gap-x-1 py-1 xxxs:py-2 px-4 text-white font-medium bg-indigo-600 duration-150 rounded-full mt-4"
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="block rounded-xl border p-4 shadow-lg"
              >
                <div className="flex flex-col items-center text-center sm:text-left sm:items-start">
                  <div className="inline-block rounded-lg p-2">
                    <img
                      className="w-11 h-11 object-contain bg-white p-1 rounded"
                      src={service.svgPath}
                      alt={service.alt}
                      aria-hidden="true"
                      width="32"
                      height="32"
                    />
                  </div>
                  <h1 className="mt-2 font-bold dark:text-white">
                    {service.title}
                  </h1>
                  <p className="hidden sm:mt-1 sm:block sm:text-base sm:text-gray-600 dark:sm:text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
