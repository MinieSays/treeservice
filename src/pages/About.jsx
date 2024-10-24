import React, { useEffect } from "react";
import Features from "../components/About/Features";
import Section from "../components/About/Section";
import CallToActionBanner from "../components/CallToActionBanner";
import heroImage from "../assets/treeserviceteam.jpg";
import heroBackground from "../assets/trees.jpeg";
import HeroSectionAbout from "../components/About/HeroSectionAbout";
import img1 from "../assets/tree-removal-fort-collins.jpg"
import img from "../assets/Tree-Trimming-Fot-Collins-Co-791x1024.png"

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSectionAbout
        backgroundImage={heroBackground}
        title="Making a"
        highlightText="Difference"
        subtitle="Fort Collins Tree service has been providing the residents of Fort Collins premium tree services."
        imageSrc={heroImage}
        imageAlt="Tree Service Team"
      />
      <Features />
      <Section
        imageSrc={img}
        imageAlt="Founder of FC Tree Service"
        title="Quality First"
        subtitle="Our Journey"
        paragraphText="After years of working in the landscaping industry, I realized that proper tree care was often overlooked. Determined to make a difference, I founded Fort Collins Tree Service to offer dedicated tree care solutions for the community. Today, we are known for our expertise in tree planting, pruning, and removal, helping homeowners and businesses alike keep their trees healthy and their landscapes beautiful."
        reverseColumns={false}
      />
      <Section
        imageSrc={img1}
        imageAlt="Founder of FC Tree Service"
        title="Roots Run Deep"
        subtitle="The Story Behind Fort Collins Tree Service"
        paragraphText={
          <>
            At Fort Collins Tree Service, tree care isn’t just our job—it’s our
            passion. Founded with a mission to enhance the beauty and health of
            landscapes throughout the community, we believe in providing
            top-quality tree services tailored to the needs of our clients.
            <br />
            <br />
            Whether it’s tree planting, pruning, or removal, our team brings
            years of experience and expertise to every job. We’re dedicated to
            preserving the environment while keeping your property safe and
            beautiful. Our commitment to excellence and customer satisfaction is
            what has made us a trusted name in Fort Collins.
            <br />
            <br />
            From residential to commercial projects, we’re here to help your
            trees thrive for years to come.
          </>
        }
        reverseColumns={true}
      />
      <CallToActionBanner
        title="Ready to transform your space with greenery?"
        description="Let us help you bring nature closer to your home."
        buttonLabel="Get a Quote"
        backgroundColor="#84cc16"
        textColor="#FFFFFF"
        buttonColor="#111827"
      />
    </div>
  );
};

export default About;
