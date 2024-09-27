import React from "react";
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
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold`} style={{ color: textColor }}>
            {title}
          </h2>
          <p className={`mt-3 text-lg md:text-xl`} style={{ color: textColor }}>
            {description}
          </p>
        </div>

        <div className="text-center md:text-right">
          <Button
            label={buttonLabel}
            backgroundColor={buttonColor}
            className="py-4 rounded-full text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;
