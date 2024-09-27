import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react'; // Icon from Lucide React

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'When is the best time to trim trees?',
      answer:
        'The best time to trim trees is typically during the late winter or early spring before new growth begins. However, for certain species or specific concerns, trimming can be done year-round.',
    },
    {
      question: 'How often should trees be trimmed?',
      answer:
        'Tree trimming should be done every 3-5 years, depending on the type of tree and its growth rate. Regular maintenance ensures healthier growth and reduces the risk of damage.',
    },
    {
      question: 'Will trimming hurt my tree?',
      answer:
        'When done properly, tree trimming promotes healthier growth. It removes dead or diseased branches and helps shape the tree. Our team uses professional techniques to ensure your tree thrives.',
    },
    {
      question: 'How much does tree trimming cost?',
      answer:
        'Tree trimming costs vary depending on the size, condition, and location of the tree. It’s best to request an on-site estimate for a more accurate price based on your specific needs.',
    },
    {
      question: 'Why should I trim my trees?',
      answer:
        'Trimming improves tree health by removing dead or diseased branches, enhances the appearance of your landscape, and can prevent potential hazards like falling limbs.',
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Accordion Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-6">
          Tree Trimming FAQ
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
