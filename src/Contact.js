import React from "react";

export default function Contact() {
  return (
    <section className="py-16 bg-slate-200 flex-grow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:items-start items-center lg:justify-start justify-center">
          <div className="flex flex-col items-center text-center px-4 sm:px-6">
            <h2 className="text-gray-900 text-2xl font-semibold leading-snug pb-5">
              Contact Us
            </h2>
            <p className="text-gray-600 text-md font-normal pb-6">
              This is your gateway to connect with us directly. Whether you have
              inquiries, feedback, or simply want to say hello.
            </p>
            <div className="py-6 border-t border-stone-300 text-center">
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
            {/* 
            <div className="flex justify-center items-center mb-10 mt-6">
              <a
                href="https://www.linkedin.com/in/jacobnevitt/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-900 transition-all duration-50"
              >
                <img
                  src="/linkedin.svg"
                  alt="LinkedIn Logo"
                  className="w-8 h-8"
                />
              </a>
            </div> */}
          </div>

          <div className="p-4 rounded-lg border shadow-2xl">
            <form action="" method="POST" className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="flex items-center mb-2 text-gray-900"
                >
                  Name{" "}
                  <svg
                    width="7"
                    height="7"
                    className="ml-1"
                    viewBox="0 0 7 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                      fill="#EF4444"
                    />
                  </svg>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="flex items-center mb-2 text-gray-900"
                >
                  Email{" "}
                  <svg
                    width="7"
                    height="7"
                    className="ml-1"
                    viewBox="0 0 7 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                      fill="#EF4444"
                    />
                  </svg>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="flex items-center mb-2 text-gray-900"
                >
                  Message{" "}
                  <svg
                    width="7"
                    height="7"
                    className="ml-1"
                    viewBox="0 0 7 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                      fill="#EF4444"
                    />
                  </svg>
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
