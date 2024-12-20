import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function HomeContact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        "ojNtN4lneN6w9tjlE"
      )
      .then(
        () => {
          console.log("Success!");
          e.target.reset();
          setMessageSent(true);
          setTimeout(() => setMessageSent(false), 5000);
        },
        (error) => {
          console.log("Failed...", error.text);
          setErrorMessage("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-slate-200 dark:bg-slate-900">
      {/* Header Section */}
      <h2 className="text-2xl font-bold text-center pt-8 dark:text-white">
        Contact
      </h2>
      {/* <p className="text-gray-400 text-sm text-center leading-relaxed">
            Discover a range of tailored solutions designed to meet your needs,
            from custom front-end websites to performance and SEO optimization.
          </p> */}

      {/* Form */}

      {messageSent && (
        <p
          className="text-center text-indigo-600 text-xl font-bold"
          aria-live="polite"
          role="alert"
        >
          Message sent!
        </p>
      )}
      {errorMessage && (
        <p
          className="text-center text-red-600 text-xl font-bold"
          aria-live="assertive"
          role="alert"
        >
          {errorMessage}
        </p>
      )}
      <form
        ref={form}
        onSubmit={sendEmail}
        aria-labelledby="contact-form"
        id="contact-form"
        className="w-full max-w-lg p-6"
      >
        <div className="relative mb-6">
          <label
            htmlFor="name"
            className="flex items-center mb-2 text-gray-600 dark:text-white text-sm font-medium"
          >
            Name
            <svg
              width="7"
              height="7"
              className="ml-1"
              viewBox="0 0 7 7"
              fill="none"
              aria-hidden="true"
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
            required
            aria-required="true"
            aria-label="Your name"
            className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 bg-white dark:bg-gray-00 rounded-full placeholder-gray-400 focus:outline-none"
          />
        </div>

        <div className="relative mb-6">
          <label
            htmlFor="email"
            className="flex items-center mb-2 text-gray-600 dark:text-white text-sm font-medium"
          >
            Email
            <svg
              width="7"
              height="7"
              className="ml-1"
              viewBox="0 0 7 7"
              fill="none"
              aria-hidden="true"
              aria-label="Your email address"
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
            className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 bg-white rounded-full placeholder-gray-400 focus:outline-none"
          />
        </div>

        <div className="relative mb-6">
          <label
            htmlFor="message"
            className="flex items-center mb-2 text-gray-600 dark:text-white text-sm font-medium"
          >
            Message
            <svg
              width="7"
              height="7"
              className="ml-1"
              viewBox="0 0 7 7"
              fill="none"
              aria-hidden="true"
              aria-label="Your message"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                fill="#EF4444"
              />
            </svg>
          </label>
          <textarea
            className="block w-full h-40 px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 bg-white rounded-2xl placeholder-gray-400 focus:outline-none resize-none"
            type="text"
            name="message"
            required
          />
        </div>

        <button
          type="submit"
          value="Send"
          title="Submit your message"
          className="w-full sm:w-32 py-2 flex items-center justify-center gap-x-1 text-white font-medium bg-indigo-600 duration-150 rounded-full mt-4 text-nowrap"
        >
          Submit
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
