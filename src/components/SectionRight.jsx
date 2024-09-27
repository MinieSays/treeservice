import React from "react";
import img1 from "../assets/tree-1.jpg";
const SectionRight = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center items-center lg:items-start space-y-8">
            <div className="text-center lg:text-left space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug">
                Are you due for a trimming?
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                At Fort Collins Tree Service, we pride ourselves in offering
                quality and comprehensive tree care services to property owners
                in Fort Collins, CO, and surrounding areas. We understand that
                each tree care solution is not one size fits all. Each job
                requires knowledge and expertise to create a custom-tailored
                solution.
                <br />
                <br />
                With our expertise in removal, tree trimming, stump grinding,
                and pruning, we can provide top-notch services to residential
                and business owners. We value our local relationships and have
                more than 15 years of experience servicing the Fort Collins
                area. Our equipment is advanced, and we require all our
                journeymen to be safely trained. Our top priority is the safety
                of our crew and property.
              </p>
            </div>
          </div>

          <div className="w-full">
            <img
              loading="lazy"
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
