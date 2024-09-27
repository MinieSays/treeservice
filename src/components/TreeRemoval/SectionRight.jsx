import React from "react";
import img1 from "../../assets/tree-removal-fortcollins-co.jpg";
import Button from "../ui/Button";
const SectionRight = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content Section */}
          <div className="flex flex-col justify-center items-center lg:items-start space-y-8">
            <div className="text-center lg:text-left space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug">
                Emergency Tree Removal in Fort Collins Co
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                f you are in any place, trees surround you because they are
                critical to our environment. They help in improving the health
                of the community, providing a habitat for many creatures,
                enhancing the quality of the air we breathe, and even giving the
                community a sense of vibrancy. So, removing them is perhaps a
                pain, but what’s worse than not having a tree is having a dead
                one. So, why is tree removal Fort Collins and anywhere else
                important?
                <br /> <br />
                <b>Safety</b> <br /> <br />
                Promoting the safety of the whole community and the protection
                of nearby residents is as important as protecting trees. Due to
                strong rain and winds, trees can weaken and their branches may
                fall off due to the conditions. Humans cannot withstand the
                weight of a tree, let alone its thick branches, so before the
                situation gets dangerous we suggest stump removal, Fort Collins.
                Regular Tree Trimming, by an experienced arborist Fort Collins
                co, will help you avoid this entirely since they have the skills
                and experience to spot all these obstacles and remove them
                before they trouble your precious tree.
                <br /> <br />
                <b>Health of Tree</b> <br /> <br />
                As discussed, diseased branches can fall and hurt anyone or
                destroy a nearby property. To avoid this, trimming and cutting
                off these branches are highly beneficial. This can help the tree
                survive and focus its nutritional growth in other areas, apart
                from its dying branches.
              </p>
            </div>

            {/* CTA Button */}
            <div className="w-full sm:w-auto">
            <Button
                label="Get Started"
                backgroundColor="#65a30d"
                className="w-full px-6 py-3 bg-lime-600 hover:bg-lime-700 transition duration-300 ease-in-out text-white font-semibold text-sm md:text-base rounded-lg shadow-lg flex items-center justify-center"
              />
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full">
            <img
              src={img1}
              alt="Community Collaboration"
              className="w-full h-64 lg:h-auto object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionRight;
