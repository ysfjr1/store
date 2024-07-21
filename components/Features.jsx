import React from "react";
import { HomeFeatures } from "../data/data";

const Features = () => {
  return (
    <section className="mb-16 text-gray-800 mt-10 sm:mt-16 px-2">
      <div className="flex flex-wrap items-center">
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-4/12 mb-6 md:mb-0 sm:px-10 px-3">
          <h2 className="text-3xl font-bold mb-6">Why is it so great?</h2>
          <p className="text-gray-500 font-medium mb-6">
            Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque
            iaculis malesuada. Aenean gravida magna orci, non efficitur est
            porta id. Donec magna diam.
          </p>
        </div>

        <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 mb-6 mb-md-0 px-3">
          <div className="flex flex-wrap">
            {HomeFeatures.map((f) => (
              <div
                className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-10"
                key={f.id}
              >
                <div className="flex">
                  <div className="shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-gray-800"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                      ></path>
                    </svg>
                  </div>
                  <div className="grow ml-4">
                    <p className="font-bold mb-1 text-gray-800">{f.title}</p>
                    <p className="text-gray-500 font-medium">{f.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
