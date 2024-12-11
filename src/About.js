import React from "react";

export default function About() {
  return (
    <section className="pt-4 xs:pt-8 pb-20 relative bg-slate-200 flex-grow">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          {/* Header Section */}
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <h2 className="text-gray-900 text-2xl lg:text-4xl font-semibold leading-normal lg:text-start text-center">
              Hello,{" "}
              <span className="text-indigo-600 font-bold">I’m Jacob.</span>
            </h2>
            <p className="max-w-xl text-center text-gray-500 text-sm lg:text-base font-normal leading-relaxed">
              As a Web Development Services We are Committed to Building Custom
              Web Solutions that Drive Business Success.
            </p>
          </div>

          {/* Content Section */}
          <div className="justify-start items-center lg:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            {/* Image Section */}
            <img
              className="mx-auto w-60 h-60 ms:w-96 ms:h-96 md:w-full md:h-full rounded-full object-cover aspect-square"
              src="/jacobadam.webp"
              alt="Jacob Adam"
            />

            {/* Text Content Section */}
            <div className="flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="flex-col justify-center items-start gap-3 flex">
                <p className="text-gray-500 text-sm lg:text-base font-normal leading-relaxed lg:text-start text-center px-8 md:px-0">
                  At our web development agency, we specialize in crafting
                  bespoke online solutions tailored to elevate businesses toward
                  their digital objectives. Committed to continuous evolution,
                  we remain abreast of cutting-edge web technologies and trends,
                  ensuring a constant delivery of unparalleled excellence.
                </p>
                <p className="text-gray-500 text-sm lg:text-base font-normal leading-relaxed lg:text-start text-center px-8 md:px-0">
                  Our ethos is rooted in equipping clients with the essential
                  tools for triumph in the digital realm. Committed to
                  continuous evolution, we remain abreast of cutting-edge web
                  technologies and trends, ensuring a constant delivery of
                  unparalleled excellence. We firmly believe in furnishing every
                  business with a digital presence that authentically embodies
                  their brand essence and effectively resonates with their
                  target demographic.
                </p>
              </div>

              {/* Button Section */}
              <a
                href="/contact"
                className="flex items-center justify-center gap-x-1 py-1 xxxs:py-2 px-4 text-white font-medium bg-indigo-600 duration-150 rounded-full"
                aria-label="Visit services page"
              >
                Contact me
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
          </div>
        </div>
      </div>
    </section>
  );
}
