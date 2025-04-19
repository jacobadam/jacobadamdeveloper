import React from "react";

export default function HomeProjects() {
  return (
    <section className="py-20 relative bg-slate-100 dark:bg-black">
      <div className="w-full max-w-2xl lg:max-w-7xl px-6 lg:px-8 mx-auto">
        <h1 className="font-manrope font-medium text-4xl text-gray-900 dark:text-white mb-10 max-md:text-center">
          Professional Project Achievements
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="group flex items-center flex-col gap-8 w-full">
            <div className="w-full h-60">
              <img
                className="w-full h-full rounded-3xl object-cover"
                src="https://www.katieshevlin.com/hero-image.webp"
                alt="Content services website"
              />
            </div>
            <div className="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
              <div className="block">
                <h4 className="text-2xl font-manrope font-semibold text-gray-900 dark:text-white mb-1">
                  Content Services Website
                </h4>
                <p className="font-medium text-lg text-gray-400">
                  Content Design, Marketing
                </p>
              </div>
              <button className="border border-black bg-[#8FBC8F] hover:border-[#8FBC8F] py-2 px-3.5 rounded-full transition-all duration-300 group-hover:bg-black">
                <svg
                  className="stroke-black transition-all duration-300 group-hover:stroke-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={16}
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                    stroke=""
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="group flex items-center flex-col gap-8 w-full">
            <div className="w-full h-60">
              <img
                className="w-full h-full rounded-3xl object-cover"
                src="https://www.neilnevitt.com/homepage-image.webp"
                alt="Healthcare Website"
              />
            </div>
            <div className="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
              <div className="block">
                <h4 className="text-2xl font-manrope font-semibold text-gray-900 dark:text-white mb-1">
                  Healthcare Website
                </h4>
                <p className="font-medium text-lg text-gray-400">Healthcare</p>
              </div>
              <button className="border border-black bg-[#8FBC8F] hover:border-[#8FBC8F] py-2 px-3.5 rounded-full transition-all duration-300 group-hover:bg-black">
                <svg
                  className="stroke-black transition-all duration-300 group-hover:stroke-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={16}
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                    stroke=""
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
