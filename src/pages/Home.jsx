import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import IconList from "../components/IconList";
import CallToActionBanner from "../components/CallToActionBanner";
import SectionLeft from "../components/SectionLeft";
import SectionRight from "../components/SectionRight";
import LongText from "../components/LongText";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <IconList />
      <CallToActionBanner />
      <SectionLeft />
      <SectionRight />
      <LongText />
    </div>
  );
};

export default Home;
