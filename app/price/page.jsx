import React from "react";
import PricingComponent from "../../components/home/PricingComponent";
import FAQ from "../../components/FAQ";
import Link from "next/link";

const Price = () => {
  return (
    <>
      <section className="bg-gray-800 pt-20 mb-5">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl sm:text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Set up your store, pick a plan later
          </h1>
          <p className="mb-8 text-base sm:text-lg font-medium text-gray-300 lg:text-xl sm:px-16 xl:px-48">
            Here at STORE we focus on markets where technology, innovation, and
            capital can unlock long-term value and drive economic growth.
          </p>
          <div className="flex flex-col mb-8 lg:mb-10 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              href="/register"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-800 rounded-md bg-white hover:bg-gray-200 focus:ring-2 focus:ring-gray-200 shadow-sm shadow-gray-400"
            >
              Start your free trail
              <svg
                className="ml-2 -mr-1 w-5 h-5"
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
          </div>
        </div>
      </section>
      <PricingComponent />
      <FAQ />
    </>
  );
};

export default Price;
