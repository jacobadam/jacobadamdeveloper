import React from "react";

export default function HomeServices() {
  const services = [
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
  ];

  return (
    <section className="flex items-center justify-center">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-gray-600">
              Discover a range of tailored solutions designed to meet your
              needs, from custom front-end websites to performance and SEO
              optimization.
            </p>
            <a
              href="/services"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none"
            >
              Learn More
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="block rounded-xl border p-4">
                <div className="inline-block rounded-lg bg-gray-50 p-2">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
