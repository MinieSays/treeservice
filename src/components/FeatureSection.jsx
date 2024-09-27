import React from "react";

const FeatureSection = ({ title, highlightedText, features }) => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <div className="relative border-b border-gray-300 bg-white">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-8 lg:mt-6 tracking-tight">
            {title}{" "}
            <span className="bg-gradient-to-r from-lime-500 to-lime-700 text-transparent bg-clip-text">
              {highlightedText}
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center mt-12 mb-12 lg:mt-16">
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-6 mb-12">
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 bg-lime-600 text-white rounded-full flex items-center justify-center shadow-lg">
                  {feature.icon}
                </div>
                <div className="ml-4">
                  <h5 className="text-xl font-semibold mt-1 mb-4">
                    {feature.text}
                  </h5>
                  <p className="text-md leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
