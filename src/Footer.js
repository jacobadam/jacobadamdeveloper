import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-slate-200 to-white">
      <div className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex space-x-10 justify-center items-center mb-10 mt-4">
              <a
                href="https://www.linkedin.com/in/jacobnevitt/"
                className="block text-gray-900 transition-all duration-500 hover:text-indigo-600"
              >
                <img
                  className="w-8 h-8"
                  src="/linkedin.svg"
                  alt="LinkedIn Logo"
                />
              </a>
            </div>
            <span className="text-lg text-gray-500 text-center block pb-4">
              © 2024 Jacob Adam. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
