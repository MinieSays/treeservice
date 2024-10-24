import React from "react";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";

const CallToActionBanner = ({ 
  title, 
  description, 
  buttonLabel, 
  backgroundColor, 
  textColor, 
  buttonColor 
}) => {
  return (
    <section className={`py-12 md:py-20`} style={{ backgroundColor }}>
      <motion.div
        className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="text-center md:text-left"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold`} style={{ color: textColor }}>
            {title}
          </h2>
          <p className={`mt-3 text-lg md:text-xl`} style={{ color: textColor }}>
            {description}
          </p>
        </motion.div>

        <motion.div
          className="text-center md:text-right"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Button
            label={buttonLabel}
            backgroundColor={buttonColor}
            className="py-4 rounded-full text-white"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToActionBanner;
