import React from "react";
import Hero from "../../components/market/Hero";
import HomeFeatures from "../../components/home/HomeFeatures";
import CTA from "../../components/CTA";
import CTACardWhite from "../../components/CTACardWhite";

const Market = () => {
  return (
    <div>
      <Hero />
      <CTA />
      <HomeFeatures />
      <CTACardWhite />
    </div>
  );
};

export default Market;
