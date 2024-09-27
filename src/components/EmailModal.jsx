import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

const EmailModal = ({ title, buttonLabel, serviceId, templateId, userId }) => {
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

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then(
        (result) => {
          toast.success("Your message has been sent successfully!", {
            duration: 5000,
          });
          setFormData({
            name: "",
            phone: "",
            time: "",
            message: "",
          });
        },
        (error) => {
          toast.error("Failed to send the message, please try again.", {
            duration: 5000,
          });
        }
      );
  };

  return (
    <div className="bg-white py-8 px-6 rounded-lg shadow-xl w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
      <form className="space-y-4" onSubmit={sendEmail}>
        <div>
          <label className="block font-medium mb-2 text-left" htmlFor="name">
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
          <label className="block font-medium mb-2 text-left" htmlFor="phone">
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
          <label className="block font-medium mb-2 text-left" htmlFor="time">
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
          <label className="block font-medium mb-2 text-left" htmlFor="message">
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
          <button
            type="submit"
            className="w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold text-lg px-6 py-3 rounded-md shadow-lg"
          >
            {buttonLabel}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailModal;