import React from "react";
import founderImage from "./../../assets/tree-trimming.jpg";

const SectionLeft = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Section */}
        <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-10 lg:gap-16">
          {/* Image Section (now on the right) */}
          <div className="lg:w-6/12">
            <img
              src={founderImage}
              alt="Founder of FC Tree Service"
              className="w-full h-64 sm:h-72 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section (now on the left) */}
          <div className="lg:w-6/12 space-y-6">
            <p className="text-lime-600 text-sm lg:text-lg uppercase font-semibold tracking-wide">
              Our Roots Run Deep
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              The Story Behind Fort Collins Tree Service
            </h1>
            <p className="text-base md:text-lg leading-relaxed">
              At Fort Collins Tree Service, tree care isn’t just our job—it’s
              our passion. Founded with a mission to enhance the beauty and
              health of landscapes throughout the community, we believe in
              providing top-quality tree services tailored to the needs of our
              clients. Whether it’s tree planting, pruning, or removal, our team
              brings years of experience and expertise to every job.
              <br />
              <br /> We’re dedicated to preserving the environment while keeping
              your property safe and beautiful. Our commitment to excellence and
              customer satisfaction is what has made us a trusted name in Fort
              Collins. From residential to commercial projects, we’re here to
              help your trees thrive for years to come
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionLeft;
