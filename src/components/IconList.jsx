import React from "react";
import { CheckCircle } from "lucide-react";

const IconList = ({ title, highlightedText, imageSrc, imageAlt, checklistItems }) => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <div className="bg-white">
        <div className="container mx-auto px-6">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight">
            {title}{" "}
            <span className="bg-gradient-to-r from-lime-500 to-lime-700 text-transparent bg-clip-text">
              {highlightedText}
            </span>
          </h2>

          <div className="flex flex-wrap justify-between items-center mt-8 lg:mt-10">

            <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
              <img
                loading="lazy"
                src={imageSrc}
                alt={imageAlt}
                className="rounded-lg shadow-lg w-full h-72 object-cover"
              />
            </div>
            <div className="w-full lg:w-6/12">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex mb-6">
                  <div className="flex-shrink-0 h-12 w-12 bg-lime-600 text-white rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div className="ml-4 text-left">
                    <h5 className="text-lg font-semibold">{item.title}</h5>
                    <p className="text-md leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconList;
