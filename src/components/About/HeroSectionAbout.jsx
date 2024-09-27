import React from "react";

const HeroSectionAbout = ({ 
  backgroundImage, 
  title, 
  subtitle, 
  highlightText, 
  imageSrc, 
  imageAlt 
}) => {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-16 md:py-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16 mt-10 lg:mt-16">
          <div className="lg:w-5/12 space-y-6 lg:space-y-8 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              {title} <span className="text-lime-500">{highlightText}</span>
            </h1>
            <p className="text-sm sm:text-lg md:text-xl">
              {subtitle}
            </p>
          </div>
          <div className="lg:w-6/12">
            <img
              loading="lazy"
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-64 sm:h-72 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionAbout;
