import React, { useEffect } from 'react'
import HeroSection from '../components/TreeTrimming/HeroSection'
import Features from '../components/TreeTrimming/Features'
import SectionLeft from '../components/TreeTrimming/SectionLeft'
import SectionRight from '../components/TreeTrimming/SectionRight'
import CallToActionBanner from "../components/CallToActionBanner";
import SectionLeftBottom from '../components/TreeTrimming/SectionLeftBottom'
import LongText from '../components/TreeTrimming/LongText'
import Accordion from '../components/TreeTrimming/Accordion'

const TreeTrimming = () => {
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
  )
}

export default TreeTrimming