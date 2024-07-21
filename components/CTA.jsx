import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="bg-white">
      <div className="gap-8 items-center py-9 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="w-full"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          alt="dashboard image"
        />
        <div className="mt-7 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-800">
            Let&apos;s create more tools and ideas that brings us together.
          </h2>
          <p className="mb-6 font-medium text-gray-500 md:text-lg">
            STORE helps you connect with friends and communities of people who
            share your interests. Connecting with your friends and family as
            well as discovering new ones is easy with features like Groups.
          </p>
          <Link
            href="#"
            className="inline-flex items-center text-white bg-gray-800 hover:bg-gray-700 focus:ring-2 focus:ring-gray-300 font-medium rounded-md text-base px-5 py-2.5 text-center shadow-md shadow-gray-400"
          >
            Get started
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
  );
};

export default CTA;
