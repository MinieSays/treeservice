import React from "react";

const Section = ({ 
  imageSrc, 
  imageAlt, 
  title, 
  subtitle, 
  paragraphText, 
  reverseColumns 
}) => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className={`flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16 ${
            reverseColumns ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="lg:w-6/12">
            <img
              loading="lazy"
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-64 sm:h-72 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="lg:w-6/12 space-y-6">
            <p className="text-lime-600 text-sm lg:text-lg uppercase font-semibold tracking-wide">
              {subtitle}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              {title}
            </h1>
            <p className="text-base md:text-lg leading-relaxed">
              {paragraphText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
