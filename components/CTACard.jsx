import Link from "next/link";
import React from "react";

const CTACard = () => {
  return (
    <section className="bg-gray-800 pb-4">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 sm:text-4xl text-2xl tracking-tight font-extrabold leading-tight text-white">
            Start your free trial today
          </h2>
          <p className="mb-6 font-medium text-gray-300 md:text-lg">
            Try Our Platform for 30 days. No Payment required.
          </p>
          <Link
            href="/register"
            className="text-white border border-white hover:bg-gray-700 focus:ring-1 focus:ring-gray-500 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          >
            Free trial for 30 days
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTACard;
