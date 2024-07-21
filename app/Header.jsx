"use client";
import Navbar from "../components/Navbar";
import { navlinks } from "../data/data";

function Header() {
  return <Navbar navlinks={navlinks} />;
}

export default Header;
