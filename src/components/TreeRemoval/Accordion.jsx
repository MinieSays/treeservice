import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react'; // Icon from Lucide React

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'When should I remove a tree?',
      answer:
        'Trees should be removed when they are dead, dying, pose a safety hazard, or are causing damage to property. An arborist can assess the condition of your tree to determine if removal is necessary.',
    },
    {
      question: 'How much does tree removal cost?',
      answer:
        'Tree removal costs vary depending on the size, location, and condition of the tree. Factors such as accessibility and potential hazards also influence the final cost. It’s best to get an on-site estimate.',
    },
    {
      question: 'Do I need permission to remove a tree?',
      answer:
        'In some areas, removing a tree may require a permit, especially if it is a protected species or located on public property. Always check local regulations or consult with your tree service provider.',
    },
    {
      question: 'What happens to the tree after it is removed?',
      answer:
        'Once a tree is removed, we offer services such as stump grinding and disposal of wood and debris. You can also choose to keep the wood for firewood or other uses.',
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Accordion Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-6">
          Tree Removal FAQ
        </h2>

        {/* Accordion Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md transition-all duration-300 ${
                activeIndex === index ? 'p-6' : 'p-4'
              }`}
            >
              {/* Accordion Title */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-bold text-gray-800">{faq.question}</h3>
                <ChevronDown
                  className={`w-6 h-6 text-lime-600 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>

              {/* Accordion Content */}
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
