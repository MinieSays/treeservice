import React from "react";
import treeimg from "../../assets/tree-removal-fort-collins.jpg";

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
                Best Tree Removal Fort Collins Co
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                Sometimes, pruning services are not enough and a complete tree
                removal is needed for the environment to improve. As an emerging
                tree service provider in Colorado’s Fort Collins, taking care of
                your trees’ health and your safety has become our top priority.
                When pruning trees or doing regular trims, we offer the best
                service in town.
                <br />
                <br /> Most homeowners do not realize tree removal is needed in
                some cases unless tree service companies help them figure it
                out. You are in luck because, at Fort Collins co, we are a team
                of skilled and experienced arborists who can get your tree
                removed without a hassle. If you are worried about the risk of
                DIY tree removal and if waiting for too long can increase the
                number of falling branches, then we are at your service, but
                first, let’s see why it is important!
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionLeft;
