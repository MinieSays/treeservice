import React from "react";

const Section = ({ imageSrc, imageAlt, title, content, reverseColumns }) => {
  return (
    <section className="section-wrapper">
      <div className="section-container max-w-[1200px] mx-auto px-4 my-20">
        <div
          className={`section-container-wrapper flex flex-col lg:flex-row ${
            reverseColumns ? "lg:flex-row-reverse" : ""
          } items-center space-y-4 lg:space-y-0 lg:space-x-12`}
        >
          <div className="flex-1 text-center lg:text-left space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug">
              {title}
            </h2>
            <p className="text-base md:text-lg leading-relaxed">{content}</p>
          </div>

          <div className="flex-1 w-full">
            <figure className={reverseColumns ? `lg:mr-12` : ""}>
              <img
                loading="lazy"
                src={imageSrc}
                alt={imageAlt}
                className={`w-full h-64 lg:h-auto object-cover rounded-xl shadow-lg`}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
