import React from "react";
import CTA from "../../components/CTA";
import CTAReverse from "../../components/CTAReverse";
import Hero from "../../components/manage/Hero";
import HomeFeatures from "../../components/home/HomeFeatures";

const Manage = () => {
  return (
    <div>
      <Hero />
      <CTAReverse />
      <HomeFeatures />
      <CTA />
    </div>
  );
};

export default Manage;
