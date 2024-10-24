import { useState } from "react";

const Accordion = ({ questions }) => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <section className="bg-gray-200 w-full py-10">
      <div className="max-w-[1200px] mx-auto">
        <h4 className="font-extrabold text-4xl mb-8">
          Frequently Asked Questions
        </h4>

        <div>
          {questions.map((question, i) => (
            <div
              className="max-w-[600px] mx-auto bg-white mb-2 px-6 py-4 rounded-xl cursor-pointer"
              onClick={() => toggle(i)}
            >
              <div className="flex item-center justify-between">
                <h2 className="text-xl font-semibold">{question.question}</h2>
                <span className="text-xl font-semi-bold">
                  {selected === i ? "-" : "+"}
                </span>
              </div>
              <div
                className={selected === i ? `text-start` : `hidden text-start`}
              >
                {question.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
