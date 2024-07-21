"use client";
import React, { useState } from "react";

const PricingComponent = () => {
  const pricings = [1, 2, 3, 4];
  const [Type, SetType] = useState(true);
  const handleType = () => {
    SetType(!Type);
  };
  return (
    <section className="bg-white pb-10">
      <div className="container px-6 py-9 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-gray-500 font-medium">
              No Contracts. No surorise fees.
            </p>
          </div>

          <div className="overflow-hidden p-0.5 mt-6 border rounded-md">
            <div className="sm:-mx-0.5 flex">
              <button
                className={
                  Type
                    ? "focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-white bg-gray-800 rounded-md font-medium"
                    : "focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-gray-800 bg-transparent rounded-md hover:bg-gray-200 font-medium"
                }
                onClick={handleType}
              >
                Monthly
              </button>
              <button
                className={
                  Type
                    ? "focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-gray-800 bg-transparent rounded-md hover:bg-gray-200 font-medium"
                    : "focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-white bg-gray-800 rounded-md font-medium"
                }
                onClick={handleType}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="px-6 py-4 sm:mx-auto mx-2 transition-colors duration-300 transform rounded-lg border">
            <p className="text-lg font-medium text-gray-800">Intro</p>
            <h4 className="mt-2 text-4xl font-semibold text-gray-800">
              {Type ? "$19" : "$99"}{" "}
              <span className="text-base font-medium text-gray-500">
                / Month
              </span>
            </h4>

            <p className="mt-4 text-gray-500 font-medium">
              For most businesses that want to optimaize web queries.
            </p>

            <div className="mt-8 space-y-8">
              {pricings.map((p, index) => (
                <div className="flex items-center" key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-800"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 font-medium">
                    All limited links
                  </span>
                </div>
              ))}
            </div>

            <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-00 shadow-md shadow-gray-400">
              Choose plan
            </button>
          </div>

          <div className="px-6 py-4 sm:mx-auto mx-2 transition-colors duration-300 transform rounded-lg border">
            <p className="text-lg font-medium text-gray-800">Base</p>

            <h4 className="mt-2 text-4xl font-semibold text-gray-800">
              {Type ? "$39" : "$199"}{" "}
              <span className="text-base font-medium text-gray-500">
                / Month
              </span>
            </h4>

            <p className="mt-4 text-gray-500 font-medium">
              For most businesses that want to optimaize web queries.
            </p>

            <div className="mt-8 space-y-8">
              {pricings.map((p, index) => (
                <div className="flex items-center" key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-800"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 font-medium">
                    All limited links
                  </span>
                </div>
              ))}
            </div>

            <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 shadow-md shadow-gray-400">
              Choose plan
            </button>
          </div>

          <div className="px-6 py-4 sm:mx-auto mx-2 transition-colors duration-300 transform rounded-lg border">
            <p className="text-lg font-medium text-gray-800">Base</p>

            <h4 className="mt-2 text-4xl font-semibold text-gray-800">
              {Type ? "$99" : "$299"}{" "}
              <span className="text-base font-medium text-gray-500">
                / Month
              </span>
            </h4>

            <p className="mt-4 text-gray-500 font-medium">
              For most businesses that want to optimaize web queries.
            </p>

            <div className="mt-8 space-y-8">
              {pricings.map((p, index) => (
                <div className="flex items-center" key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-800"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 font-medium">
                    All limited links
                  </span>
                </div>
              ))}
            </div>

            <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 shadow-md shadow-gray-400">
              Choose plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;
