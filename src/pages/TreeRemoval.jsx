import React, { useEffect } from "react";
import HeroSection from '../components/TreeRemoval/HeroSection'
import Features from '../components/TreeRemoval/Features'
import SectionLeft from '../components/TreeRemoval/SectionLeft'
import SectionRight from '../components/TreeRemoval/SectionRight'
import CallToActionBanner from "../components/CallToActionBanner";
import SectionLeftBottom from '../components/TreeRemoval/SectionLeftBottom'
import LongText from '../components/TreeRemoval/LongText'
import Accordion from '../components/TreeRemoval/Accordion'

const TreeRemoval = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [])
  return (
    <div>
      <HeroSection />
      <Features />
      <SectionLeft />
      <CallToActionBanner />
      <SectionRight />
      <SectionLeftBottom />
      <LongText />
      <Accordion />
    </div>
  );
};

export default TreeRemoval;
