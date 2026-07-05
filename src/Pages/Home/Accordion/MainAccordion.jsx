import React from 'react';
import AccordionHeader from './AccordionHeader';
import Accordion from './Accordion';

const MainAccordion = () => {
  return (
    <section className="relative w-full px-6 py-12 overflow-hidden bg-gradient-to-br from-gray-50 via-green-50 to-green-100 rounded-3xl">
      
      {/* Decorative angled background */}
      <div 
        className="absolute top-0 right-0  h-[600px] bg-gradient-to-tr from-green-200 to-green-400 rounded-full opacity-30 rotate-45 -z-10"
      ></div>

      {/* Content */}
      <div className="relative z-10 space-y-12">
        <AccordionHeader />
        <Accordion />
      </div>
    </section>
  );
};

export default MainAccordion;
