import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("contact_service", "contact_form", form.current, {
        publicKey: "ojNtN4lneN6w9tjlE",
      })
      .then(
        () => {
          console.log("Success!");
          setMessageSent(true);
          setTimeout(() => setMessageSent(false), 5000);
        },
        (error) => {
          console.log("Failed...", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section
      className="py-16 bg-transparent flex-grow z-10"
      style={{
        paddingTop: "clamp(12rem, 10vw, 8rem)",
        minHeight: "calc(100vh - clamp(4rem, 10vw, 8rem))",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:items-start items-center lg:justify-start justify-center">
          <div className="flex flex-col items-center text-center px-4 sm:px-6">
            <h2 className="text-gray-900 dark:text-white text-2xl lg:text-3xl font-semibold leading-snug pb-5">
              Contact
            </h2>
            <p className="text-gray-900 dark:text-white text-md font-normal pb-6">
              Get in touch and let's discuss how I can serve your business.
            </p>
            <div className="py-6 border-t border-gray-400  dark:border-zinc-200 text-center">
              <div className="flex flex-col items-center">
                <div className="rounded-lg p-3">
                  <img
                    src="/email.svg"
                    alt="Email Icon"
                    className="w-6 h-6 object-contain dark:invert"
                  />
                </div>

                <p className="text-gray-700 dark:text-white text-xs font-normal">
                  greenhousewebdesigns@gmail.com
                </p>
              </div>
              <div className="flex flex-col items-center mt-8">
                <div className="rounded-lg p-3">
                  <img
                    src="/phone.svg"
                    alt="Phone Icon"
                    className="w-6 h-6 object-contain dark:invert"
                  />
                </div>

                <p className="text-gray-700 dark:text-white text-xs font-normal">
                  (+1) 236-885-4130
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg">
            {messageSent && (
              <p
                className="text-center text-[#6fa96f] dark:text-indigo-600 text-xl font-bold"
                aria-live="polite"
              >
                Message sent!
              </p>
            )}
            <form
              className="space-y-4"
              ref={form}
              onSubmit={sendEmail}
              aria-labelledby="contact-form"
            >
              <div>
                <label
                  htmlFor="name"
                  className="flex items-center mb-2 text-gray-900 dark:text-white"
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
                  id="name"
                  type="text"
                  name="name"
                  required
                  aria-required="true"
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="flex items-center mb-2 text-gray-900 dark:text-white"
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
                  required
                  className="w-full border rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="flex items-center mb-2 text-gray-900 dark:text-white"
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
                  type="text"
                  required
                  rows="4"
                  className="w-full border rounded-md px-4 py-2"
                ></textarea>
              </div>
              <button
                type="submit"
                value="Send"
                title="Submit your message"
                className="flex justify-center items-center relative h-[50px] w-40 overflow-hidden border dark:border-indigo-500 border-[#6fa96f] dark:hover:border-indigo-500 bg-transparent px-3 dark:text-indigo-500 text-[#6fa96f] dark:hover:text-black hover:shadow-2xl before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#6fa96f] dark:before:bg-indigo-500 before:transition-all before:duration-300 hover:text-white hover:shadow-[#6fa96f] dark:hover:shadow-indigo-500 hover:before:left-0 hover:before:w-full rounded-full font-semibold mt-4"
              >
                <span className="relative z-3">Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
