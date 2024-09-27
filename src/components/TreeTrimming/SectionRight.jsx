import React from "react";
import img1 from "../../assets/tree-trimming-2.jpg";
import img2 from "../../assets/tree-trimming-fort-collins.jpg"
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
                Are You Due For A Trim?
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                It’s not rocket science to understand that trees and plants need
                lots of sunlight to grow and maintain their health. That said,
                in most cases, trees grow branches that are way longer, which
                blocks out the sun’s rays ultimately preventing the tree from
                getting the desired amount of sunlight it needs to stay healthy.
                In addition, there are also diseased or dead branches that you
                need to worry about. Regular Tree Trimming, by an experienced
                arborist Fort Collins co, will help you avoid this entirely
                since they have the skills and experience to spot all these
                obstacles and remove them before they trouble your precious
                tree.
                <br /> <br />
                <b>Promoting Tree Health</b> <br /> <br />
                As mentioned, Regular tree trimming Fort Collins Co helps you
                detect diseased, deceased, or overgrown branches that block out
                the sun and by removing them, the tree is exposed to better
                sunlight. However, not only does removing these obstacles bring
                better sunlight for the tree but also helps prevent further
                spreading and impairment of other parts of the tree. In
                addition, regular trimming, and pruning are known to improve the
                overall airflow surrounding the trees. This can lead to a much
                healthier branch with fewer diseases and insects crawling over.
                <br /> <br />
                <b>Fewer Chances Of Diseases</b> <br /> <br />
                Regular tree trimming is one of the best ways to detect early
                signs of diseases in the tree before they even have the chance
                to spread to other parts. Since our professional aborist Fort
                Collins Co can spot anything out of the ordinary with just one
                good assessment of the branches and the leaves, the disease can
                be determined at the earliest, and depending on the severity,
                they will suggest you your options. Options can include removing
                said branches, pest control, or in the worst-case scenario, tree
                removal Fort Collins Co. As such, Fewer chances of diseases
                occurring are possible by opting for regular tree trimming
                services.
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
            <img
              src={img2}
              alt="Community Collaboration"
              className="w-full h-64 lg:h-auto object-cover rounded-xl shadow-lg mt-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionRight;
