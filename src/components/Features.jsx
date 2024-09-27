import React from "react";

const Feature = ({ title, subtitle, features }) => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            {title}
          </h1>
          <p className="mt-4 text-gray-600 text-lg md:text-xl">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
            >
              <div className="bg-lime-100 rounded-full p-4 mb-4">
                {feature.icon && <feature.icon className="w-8 h-8 text-lime-600" />}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
