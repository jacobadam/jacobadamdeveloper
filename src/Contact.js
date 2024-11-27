import React from "react";

export default function Contact() {
  return (
    <section className="py-16 bg-slate-200 flex-grow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:items-start items-center lg:justify-start justify-center">
          <div className="flex flex-col items-center text-center px-4 sm:px-6">
            <h2 className="text-gray-900 text-4xl font-semibold font-manrope leading-snug pb-5">
              Contact Us
            </h2>
            <p className="text-gray-600 text-lg font-normal pb-6">
              This is your gateway to connect with us directly. Whether you have
              inquiries, feedback, or simply want to say hello.
            </p>
            <div className="py-6 border-y border-stone-300 text-center">
              <div className="flex items-center gap-4">
                <div className="rounded-lg p-3">
                  <img
                    src="/email2.svg"
                    alt="Email Icon"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div className="flex flex-col items-center w-full">
                  <h6 className="text-gray-900 text-sm font-medium">Email</h6>
                  <p className="text-gray-700 text-xs font-normal text-center">
                    jacobadamdeveloper@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <div className="rounded-lg p-3">
                  <img
                    src="/phone2.svg"
                    alt="Phone Icon"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div className="flex flex-col items-center w-full">
                  <h6 className="text-gray-900 text-sm font-medium">Contact</h6>
                  <p className="text-gray-700 text-xs font-normal text-center">
                    (+1) 236-885-4130
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center mb-10 mt-6">
              <a
                href="https://www.linkedin.com/in/jacobnevitt/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-900 transition-all duration-500 hover:text-indigo-600"
              >
                <img
                  src="/linkedin.svg"
                  alt="LinkedIn Logo"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>

          <div>
            <form action="" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-gray-900">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full border rounded-md px-4 py-2"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
