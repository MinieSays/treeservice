import React, { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="bg-gray-100 py-24 md:mt-20">
      <div className="container max-w-[1200px] mx-auto px-6 lg:px-12 md:mb-20">
        {/* Header Section */}
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Get in Touch with Us
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Whether you have a question about tree services, want to schedule a
            consultation, or anything else, our team is ready to help.
          </p>
        </div>

        {/* Form and Contact Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6 text-left">
              {/* Name Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-600"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-600"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-600"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-600"
                  rows="4"
                  placeholder="Your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-right">
                <button className="px-6 py-3 bg-lime-600 hover:bg-lime-700 text-white font-semibold rounded-lg shadow-lg">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center space-y-8 lg:pl-6">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold">Our Office</h3>
                <p>1000 E Laurel St, Fort Collins, CO 80524, United States</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold">Email Us</h3>
                <p>contact@fortcollinstreeservice.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold">Call Us</h3>
                <p>970-200-8043</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
