import React, { useEffect } from "react";
import HeroSection from "../components/About/HeroSection";
import Features from "../components/About/Features";
import SectionRight from "../components/About/SectionRight";
import SectionLeft from "../components/About/SectionLeft";
import CallToActionBanner from "../components/CallToActionBanner";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection />
      <Features />
      <SectionRight />
      <SectionLeft />
      <CallToActionBanner />
    </div>
  );
};

export default About;
