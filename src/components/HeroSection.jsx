import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed pt-24 md:pt-32 py-16 md:py-12"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/589802/pexels-photo-589802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundAttachment: "fixed", // Parallax effect
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay to Darken the Image */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content Section */}
      <div className="container relative z-10 mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        {/* Left Text Section */}
        <div className="w-full md:w-5/12 text-white">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Emergency <span className="text-lime-500">Tree</span> Services in Fort Collins
          </h1>
          <div className="w-16 h-2 bg-lime-500 my-6 mx-auto"></div>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            When disaster strikes or immediate tree services are needed, count on us to be there for you. We provide emergency tree services to ensure your property is safe and your trees are cared for.
          </p>
          <Link to="/contact">
          <button className="bg-lime-500 hover:bg-lime-600 text-white font-semibold text-lg px-6 py-3 rounded-md shadow-lg">
            Contact Us Now
          </button>
          </Link>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-5/12 relative z-10">
          <div className="bg-white bg-opacity-90 py-8 px-6 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Free Consultation
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
      </div>
    </section>
  );
};

export default HeroSection;
