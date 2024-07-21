import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavbarDark = ({ navlinks }) => {
  const [Nav, SetNav] = useState(false);
  const handleNav = () => {
    SetNav(!Nav);
  };
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const scrollUp = document.querySelector(".navbartop");
      if (this.scrollY >= 100) scrollUp.classList.add("shadow-md");
      else scrollUp.classList.remove("shadow-md");
    });
  });

  return (
    <div className="navbartop fixed left-0 top-0 w-full z-10 bg-gray-800">
      <div className="max-w-[1240px] m-auto flex justify-between items-center px-4 py-3 sm:py-2 text-gray-100">
        <h1 className="font-bold text-2xl">
          <a href="/">STORE</a>
        </h1>
        <ul className="hidden md:flex">
          {navlinks.map((navlink) => (
            <li key={navlink.id} className="p-4 font-medium text-lg">
              <Link href="/pricing">{navlink.link}</Link>
            </li>
          ))}
        </ul>
        <ul className="items-center gap-5 hidden md:flex text-gray-100">
          <li>
            <Link href="/login" className="font-medium text-lg">
              Log in
            </Link>
          </li>
          <li>
            <Link
              href="/register"
              className="border border-gray-100 hover:bg-gray-700 text-gray-100 font-bold py-2 px-4 rounded-md hidden md:block"
            >
              Start free trail
            </Link>
          </li>
        </ul>

        {/* Mobile menu Button */}
        <div className="block md:hidden z-10">
          {Nav ? (
            <AiOutlineClose size={25} onClick={handleNav} />
          ) : (
            <AiOutlineMenu size={25} onClick={handleNav} />
          )}
        </div>

        {/* Mobile Navigation */}
        <div
          className={
            Nav
              ? "md:hidden absolute top-0 right-0 bottom-0 flex justify-start flex-col w-full h-screen bg-gray-800 text-center px-3 pb-8 ease-in duration-300"
              : "md:hidden absolute top-0 right-[-100%] bottom-0 flex justify-start flex-col w-full h-screen bg-gray-800 text-center px-8 pb-8 ease-in duration-300"
          }
        >
          <div className="relative h-[60px]">
            <h1 className="ml-1.5 flex mr-auto font-bold text-2xl py-4 px-2 text-gray-100">
              <a href="/" onClick={handleNav}>
                STORE
              </a>
            </h1>
          </div>
          <span className="my-1 p-[1px] ml-4 bg-gray-500 w-[90%]"></span>
          <div className="text-left">
            <ul>
              {navlinks.map((navlink) => (
                <li
                  key={navlink.id}
                  className="p-4 text-xl text-gray-100 font-medium"
                >
                  <Link href="/pricing" onClick={handleNav}>
                    {navlink.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <span className="my-1 p-[1px] ml-4 bg-gray-500 w-[90%]"></span>
          <div className="text-left">
            <ul>
              {navlinks.map((navlink) => (
                <li
                  key={navlink.id}
                  className="p-4 text-xl text-gray-100 font-medium"
                >
                  <Link href="/pricing" onClick={handleNav}>
                    {navlink.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-5 flex items-center text-center w-full">
            <Link
              href="/register"
              className="border border-gray-100 hover:bg-gray-700 text-gray-100 font-bold py-2 px-4 rounded mx-3 w-full shadow-md"
              onClick={handleNav}
            >
              Start free trail
            </Link>
          </div>
          <div className="pt-5 flex items-center text-center w-full">
            <Link
              href="/login"
              className="hover:bg-gray-700 text-gray-100 hover:text-white font-bold py-2 px-4 rounded mx-3 w-full"
              onClick={handleNav}
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDark;
