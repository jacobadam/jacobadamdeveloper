import React from "react";

export default function About() {
  return (
    <section
      className="py-16 relative"
      style={{
        paddingTop: "clamp(8rem, 10vw, 8rem)",
        minHeight: "calc(100vh - clamp(4rem, 10vw, 8rem))",
      }}
    >
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <h2 className="text-center text-gray-900 dark:text-zinc-100 text-2xl lg:text-3xl font-bold font-manrope leading-normal">
              About Us
            </h2>
            <p className="max-w-xl text-center text-zinc-600 dark:text-zinc-200 text-base font-normal leading-relaxed">
              At Greenhouse Web Designs, we're passionate about building custom
              websites that help small businesses thrive online.
            </p>
          </div>
          <div className="justify-start items-center lg:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <img
              className="mx-auto w-72 h-72 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full object-cover aspect-square"
              src="/jacobadam.webp"
              alt="Jacob Adam"
            />
            <div className="flex-col justify-center lg:items-start items-center gap-10 lg:gap-0 inline-flex">
              <div className="flex-col justify-center items-start gap-3 flex">
                <p className="text-zinc-600 dark:text-zinc-300 text-base font-normal leading-relaxed lg:text-start text-center">
                  I'm Jacob, founder of Greenhouse Web Designs — a small studio
                  with a big mission: helping small businesses grow online
                  through thoughtful, custom-built websites.
                </p>
                <p className="text-zinc-600 dark:text-zinc-300 text-base font-normal leading-relaxed lg:text-start text-center">
                  I began my career at SpareRoom, the UK’s largest property
                  rental platform, before moving to Article, one of Canada’s top
                  eCommerce brands. Along the way, I’ve built a strong
                  foundation in scalable, user-focused web development — and now
                  I bring that experience directly to small business owners who
                  want more than a cookie-cutter solution.
                </p>
                <p className="text-zinc-600 dark:text-zinc-300 text-base font-normal leading-relaxed lg:text-start text-center">
                  At Greenhouse, I focus on creating websites that truly reflect
                  the personality and goals of your business. Whether you're
                  just getting started or looking to refresh your online
                  presence, I’ll work closely with you to build a site that
                  feels like an extension of your brand — and helps convert
                  visitors into loyal customers.
                </p>
                <p className="text-zinc-600 dark:text-zinc-300 text-base font-normal leading-relaxed lg:text-start text-center">
                  Originally from Liverpool, I’ve lived and worked in cities
                  around the world — London, New York, Vancouver, Sayulita — and
                  now call Kimberley, BC home. When I’m not designing or coding,
                  you’ll find me on a trail run, skiing local powder, deep into
                  a 90s video game, or working through the Criterion Collection.
                </p>
                <p className="text-zinc-600 dark:text-zinc-300 text-base font-normal leading-relaxed lg:text-start text-center">
                  If you’re ready to grow your digital presence with a website
                  that works as hard as you do, I’d love to hear from you.
                </p>
              </div>
              <a
                href="/contact"
                aria-label="Go to contact page"
                className="flex justify-center items-center relative h-[50px] w-40 overflow-hidden border dark:border-indigo-500 border-[#6fa96f] dark:hover:border-indigo-500 bg-transparent px-3 dark:text-indigo-500 text-[#6fa96f] dark:hover:text-black hover:shadow-2xl before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#6fa96f] dark:before:bg-indigo-500 before:transition-all before:duration-300 hover:text-white hover:shadow-[#6fa96f] dark:hover:shadow-indigo-500 hover:before:left-0 hover:before:w-full rounded-full font-semibold mt-8"
              >
                <span className="relative z-3">Let's Talk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
