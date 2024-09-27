import React from 'react';
import Button from "../components/ui/Button"; 

const CallToActionBanner = () => {
  return (
    <section className="bg-lime-600 text-white py-12 mb md:py-20">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Call to Action Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Ready to transform your space with greenery?
          </h2>
          <p className="mt-3 text-lg md:text-xl text-lime-100">
            Let us help you bring nature closer to your home.
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="text-center md:text-right">
        <Button label="Get a Quote" backgroundColor="#111827" className="py-4 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;
