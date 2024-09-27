import React from "react";
import treeimg from "../../assets/Tree-Trimming-Fot-Collins-Co-791x1024.png";

const SectionLeft = () => {
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
              Best Tree Trimming Fort Collins, CO
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                As a homeowner or a business property owner, you might be well
                aware that having healthy and thriving trees not only adds
                aesthetically pleasing beauty to the premises and the property
                itself but also increases its value.
                <br />
                <br /> Nonetheless, while a few well-placed trees can easily
                change the complete look of the premises and bring along several
                benefits, one thing’s for sure, just planting it and hoping it
                grows well is and will never be enough.
                <br />
                <br />
                Regular maintenance such as tree trimming Fort Collins, CO is
                necessary for the tree to flourish and remain healthy for a good
                several years. Yet, we understand that most property owners
                don’t have the time, experience, or the necessary tools to take
                on the task. Hence, companies, especially like ours, filled with
                experienced, skilled, and certified arborist Fort Collins Co
                come in, offering the most affordable solutions to all your tree
                care needs.
                <br />
                <br />
                However, even with the most affordable options available, only a
                few percent of homeowners speak to professionals about it and
                get the proper help they need. So, for a change, instead of
                talking about the services we offer, we’ll be putting our years
                of expertise and experience in this industry to the test, and
                tell you about the benefits of regular tree trimming, and have
                you decide if it’s worth the investment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionLeft;
