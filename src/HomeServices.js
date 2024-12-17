import React from "react";

const services = [
  {
    title: "Custom Front-End Website",
    description:
      "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    svgPath: "/custom-website2.svg",
  },
  {
    title: "Responsive Design",
    description:
      "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    svgPath: "/responsive-design.svg",
  },
  {
    title: "Performance Optimization",
    description:
      "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    svgPath: "/performance-optimization.svg",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    svgPath: "/seo.svg",
  },
];

export default function HomeServices() {
  return (
    <section className="flex items-center justify-center">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="lg:w-4/5 flex flex-col items-center justify-center mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-2xl font-bold mb-2">Our Services</h2>
            <p className="text-gray-400 text-center leading-relaxed">
              Discover a range of tailored solutions designed to meet your
              needs, from custom front-end websites to performance and SEO
              optimization.
            </p>
            <a
              href="/services"
              className="flex items-center justify-center gap-x-1 py-1 xxxs:py-2 px-4 text-white font-medium bg-indigo-600 duration-150 rounded-full mt-4"
              aria-label="Visit services page"
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
              <div key={index} className="block rounded-xl border p-4">
                <div className="flex flex-col items-center text-center sm:text-left sm:items-start">
                  <div className="inline-block rounded-lg p-2">
                    <img
                      className="w-11 h-11 object-contain"
                      src={service.svgPath}
                      alt={service.title}
                    />
                  </div>
                  <h3 className="mt-2 font-bold">{service.title}</h3>
                  <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
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
