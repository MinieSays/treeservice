import React from "react";
import { TreePine, Scissors, Trees } from "lucide-react";

const Features = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <TreePine className="text-lime-600 w-10 h-10 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">
              Expert Tree Planting
            </h3>
            <p className="text-gray-700">
              Our team helps you select and plant the perfect trees to enhance
              your landscape and environment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Scissors className="text-lime-600 w-10 h-10 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">
              Professional Pruning & Trimming
            </h3>
            <p className="text-gray-700">
              Keep your trees healthy and aesthetically pleasing with our expert
              pruning and trimming services.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Trees className="text-lime-600 w-10 h-10 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Tree Health & Care</h3>
            <p className="text-gray-700">
              Our expert team ensures that your trees remain healthy through
              proper care, disease prevention, and treatment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
