import { Axe, ScissorsIcon, ShieldAlert } from "lucide-react"; // Updated Lucide Icons

const Feature = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Tree Removal Services
          </h1>
          <p className="mt-4 text-gray-600 text-lg md:text-xl">
            Our professional tree removal services ensure safe and efficient removal of trees that pose a risk to your property or landscape.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Safe Tree Removal */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="bg-lime-100 rounded-full p-4 mb-4">
              <Axe className="w-8 h-8 text-lime-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Safe Tree Removal</h3>
            <p className="text-gray-600 text-center">
              Our team is trained to safely remove trees that are dead, dying, or in hazardous locations, ensuring the safety of your property.
            </p>
          </div>

          {/* Card 2: Precision Equipment */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="bg-lime-100 rounded-full p-4 mb-4">
              <ScissorsIcon className="w-8 h-8 text-lime-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Precision Equipment</h3>
            <p className="text-gray-600 text-center">
              We use modern equipment like chainsaws and cranes to efficiently remove trees, minimizing disruption to your landscape.
            </p>
          </div>

          {/* Card 3: Safety and Compliance */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="bg-lime-100 rounded-full p-4 mb-4">
              <ShieldAlert className="w-8 h-8 text-lime-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Safety and Compliance</h3>
            <p className="text-gray-600 text-center">
              We ensure all tree removals follow safety standards and local regulations, providing peace of mind during the process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
