import React from "react";
import { motion } from "framer-motion";

const FeatureSection = ({ title, highlightedText, features }) => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <div className="relative border-b border-gray-300 bg-white">
        <div className="text-center">
          {/* Animated Heading */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-8 lg:mt-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {title}{" "}
            <span className="bg-gradient-to-r from-lime-500 to-lime-700 text-transparent bg-clip-text">
              {highlightedText}
            </span>
          </motion.h2>
        </div>

        <motion.div
          className="flex flex-wrap justify-center mt-12 mb-12 lg:mt-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2, 
              },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 px-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
