import React from "react";
import treeimg from "../../assets/tree-trimming-2.jpg";

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
                Deciding When A Tree Needs To Be Removed
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                Deciding when a tree must be removed comes with a strong
                priority for safety as well as the health and look of the
                property. Have you seen any unusual patterns of leaf
                discoloration? Does the bark have any fungi present? These are
                all questions you must ask if you examine the tree from the base
                or trunk to the top.
                <br /> <br /> Some trees can grow at a strange angle naturally,
                but others can start to lean suddenly due to unstable soil or
                any damage found in the roots. If you notice any big cracks on
                the tree trunk as well, this may indicate that the tree is
                slowly dying. Older trees must be looked after carefully as
                well, so bear in mind all these factors.
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
