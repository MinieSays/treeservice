import React from "react";

const Section = ({ 
  imageSrc, 
  imageAlt, 
  title, 
  content, 
  reverseColumns = false, 
}) => {
  return (
    <section className="section-wrapper">
      <div className="section-container">
        <div className="section-container-wrapper">
        
          {reverseColumns ? (
            <>
              <div className="section-text-box-container">
                <div className="text-center lg:text-left space-y-4">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug">
                    {title}
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed">
                    {content}
                  </p>
                </div>
              </div>

              <div className="w-full">
                <img
                  loading="lazy"
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-64 lg:h-auto object-cover rounded-xl shadow-lg"
                />
              </div>
            </>
          ) : (
            <>
              <div className="w-full">
                <img
                  loading="lazy"
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-64 lg:h-auto object-cover rounded-xl shadow-lg"
                />
              </div>

              <div className="flex flex-col justify-center items-center lg:items-start space-y-8">
                <div className="text-center lg:text-left space-y-4">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug">
                    {title}
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed">
                    {content}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section;
