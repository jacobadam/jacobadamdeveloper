import React from "react";

export default function HomeServices() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-4xl text-center font-bold text-gray-900 py-5">
            Services
          </h2>
          <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {[
            {
              title: "Custom Front-End Website",
              description:
                "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
              svgPath: "/custom-website4.svg",
            },
            {
              title: "Responsive Design",
              description:
                "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
              svgPath: "/responsive-design2.svg",
            },
            {
              title: "Performance Optimization",
              description:
                "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
              svgPath: "/performance-optimization2.svg",
            },
            {
              title: "Search Engine Optimization",
              description:
                "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
              svgPath: "/seo2.svg",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4 min-h-[300px]"
            >
              <div className="rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500">
                <img
                  src={feature.svgPath}
                  alt={feature.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                {feature.title}
              </h4>
              <p className="text-sm font-normal text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
