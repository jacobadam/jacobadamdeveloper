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
    <section className="flex items-center justify-center bg-gray-50 dark:bg-slate-900">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="lg:w-4/5 flex flex-col items-center justify-center mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h1 className="text-2xl xl:text-3xl font-bold mb-2 dark:text-gray-50">
              Quality Design, Real Impact
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
              Discover a range of solutions tailored <br /> to meet your
              business needs
            </p>
            <a
              href="/services"
              aria-label="Go to services"
              class="flex justify-center items-center relative h-[50px] w-40 overflow-hidden border border-[#8FBC8F] bg-gray-50 dark:bg-transparent px-3 text-black dark:text-[#8FBC8F] dark:hover:text-black hover:shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#8FBC8F] before:transition-all before:duration-500 hover:text-white hover:shadow-[#8FBC8F] hover:before:left-0 hover:before:w-full rounded-full font-semibold mt-4"
            >
              <span class="relative z-3">Services</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="block rounded-xl border border-gray-50 p-4 shadow-lg"
              >
                <div className="flex flex-col items-center text-center sm:text-left sm:items-start">
                  <div className="inline-block rounded-lg p-2">
                    <img
                      className="w-11 h-11 object-contain bg-gray-50 p-1 rounded"
                      src={service.svgPath}
                      alt={service.alt}
                      aria-hidden="true"
                      width="32"
                      height="32"
                    />
                  </div>
                  <h1 className="mt-2 font-bold dark:text-gray-50">
                    {service.title}
                  </h1>
                  <p className="hidden sm:mt-1 sm:block sm:text-base sm:text-gray-600 dark:sm:text-gray-300">
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
