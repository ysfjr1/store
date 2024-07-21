import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-white pt-14 pb-5">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 sm:ml-5 ml-1">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl text-gray-800">
            The platform commerce is built on
          </h1>
          <p className="max-w-2xl mb-6 font-medium text-gray-600 lg:mb-8 md:text-lg lg:text-xl">
            More than a million of the world&apos;s most successful brands trust
            Store to sell, ship and process payments anywhere.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base sm:text-lg font-medium text-center text-white rounded-md bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 shadow-md shadow-gray-400"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base sm:text-lg font-medium text-center text-gray-900 border border-gray-500 rounded-md hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 shadow-md shadow-gray-300"
          >
            Speak to Sales
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
