import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import IconList from "../components/IconList";
import CallToActionBanner from "../components/CallToActionBanner";
import LongText1 from "../components/LongText";
import { checklistItems, features } from "../constants";
import treeImg from "../assets/code.jpg";
import Section from "../components/Section";
import treeimg1 from "../assets/tree-trimming.jpg";
import img1 from "../assets/tree-1.jpg";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Fort Collins Tree Service Tree Trimming, Tree Removal</title>
        <meta
          name="Fort Collins Tree Service - Tree Trimming, Tree Removal"
          content="Fort Collins Tree Service - Our expert arborists provide tree trimming, tree removal, stump removal for your residential or commercial land."
        />
      </Helmet>
      <HeroSection
        title="Emergency"
        highlightedText="Tree Services"
        description="When disaster strikes or immediate tree services are needed, count on us to be there for you. We provide emergency tree services to ensure your property is safe and your trees are cared for."
        buttonText="Contact Us Now"
        buttonLink="/contact"
        backgroundImage="https://images.pexels.com/photos/589802/pexels-photo-589802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        formTitle="Free Consultation"
        emailServiceId="service_42ic5hi"
        emailTemplateId="template_a3q4i04"
        emailUserId="7wxX0U7TD5w60Xlp_"
      />
      <FeatureSection
        title="Tree Services"
        highlightedText="Made Easy"
        features={features}
      />
      <IconList
        title="Affordable Tree Care"
        highlightedText="Services"
        imageSrc={treeImg}
        imageAlt="Tree services"
        checklistItems={checklistItems}
      />
      <CallToActionBanner
        title="Ready to transform your space with greenery?"
        description="Let us help you bring nature closer to your home."
        buttonLabel="Get a Quote"
        backgroundColor="#84cc16"
        textColor="#FFFFFF"
        buttonColor="#111827"
      />
      <Section
        imageSrc={treeimg1}
        imageAlt="Fort collins tree removal"
        title="Emergency Tree Removal in Fort Collins Co"
        content={
          <>
            Your property is the face of your business or home. Our team
            specializes in aesthetically appealing tree trimming that focuses on
            enhancing the natural shape of your trees. Not only is tree trimming
            great for increasing property value, but it helps with disease
            prevention.
            <br />
            <br />
            Trimming your trees provides excellent air circulation and increased
            sunlight, minimizing the chances of fungal diseases. With the added
            protection comes improved growth. By removing weaker branches, the
            tree can generate more energy to assist in growing its other
            branches. Please speak to us now about tree trimming in Fort
            Collins, Co.
          </>
        }
        reverseColumns={true}
      />
      <Section
        imageSrc={img1}
        imageAlt="Fort collins tree removal"
        title="Are You Due For A Trimming?"
        content={
          <>
            At Fort Collins Tree Service, we pride ourselves in offering quality
            and comprehensive tree care services to property owners in Fort
            Collins, CO, and surrounding areas. We understand that each tree
            care solution is not one size fits all. Each job requires knowledge
            and expertise to create a custom-tailored solution.
            <br />
            <br />
            With our expertise in removal, tree trimming, stump grinding, and
            pruning, we can provide top-notch services to residential and
            business owners. We value our local relationships and have more than
            15 years of experience servicing the Fort Collins area. Our
            equipment is advanced, and we require all our journeymen to be
            safely trained. Our top priority is the safety of our crew and
            property.
          </>
        }
        reverseColumns={false}
      />
      <LongText1
        title="See The "
        highlightedText=" Benefits"
        content={
          <>
            Most homeowners believe hiring professionals to do their tree
            maintenance services could break the bank and decide to take the DIY
            route, not realizing the risks it comes with. While hiring tree
            service companies may not seem like the budget-friendliest at the
            start, they turn out to be the most cost-effective in the long run.
            How?
            <br />
            <br />
            For instance, if you don’t pay for professional regular tree care
            services, the trees are bound to be left unchecked for some time
            which can cause irreparable damages. In severe circumstances, you
            may even need tree removal services. Secondly, you risk paying for
            serious damages that come from not tending to the overgrown and dead
            branches of your tree. Worst of all, improper maintenance would
            strongly make the trees unhealthy and you risk replacement or tree
            removal Fort Collins Co in the future which are known to be extra
            costly.
            <br />
            <br />
            Additionally, hiring professionals for your regular tree care
            services can easily increase your house’s market value together with
            its appeal if you ever plan on selling it. Now, do you still think
            it’s not worth the investment? Call us today at 970-200-8043 for
            Fort Collins Tree Service.
          </>
        }
      />
    </>
  );
};

export default Home;
