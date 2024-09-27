import React from "react";
import treeimg from "../../assets/tree-service-near-me-in-fort collins.jpg";

const SectionLeftBottom = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section - Now First */}
          <div className="w-full">
            <img
              src={treeimg}
              alt="Community Collaboration"
              className="w-full h-64 lg:h-auto object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Text Content Section - Now Second */}
          <div className="flex flex-col justify-center items-center lg:items-start space-y-8">
            <div className="text-center lg:text-left space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug">
                Why Propeties Need To Be Trimmed.
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                <b>Increased Safety</b> <br /> <br />
                Overgrown branches of trees pose major risks to your life and
                property especially if the tree was planted just inches away
                from your house, power lines, or other structures. In case of
                extreme weather conditions, these branches tend to become
                hazardous and can cause significant damage to the nearby
                amenities. Additionally, as mentioned, these branches could hit
                a human being and cause irreparable damage that might cost a
                fortune to fix. These may be just speculations but either way,
                will you risk spending serious money that can be avoided with a
                quick regular tree trimming Fort Collins Co?
                <br /> <br />
                <b>Better Aesthetic Appeal </b> <br /> <br />
                Last but not least, maybe the best advantage that regular tree
                trimming Fort Collins co provides is that it simply makes your
                tree look more alluring, adding to the captivating aesthetics of
                your entire property. Since let’s be real, have you ever looked
                at a property with untrimmed trees? It looks disoriented and
                simply messy, scaring away future prospects from ever buying.
                However, even if the plan was not to sell, a trimmed tree gives
                your house a peaceful warmer atmosphere and says a lot about how
                you treat your property.
                <br /> <br />
              </p>
            </div>

            {/* CTA Button */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionLeftBottom;
