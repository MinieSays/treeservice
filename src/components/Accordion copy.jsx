import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Accordion = ({ questions, sectionTitle }) => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAccordion = (question) => {
    setActiveQuestion(activeQuestion === question ? null : question);
  };

  return (
    <section className="bg-gray-200 py-10">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-extrabold text-gray-800 mb-6 text-3xl md:text-4xl">
          {sectionTitle}
        </h2>

        <div className="space-y-4">
          {questions.map((question, i) => (
            <div
              key={i}
              className={`bg-white rounded-lg shadow-md transition-all duration-300 ${
                activeQuestion === i ? "p-6" : "p-4"
              }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(i)}
              >
                <h3 className="text-lg font-bold text-gray-800">
                  {question.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-lime-600 transition-transform duration-300 ${
                    activeQuestion === i ? "rotate-180" : ""
                  }`}
                />
              </div>

              {activeQuestion === i && (
                <div className="mt-4 text-gray-600 text-sm">
                  <p>{question.answer}</p>
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
