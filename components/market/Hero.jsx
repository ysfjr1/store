import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-gray-800 pt-14">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 sm:ml-5 ml-1">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl text-white">
            Promote your business
          </h1>
          <p className="max-w-2xl mb-6 font-medium text-gray-300 lg:mb-8 md:text-lg lg:text-xl">
            Control everything from a single platform with centralized
            inventory, order management, and pricing.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base sm:text-lg font-medium text-center text-gray-800 rounded-md bg-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 shadow-sm shadow-gray-400"
          >
            Get started
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
