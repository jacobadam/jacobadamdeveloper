// import { useEffect } from "react";
import { motion } from "motion/react";

export default function HomepageHero() {
  const text = "Web Design That Grows With Your Business";
  const words = text.split(" ");
  return (
    <section className="h-screen sm:pb-20 bg-slate-100 dark:bg-black">
      <div className="h-full flex flex-col lg:flex-row items-center justify-center relative max-w-screen-xl mx-auto overflow-hidden px-4 pb-16 md:pb-0 md:px-8">
        <div className="flex flex-col items-center justify-center px-4 text-center md:max-w-xl mx-auto">
          <motion.h1
            className="flex flex-row flex-wrap justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 dark:text-slate-100 font-extrabold"
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
          <p className="mt-4 text-gray-600 dark:text-slate-100">
            With a focus on clean, responsive design and search engine
            optimization, I build sites that help your business thrive.
          </p>
          <div className="flex items-center xxxs:gap-x-4 mt-8 lg:mt-4">
            <a
              href="/services"
              aria-label="Go to services"
              class="flex justify-center items-center relative h-[50px] w-40 overflow-hidden border border-[#8FBC8F] bg-slate-100 dark:bg-black px-3 text-black dark:text-[#8FBC8F] dark:hover:text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#8FBC8F] before:transition-all before:duration-500 hover:text-white hover:shadow-[#8FBC8F] hover:before:left-0 hover:before:w-full rounded-full font-semibold"
            >
              <span class="relative z-10">Services</span>
            </a>
            <a
              href="/contact"
              aria-label="Go to contact page"
              className="flex justify-center items-center relative h-[50px] w-40 overflow-hidden hover:border hover:border-[#8FBC8F] bg-slate-100 dark:bg-black px-3 text-black dark:text-[#8FBC8F] dark:hover:text-black hover:shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#8FBC8F] before:transition-all before:duration-300 hover:text-white hover:shadow-[#8FBC8F] hover:before:left-0 hover:before:w-full hover:rounded-full font-semibold"
            >
              <span class="relative z-10">Get in touch</span>
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
