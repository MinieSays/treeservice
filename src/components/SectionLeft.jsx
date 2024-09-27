import React from "react";
import treeimg from "../assets/tree-trimming.jpg";
import Button from "./ui/Button";

const SectionLeft = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <img
              loading="lazy"
              src={treeimg}
              alt="Community Collaboration"
              className="w-full h-64 lg:h-auto object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="flex flex-col justify-center items-center lg:items-start space-y-8">
            <div className="text-center lg:text-left space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug">
                Enhance Your Yard
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                Your property is the face of your business or home. Our team
                specializes in aesthetically appealing tree trimming that
                focuses on enhancing the natural shape of your trees. Not only
                is tree trimming great for increasing property value, but it
                helps with disease prevention. Trimming your trees provides
                excellent air circulation and increased sunlight, minimizing the
                chances of fungal diseases. With the added protection comes
                improved growth. By removing weaker branches, the tree can
                generate more energy to assist in growing its other branches.
                Please speak to us now about tree trimming in Fort Collins, Co.
              </p>
            </div>

            <div className="w-full sm:w-auto">
              <Button
                label="Get Quoted"
                backgroundColor="#65a30d"
                className="w-full px-6 py-3 bg-lime-600 hover:bg-lime-700 transition duration-300 ease-in-out text-white font-semibold text-sm md:text-base rounded-lg shadow-lg flex items-center justify-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionLeft;
