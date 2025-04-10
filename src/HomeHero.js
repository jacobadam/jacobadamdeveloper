// import { useEffect } from "react";
import { motion } from "motion/react";

export default function HomepageHero() {
  const text = "Web Design That Grows With Your Business";
  const words = text.split(" ");
  return (
    <section className="h-screen sm:pb-20 bg-slate-200 dark:bg-black">
      <div className="h-full flex flex-col lg:flex-row items-center justify-center relative max-w-screen-xl mx-auto overflow-hidden px-4 pb-16 md:pb-0 md:px-8">
        <div className="flex flex-col items-center justify-center px-4 text-center md:max-w-xl mx-auto">
          <motion.h1
            className="flex flex-row flex-wrap justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 dark:text-white font-extrabold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="flex flex-row mr-2">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: (wordIndex * 5 + letterIndex) / 20,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>
          <p className="mt-4 text-gray-600 dark:text-white">
            With a focus on clean, responsive design and search engine
            optimization, I build sites that help your business thrive.
          </p>
          <div className="flex items-center xxxs:gap-x-4 mt-8 lg:mt-4">
            <a
              href="/services"
              className="flex items-center justify-center gap-x-1 py-1 xxxs:py-2 px-4 text-black dark:text-grey-200 font-medium bg-[#8FBC8F] duration-150 rounded-full"
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
              className="flex items-center justify-center gap-x-1 py-1 xxxs:py-2 px-4 text-black xxxs:border-black xxxs:border xxxs:rounded-full duration-150 font-semibold text-nowrap dark:text-[#8FBC8F] dark:border-[#8FBC8F]"
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
            alt="A graphic of a laptop and a mobile device"
            width="500"
            height="287"
          />
        </div>
      </div>
    </section>
  );
}
