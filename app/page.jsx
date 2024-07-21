import React from "react";
import Content from "../components/home/Content";
import Customers from "../components/home/Customers";
import HomeFeatures from "../components/home/HomeFeatures";
import Hero from "../components/home/Hero";
import Features from "../components/Features";
import Blogs from "../components/Blogs";
import FAQ from "../components/FAQ";

function Home() {
  return (
    <div>
      <Hero />
      <Customers />
      <HomeFeatures />
      <Content />
      <Features />
      <Blogs />
      <FAQ />
    </div>
  );
}

export default Home;
