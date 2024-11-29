import React, { useState } from "react";

export default function HomeContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", { name, email, message });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 bg-slate-200">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 pt-5">Contact</h2>
        <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto py-8">
          Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-lg p-6">
        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            Name
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 bg-white rounded-full placeholder-gray-400 focus:outline-none"
            required
          />
        </div>

        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            Email
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 bg-white rounded-full placeholder-gray-400 focus:outline-none"
            required
          />
        </div>

        <div className="relative mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
            Message
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
            className="block w-full h-40 px-4 py-2.5 text-base leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 bg-white rounded-2xl placeholder-gray-400 focus:outline-none resize-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full h-12 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 rounded-full shadow-xs text-white text-base font-semibold leading-6"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
