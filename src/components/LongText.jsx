import React from "react";

const LongText = ({ title, highlightedText, content }) => {
  return (
    <section className="max-w-7xl mx-auto pt-20 px-6">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
          {title}{" "}
          <span className="bg-gradient-to-r from-lime-500 to-lime-700 text-transparent bg-clip-text leading-snug">
            {highlightedText}
          </span>
        </h2>
        <p className="pb-20 text-base md:text-lg leading-relaxed">
          {content}
        </p>
      </div>
    </section>
  );
};

export default LongText;
