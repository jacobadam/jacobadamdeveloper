import React from "react";

export default function About() {
  return (
    <section className="pt-4 xs:pt-8 pb-20 relative bg-slate-200 dark:bg-slate-900 flex-grow">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          {/* Header Section */}
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <h2 className="text-gray-900 dark:text-white text-2xl lg:text-4xl font-semibold leading-normal lg:text-start text-center">
              Hello,{" "}
              <span className="text-indigo-600 font-bold">I’m Jacob.</span>
            </h2>
            {/* <p className="max-w-xl text-center text-gray-900 dark:text-white text-sm lg:text-base font-medium leading-relaxed">
              As a Web Development Services We are Committed to Building Custom
              Web Solutions that Drive Business Success.
            </p> */}
          </div>

          {/* Content Section */}
          <div className="justify-start items-center lg:gap-8 grid lg:grid-cols-2 grid-cols-1">
            {/* Image Section */}
            <img
              className="mx-auto w-60 h-60 ms:w-96 ms:h-96 md:w-120 md:h-120 rounded-full object-cover aspect-square"
              src="/jacobadam.webp"
              alt="Jacob Adam"
            />

            {/* Text Content Section */}
            <div className="flex-col justify-center lg:items-start items-center gap-10 inline-flex pt-8 lg:pt-0">
              <div className="flex-col justify-center items-start gap-3 flex">
                <p className="text-gray-900 dark:text-white text-sm lg:text-base font-normal leading-relaxed lg:text-start text-center px-4 lg:px-0">
                  I am a front-end software engineer & a freelance web
                  developer, currently living in Nelson, BC. I have previously
                  worked at SpareRoom, the UK's largest property rental website.
                  I then spent 3 years working as a software developer at
                  Article, one of Canada's fastest-growing eCommerce companies.
                </p>
                <p className="text-gray-900 dark:text-white text-sm lg:text-base font-normal leading-relaxed lg:text-start text-center px-8 lg:px-0">
                  Having grown up in Liverpool, U.K, I have lived in many places
                  including London, New York, Vancouver and Sayulita. In my
                  freetime I like to run, watch as many of the Criterian
                  collection as possible, play any and all videogames from the
                  90's and most recently learnt to ski.
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
