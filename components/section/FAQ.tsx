import React from "react";
import { SimpleAccordion } from "../element/SimpleAccordion";
import faqData from "./../../template-content/FAQ.json";

const FAQ = () => {
  return (
    <div>
      <h3 className='text-3xl mb-4' id='#Itinerary'>
        FAQ
      </h3>
      {faqData.faq.map((faq, index) => (
        <SimpleAccordion
          title={faq.title}
          desription={faq.description}
          index={faq.title}
          key={index}
        />
      ))}
    </div>
  );
};

export default FAQ;
