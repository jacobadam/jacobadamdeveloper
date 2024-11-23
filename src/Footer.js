import React from "react";

export default function Footer() {
  return (
    <footer class="w-full bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
          {/* <ul class="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-10 mb-10 border-b border-black">
            <li>
              <a href="/" class="text-gray-800 hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="/about:;" class=" text-gray-800 hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="/services" class=" text-gray-800 hover:text-gray-900">
                Services
              </a>
            </li>
            <li>
              <a href="/portfolio" class=" text-gray-800 hover:text-gray-900">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/contact" class=" text-gray-800 hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul> */}
          <div class="flex space-x-10 justify-center items-center mb-10 mt-4">
            <img
              href="https://www.linkedin.com/in/jacobnevitt/"
              class="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 w-8 h-8"
              src="/linkedin.svg"
              alt="Linkedin Logo"
            />
          </div>
          <span class="text-lg text-gray-500 text-center block pb-4">
            © 2024 Jacob Adam. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
