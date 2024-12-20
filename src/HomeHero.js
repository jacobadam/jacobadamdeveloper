export default function HomepageHero() {
  return (
    <section className="h-screen sm:pb-20 bg-slate-200 dark:bg-black">
      <div className="h-full flex flex-col lg:flex-row items-center justify-center relative max-w-screen-xl mx-auto overflow-hidden px-4 md:px-8">
        {/* Text Section */}
        <div className="flex flex-col items-center justify-center px-4 text-center md:max-w-xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 dark:text-white font-extrabold">
            Custom websites that deliver results and drive success
          </h1>
          <p className="mt-4 text-gray-600 dark:text-white">
            Building custom websites with a focus on clean, responsive design,
            and optimized for search engines. Let’s create a site delivers
            results and helps your business thrive.
          </p>
          <div className="flex items-center xxxs:gap-x-4 mt-8 lg:mt-4">
            <a
              href="/services"
              className="flex items-center justify-center gap-x-1 py-1 xxxs:py-2 px-4 text-white font-medium bg-indigo-600 duration-150 rounded-full"
              aria-label="Go to services page"
            >
              <span>Services</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" />
              </svg>
            </a>
            <a
              href="/contact"
              className="flex items-center justify-center gap-x-1 py-1 xxxs:py-2 px-4 text-gray-700 xxxs:border-black xxxs:border xxxs:rounded-full duration-150 font-semibold text-nowrap dark:text-white dark:border-indigo-600"
              aria-label="Go to contact page"
            >
              <span>Get in touch</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-12 lg:mt-0 lg:ml-12 flex justify-center">
          <img
            src="hero-image.svg"
            className="w-3/4 md:w-2/4 lg:w-full"
            alt="A graphic showing a laptop and a mobile device, both displaying code"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
