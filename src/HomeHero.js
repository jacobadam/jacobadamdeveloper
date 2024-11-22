export default function HomepageHero() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 md:py-28 text-gray-600 overflow-hidden md:px-8 flex flex-col lg:flex-row">
        {/* Text Section */}
        <div class="flex flex-col items-center justify-center px-4 text-center md:max-w-xl mx-auto">
          <h1 class="text-4xl text-gray-800 font-extrabold sm:text-5xl">
            Designing and Building Websites for Your Needs
          </h1>
          <p class="mt-4 text-gray-600">
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          </p>
          <div class="flex items-center gap-x-3 mt-6">
            <a
              href="/services"
              class="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full"
              aria-label="Visit services page"
            >
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="/contact"
              class="flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 font-medium duration-150"
              aria-label="Get in touch"
            >
              Get in touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"
                />
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
    </section>
  );
}
