import React from "react";
import heroImage from "../../assets/treeserviceteam.jpg"; // The original image

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-16 md:py-20"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/589802/pexels-photo-589802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundAttachment: "fixed", // Parallax effect
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay to Darken the Image */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Content Section */}
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* Main Hero Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16 mt-10 lg:mt-16">
          {/* Text Section */}
          <div className="lg:w-5/12 space-y-6 lg:space-y-8 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Making a <span className="text-lime-500">Difference</span> Since 2010
            </h1>
            <p className="text-sm sm:text-lg md:text-xl">
              Fort Collins Tree service has been providing the residents of Fort
              Collins premium tree services.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-6/12">
            <img
              src={heroImage}
              alt="Tree Service Team"
              className="w-full h-64 sm:h-72 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
