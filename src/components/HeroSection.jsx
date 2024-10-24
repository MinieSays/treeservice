import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

const HeroSection = ({
  title,
  highlightedText,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
  formTitle,
  emailServiceId,
  emailTemplateId,
  emailUserId,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(emailServiceId, emailTemplateId, formData, emailUserId).then(
      (result) => {
        toast.success(
          "We received your message and will get back to you in 24 hours.",
          {
            duration: 5000,
          }
        );
      },
      (error) => {
        toast.error("Failed to send the message, please try again.");
      }
    );

    setFormData({
      name: "",
      phone: "",
      time: "",
      message: "",
    });
  };

  return (
    <section
      className="relative bg-cover bg-center pt-24 md:pt-32 py-16 md:py-12"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "scroll",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <motion.div
        className="container relative z-10 mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 max-w-[1200px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="w-full md:w-5/12 text-white"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            {title} <span className="text-lime-500">{highlightedText}</span>
          </h1>
          <div className="w-16 h-2 bg-lime-500 my-6 mx-auto"></div>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            {description}
          </p>
          <Link to={buttonLink}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-lime-500 hover:bg-lime-600 text-white font-semibold text-lg px-6 py-3 rounded-md shadow-lg"
            >
              {buttonText}
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          className="w-full md:w-5/12 relative z-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="bg-white bg-opacity-90 py-8 px-6 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">{formTitle}</h2>
            <form className="space-y-4" onSubmit={sendEmail}>
              <div>
                <label
                  className="block font-medium mb-2 text-left"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-600"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label
                  className="block font-medium mb-2 text-left"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-600"
                  placeholder="Your Phone Number"
                  required
                />
              </div>

              <div>
                <label
                  className="block font-medium mb-2 text-left"
                  htmlFor="time"
                >
                  Best Time to Call
                </label>
                <input
                  type="text"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-600"
                  placeholder="Morning, Afternoon, Evening"
                />
              </div>

              <div>
                <label
                  className="block font-medium mb-2 text-left"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-600"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <div className="text-left">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold text-lg px-6 py-3 rounded-md shadow-lg"
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
