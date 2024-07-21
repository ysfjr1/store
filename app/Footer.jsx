import Link from "next/link";
import React from "react";
import { f1, f2, f3 } from "../data/data";

function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="container px-6 py-12 mx-auto mt-5">
        <div className="md:flex md:-mx-3 md:items-center md:justify-between">
          <h1 className="text-3xl font-semibold tracking-tight text-white md:mx-3 xl:text-4xl">
            Subscribe our newsletter to get update.
          </h1>

          <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
            <a
              href="#"
              className="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white duration-300  rounded-md hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80 border border-white"
            >
              <span className="mx-2">Sign Up Now</span>
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-500 md:my-10" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <p className="font-semibold text-white text-lg">Quick Link</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              {f1.map((f) => (
                <Link
                  href={f.link}
                  className="text-gray-300 transition-colors duration-300 hover:text-gray-400"
                  key={f.id}
                >
                  {f.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-lg text-white">Industries</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              {f2.map((f) => (
                <Link
                  href={f.link}
                  className="text-gray-300 transition-colors duration-300 hover:text-gray-400"
                  key={f.id}
                >
                  {f.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-white text-lg">Services</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              {f3.map((f) => (
                <Link
                  href={f.link}
                  className="text-gray-300 transition-colors duration-300 hover:text-gray-400"
                  key={f.id}
                >
                  {f.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-white text-lg">Contact Us</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-300 transition-colors duration-300 hover:text-gray-400"
              >
                +880 768 473 4978
              </a>
              <a
                href="#"
                className="text-gray-300 transition-colors duration-300 hover:text-gray-400"
              >
                info@yeahbuddy.com
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-500 md:my-10" />

        <div className="flex flex-col items-center justify-between sm:flex-row">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-300 transition-colors duration-300 hover:text-gray-400"
          >
            STORE
          </Link>

          <p className="mt-4 text-sm text-gray-400 sm:mt-0">
            © Copyright 2021. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
