import React from "react";
import founderImage from "./../../assets/profile-pictures/user5.jpg";

const SectionRight = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16">
          {/* Founder Image Section */}
          <div className="lg:w-6/12">
            <img
              src={founderImage}
              alt="Founder of FC Tree Service"
              className="w-full h-64 sm:h-72 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* About Text Section */}
          <div className="lg:w-6/12 space-y-6">
            <p className="text-lime-600 text-sm lg:text-lg uppercase font-semibold tracking-wide">
              Our Journey
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Quality First
            </h1>
            <p className="text-base md:text-lg leading-relaxed">
              After years of working in the landscaping industry, I realized
              that proper tree care was often overlooked. Determined to make a
              difference, I founded Fort Collins Tree Service to offer dedicated
              tree care solutions for the community. Today, we are known for our
              expertise in tree planting, pruning, and removal, helping
              homeowners and businesses alike keep their trees healthy and their
              landscapes beautiful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionRight;
