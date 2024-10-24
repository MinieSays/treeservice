import React, { useEffect } from "react";
import CallToActionBanner from "../components/CallToActionBanner";
import Accordion from "../components/Accordion";
import HeroSectionServices from "../components/HeroSectionServices";
import { TreesIcon } from "lucide-react";
import Features from "../components/Features";
import { questions, FeaturesData } from "../components/TreeTrimming";
import Section from "../components/Section";
import treeimg from "../assets/Tree-Trimming-Fot-Collins-Co-791x1024.png";
import img1 from "../assets/tree-trimming-2.jpg";
import img2 from "../assets/Tree-Service-Financing.webp";
import treeimg1 from "../assets/tree-service-near-me-in-fort collins.jpg";
import LongText from "../components/LongText";
import { Helmet } from "react-helmet";

const TreeTrimming = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Fort Collins Tree Service - Tree Trimming</title>
        <meta
          name="Fort Collins Tree Service - Tree Trimming"
          content="Fort Collins Tree Service is your number one service provider for tree care. Our expert arborists provide tree trimming in Fort Collins Co, as-well as tree removal."
        />
      </Helmet>
      <HeroSectionServices
        backgroundImage={img2}
        title="Tree Trimming Fort Collins"
        subtitle={
          <>
            As local tree experts, we’re dedicated to trimming your trees in a
            way that brings out their natural shape and beauty. By removing
            weaker branches, your tree will be able to grow fuller and
            healthier. <br /> <br />
            We understand the importance of your trees are to your property and
            city. We work with certified arborists and professional crew that
            are trained in tree removal.
          </>
        }
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
        features={FeaturesData}
      />
      <Section
        imageSrc={treeimg}
        imageAlt="Best Tree Trimming Fort Collins, CO"
        title="Best Tree Trimming Fort Collins, CO"
        content={
          <>
            As a homeowner or a business property owner, you might be well aware
            that having healthy and thriving trees not only adds aesthetically
            pleasing beauty to the premises and the property itself but also
            increases its value. <br />
            <br />
            Nonetheless, while a few well-placed trees can easily change the
            complete look of the premises and bring along several benefits, one
            thing’s for sure, just planting it and hoping it grows well is and
            will never be enough.
            <br />
            <br />
            Regular maintenance such as tree trimming Fort Collins, CO is
            necessary for the tree to flourish and remain healthy for a good
            several years. Yet, we understand that most property owners don’t
            have the time, experience, or the necessary tools to take on the
            task. Hence, companies, especially like ours, filled with
            experienced, skilled, and certified arborist Fort Collins Co come
            in, offering the most affordable solutions to all your tree care
            needs.
            <br />
            <br />
            However, even with the most affordable options available, only a few
            percent of homeowners speak to professionals about it and get the
            proper help they need. So, for a change, instead of talking about
            the services we offer, we’ll be putting our years of expertise and
            experience in this industry to the test, and tell you about the
            benefits of regular tree trimming, and have you decide if it’s worth
            the investment.
            <br />
            <br />
          </>
        }
        reverseColumns={true}
      />
      <CallToActionBanner
        title="Professional Tree Trimming"
        description="Call us today for a quote"
        buttonLabel="Get a Quote"
        backgroundColor="#84cc16"
        textColor="#FFFFFF"
        buttonColor="#111827"
      />
      <Section
        imageSrc={img1}
        imageAlt="Are You Due For a Trim?"
        title="Are You Due For a Trim?"
        content={
          <>
            It’s not rocket science to understand that trees and plants need
            lots of sunlight to grow and maintain their health. That said, in
            most cases, trees grow branches that are way longer, which blocks
            out the sun’s rays ultimately preventing the tree from getting the
            desired amount of sunlight it needs to stay healthy. In addition,
            there are also diseased or dead branches that you need to worry
            about. Regular Tree Trimming, by an experienced arborist Fort
            Collins co, will help you avoid this entirely since they have the
            skills and experience to spot all these obstacles and remove them
            before they trouble your precious tree.
            <br />
            <br />
            <b>Promoting Tree Health</b>
            As mentioned, Regular tree trimming Fort Collins Co helps you detect
            diseased, deceased, or overgrown branches that block out the sun and
            by removing them, the tree is exposed to better sunlight. However,
            not only does removing these obstacles bring better sunlight for the
            tree but also helps prevent further spreading and impairment of
            other parts of the tree. In addition, regular trimming, and pruning
            are known to improve the overall airflow surrounding the trees. This
            can lead to a much healthier branch with fewer diseases and insects
            crawling over.
            <br />
            <br />
            <b>Fewer Chances Of Diseases</b>
            Regular tree trimming is one of the best ways to detect early signs
            of diseases in the tree before they even have the chance to spread
            to other parts. Since our professional aborist Fort Collins Co can
            spot anything out of the ordinary with just one good assessment of
            the branches and the leaves, the disease can be determined at the
            earliest, and depending on the severity, they will suggest you your
            options. Options can include removing said branches, pest control,
            or in the worst-case scenario, tree removal Fort Collins Co. As
            such, Fewer chances of diseases occurring are possible by opting for
            regular tree trimming services.
          </>
        }
        reverseColumns={false}
      />
      <Section
        imageSrc={treeimg1}
        imageAlt="Are You Due For a Trim?"
        title="Are You Due For a Trim?"
        content={
          <>
            Overgrown branches of trees pose major risks to your life and
            property especially if the tree was planted just inches away from
            your house, power lines, or other structures. In case of extreme
            weather conditions, these branches tend to become hazardous and can
            cause significant damage to the nearby amenities. Additionally, as
            mentioned, these branches could hit a human being and cause
            irreparable damage that might cost a fortune to fix. These may be
            just speculations but either way, will you risk spending serious
            money that can be avoided with a quick regular tree trimming Fort
            Collins Co?
            <br />
            <br />
            <b>Promoting Tree Health</b>
            As mentioned, Regular tree trimming Fort Collins Co helps you detect
            diseased, deceased, or overgrown branches that block out the sun and
            by removing them, the tree is exposed to better sunlight. However,
            not only does removing these obstacles bring better sunlight for the
            tree but also helps prevent further spreading and impairment of
            other parts of the tree. In addition, regular trimming, and pruning
            are known to improve the overall airflow surrounding the trees. This
            can lead to a much healthier branch with fewer diseases and insects
            crawling over.
            <br />
            <br />
            <b>Improving Your Property</b>
            Last but not least, maybe the best advantage that regular tree
            trimming Fort Collins co provides is that it simply makes your tree
            look more alluring, adding to the captivating aesthetics of your
            entire property. Since let’s be real, have you ever looked at a
            property with untrimmed trees? It looks disoriented and simply
            messy, scaring away future prospects from ever buying. However, even
            if the plan was not to sell, a trimmed tree gives your house a
            peaceful warmer atmosphere and says a lot about how you treat your
            property.
          </>
        }
        reverseColumns={true}
      />
      <LongText
        title="Is Tree Trimming"
        highlightedText=" Worth it"
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
      <Accordion questions={questions} sectionTitle="Tree Trimming FAQ" />
    </>
  );
};

export default TreeTrimming;
