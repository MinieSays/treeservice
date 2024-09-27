import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Accordion = ({ faqs = [], sectionTitle }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-6">
          {sectionTitle}
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md transition-all duration-300 ${
                activeIndex === index ? "p-6" : "p-4"
              }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-bold text-gray-800">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-lime-600 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {activeIndex === index && (
                <div className="mt-4 text-gray-600 text-sm">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
