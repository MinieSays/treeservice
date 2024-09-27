import { Leaf, ScissorsIcon, ShieldAlert } from "lucide-react"; // Updated Lucide Icons

const Feature = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Tree Trimming Services
          </h1>
          <p className="mt-4 text-gray-600 text-lg md:text-xl">
            Our expert tree trimming services help maintain the health, safety, and aesthetics of your trees, promoting their long-term growth and beauty.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Healthier Trees */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="bg-lime-100 rounded-full p-4 mb-4">
              <Leaf className="w-8 h-8 text-lime-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Healthier Trees</h3>
            <p className="text-gray-600 text-center">
              Regular trimming removes dead or diseased branches, allowing your trees to grow healthier and stronger over time.
            </p>
          </div>

          {/* Card 2: Precision Trimming */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="bg-lime-100 rounded-full p-4 mb-4">
              <ScissorsIcon className="w-8 h-8 text-lime-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Precision Trimming</h3>
            <p className="text-gray-600 text-center">
              Our skilled team ensures precise cuts that enhance the shape and aesthetics of your trees without harming their natural growth.
            </p>
          </div>

          {/* Card 3: Safety Compliance */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="bg-lime-100 rounded-full p-4 mb-4">
              <ShieldAlert className="w-8 h-8 text-lime-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Safety Compliance</h3>
            <p className="text-gray-600 text-center">
              We ensure all tree trimming services are conducted safely, protecting your property and complying with local regulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
