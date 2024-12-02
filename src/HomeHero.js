export default function HomepageHero() {
  return (
    <section className="bg-slate-200">
      <div className="max-w-screen-xl mx-auto px-4 pt-8 pb-20 md:py-16 lg:pt-4 lg:pb-44 xl:pt-8 xl:pb-56 2xl:pb-72 2xl:pt-32 text-gray-600 overflow-hidden md:px-8 flex flex-col lg:flex-row">
        {/* Text Section */}
        <div className="flex flex-col items-center justify-center px-4 text-center md:max-w-xl mx-auto lg:pt-40">
          <h1 className="text-2xl xxs:text-4xl text-gray-800 font-extrabold sm:text-5xl">
            Designing and Building Websites for Your Needs
          </h1>
          <p className="mt-4 text-gray-600">
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          </p>
          <div className="flex items-center xxxs:gap-x-4 mt-6">
            <a
              href="/services"
              className="flex items-center justify-center gap-x-1 py-1 xxxs:py-2 px-4 text-white font-medium bg-indigo-600 duration-150 rounded-full"
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
            <a
              href="/contact"
              className="flex items-center justify-center gap-x-1 py-1 xxxs:py-2 px-4 text-gray-700 xxxs:border-black xxxs:border xxxs:rounded-full duration-150 font-semibold text-nowrap"
              aria-label="Get in touch"
            >
              Get in touch
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

        {/* Image Section */}
        <div className="mt-8 lg:mt-0 lg:ml-12 flex justify-center">
          <img
            src="hero-image.svg"
            className="max-w-full"
            alt="A person working on a computer with code visible"
          />
        </div>
      </div>

      {/* Divider */}
      {/* <div className="flex justify-center transition-opacity duration-700 ease-in-out opacity-100">
        <img
          src="wave7.png"
          alt="Decorative divider"
          className="w-full h-[300px]"
        />
      </div> */}
    </section>
  );
}
