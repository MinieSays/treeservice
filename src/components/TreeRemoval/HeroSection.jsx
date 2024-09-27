import React from "react";
import { ArrowRight, TreesIcon } from "lucide-react"; // Icons from Lucide React
import treeServiceImage from "../../assets/code.jpg"; // Assuming you have an image asset
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-24 md:py-32"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/5351110/pexels-photo-5351110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundAttachment: "fixed", // Parallax effect
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay to Darken the Image ONLY */}
      <div className="absolute inset-0 bg-black opacity-70 pointer-events-none"></div>

      {/* Content Section */}
      <div className="container relative z-10 mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center">
        {/* Left Text Section */}
        <div className="space-y-6 lg:pr-8 text-center lg:text-left">
          {/* Heading */}
          <h1 className="text-white bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
            Tree Removal Fort Collins
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-white">
           Emergency tree removal services in Fort Collins and surrounding areas.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* Primary Button */}
            <Link to="/contact"
              className="flex items-center justify-center gap-x-2 rounded-lg bg-lime-600 px-10 py-3 text-white shadow-lg hover:bg-lime-700 transition-all"
            >
              <TreesIcon className="h-6 w-6 text-white" />
              Call us at 970-200-8043
            </Link>

            {/* Secondary Button */}
            <Link
              to="/"
              className="flex items-center justify-center gap-x-2 rounded-lg border border-lime-600 px-10 py-3 text-lime-600 hover:bg-lime-100 transition-all"
            >
              Learn More <ArrowRight className="h-6 w-6 text-lime-600" />
            </Link>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="bg-white py-8 px-6 rounded-lg shadow-xl w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Get Quoted Today
          </h2>
          <form className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="block font-medium mb-2 text-left" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-600"
                placeholder="Your Name"
              />
            </div>

            {/* Phone Number Input */}
            <div>
              <label className="block font-medium mb-2 text-left" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-600"
                placeholder="Your Phone Number"
              />
            </div>

            {/* Best Time to Call Input */}
            <div>
              <label className="block font-medium mb-2 text-left" htmlFor="time">
                Best Time to Call
              </label>
              <input
                type="text"
                id="time"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-600"
                placeholder="Morning, Afternoon, Evening"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block font-medium mb-2 text-left" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-600"
                placeholder="Your Message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-left">
              <button
                type="submit"
                className="w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold text-lg px-6 py-3 rounded-md shadow-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
