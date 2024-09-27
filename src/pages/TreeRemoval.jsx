import React, { useEffect } from "react";
import HeroSection from "../components/HeroSectionServices";
import Features from "../components/Features";
import CallToActionBanner from "../components/CallToActionBanner";
import LongText from "../components/LongText";
import treeImage from "../assets/trees.jpeg";
import { TreesIcon } from "lucide-react";
import { faqs, featuresData } from "../components/TreeRemoval";
import Section from "../components/Section";
import treeimg from "../assets/tree-removal-fort-collins.jpg";
import img1 from "../assets/tree-removal-fortcollins-co.jpg";
import treeimg1 from "../assets/tree-trimming-2.jpg";
import Accordion from "../components/Accordion";

const TreeRemoval = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection
        backgroundImage={treeImage}
        title="Tree Removal Fort Collins"
        subtitle="Emergency tree removal services in Fort Collins and surrounding areas."
        primaryLinkText="970-200-8043"
        primaryLinkUrl="/contact"
        secondaryLinkText="Learn More"
        secondaryLinkUrl="/services"
        primaryLinkIcon={TreesIcon}
        emailModalProps={{
          title: "Get Quoted Today",
          buttonLabel: "Submit",
          serviceId: "service_42ic5hi",
          templateId: "template_a3q4i04",
          userId: "7wxX0U7TD5w60Xlp_",
        }}
      />
      <Features
        title="Tree Removal Services"
        subtitle="Our professional tree removal services ensure safe and efficient removal of trees that pose a risk to your property or landscape."
        features={featuresData}
      />
      <Section
        imageSrc={treeimg}
        imageAlt="Community Collaboration"
        title="Best Tree Removal Fort Collins Co"
        content={
          <>
            Sometimes, pruning services are not enough and a complete tree
            removal is needed for the environment to improve. As an emerging
            tree service provider in Colorado’s Fort Collins, taking care of
            your trees’ health and your safety has become our top priority.{" "}
            <br />
            <br /> Most homeowners do not realize tree removal is needed in some
            cases unless tree service companies help them figure it out. You are
            in luck because, at Fort Collins co, we are a team of skilled and
            experienced arborists who can get your tree removed without a
            hassle. <br />
            <br />
          </>
        }
        reverseColumns={false}
      />
      <CallToActionBanner
        title="Affordable Tree Removal"
        description="Call us today for an inspection"
        buttonLabel="Get a Quote"
        backgroundColor="#84cc16"
        textColor="#FFFFFF"
        buttonColor="#111827"
      />
      <Section
        imageSrc={img1}
        imageAlt="Fort collins tree removal"
        title="Emergency Tree Removal in Fort Collins Co"
        content={
          <>
            If you are in any place, trees surround you because they are
            critical to our environment. They help in improving the health of
            the community, providing a habitat for many creatures, enhancing the
            quality of the air we breathe, and even giving the community a sense
            of vibrancy. So, removing them is perhaps a pain, but what’s worse
            than not having a tree is having a dead one. So, why is tree removal
            Fort Collins and anywhere else important?
            <br />
            <br />
            <b>Safety - </b>
            Promoting the safety of the whole community and the protection of
            nearby residents is as important as protecting trees. Due to strong
            rain and winds, trees can weaken and their branches may fall off due
            to the conditions. Humans cannot withstand the weight of a tree, let
            alone its thick branches, so before the situation gets dangerous we
            suggest stump removal, Fort Collins. Regular Tree Trimming, by an
            experienced arborist Fort Collins co, will help you avoid this
            entirely since they have the skills and experience to spot all these
            obstacles and remove them before they trouble your precious tree.{" "}
            <br />
            <br />
            <b>Health of Tree - </b>
            Promoting the safety of the whole community and the protection of
            nearby residents is as important as protecting trees. Due to strong
            rain and winds, trees can weaken and their branches may fall off due
            to the conditions. Humans cannot withstand the weight of a tree, let
            alone its thick branches, so before the situation gets dangerous we
            suggest stump removal, Fort Collins. Regular Tree Trimming, by an
            experienced arborist Fort Collins co, will help you avoid this
            entirely since they have the skills and experience to spot all these
            obstacles and remove them before they trouble your precious tree.
            <br />
            <br />
          </>
        }
        reverseColumns={true}
      />
      <Section
        imageSrc={treeimg1}
        imageAlt="Deciding When A Tree Needs To Be Removed"
        title="Deciding When A Tree Needs To Be Removed"
        content={
          <>
            Deciding when a tree must be removed comes with a strong priority
            for safety as well as the health and look of the property. Have you
            seen any unusual patterns of leaf discoloration? Does the bark have
            any fungi present? These are all questions you must ask if you
            examine the tree from the base or trunk to the top.
            <br />
            <br />
            Some trees can grow at a strange angle naturally, but others can
            start to lean suddenly due to unstable soil or any damage found in
            the roots. If you notice any big cracks on the tree trunk as well,
            this may indicate that the tree is slowly dying. Older trees must be
            looked after carefully as well, so bear in mind all these factors.
            <br />
            <br />
          </>
        }
        reverseColumns={false}
      />
      <LongText
        title="Saving Money On"
        highlightedText="Removal"
        content={
          <>
            Planning and strategizing are the best ways you can save your trees.
            To save money while using tree removal services, you can get
            multiple quotes. That won’t be necessary because our service is the
            most affordable yet high-quality out there. There are two other ways
            for you to save money:
            <br />
            <br />
            <b>Trim Annually</b>: If you trim your trees regularly, there is a
            chance that you can save your diseased tree. Arborists like us at
            Fort Collins Co can examine the trees and immediately recognize if
            something is wrong. Not only will you save your trees from falling
            from weak roots, but you can also enhance the look of your trees
            through trimmed branches!
            <br />
            <br />
            <b>Choose the Right Season</b>: Many tree service companies are
            busiest during summer and spring. Consider scheduling during winter
            or autumn, when costs may be lower due to less demand. With our help
            available year-round, you don’t have to wait!
          </>
        }
      />
      <Accordion
      faqs={faqs}
      sectionTitle="Tree Trimming FAQ"
    />
    </div>
  );
};

export default TreeRemoval;
