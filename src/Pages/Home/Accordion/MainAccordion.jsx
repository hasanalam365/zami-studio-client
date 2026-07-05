import React from "react";
import AccordionHeader from "./AccordionHeader";
import Accordion from "./Accordion";

const MainAccordion = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-black">

      {/* red glow background */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-red-600/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-red-500/10 blur-[140px] rounded-full"></div>

      {/* content */}
      <div className="relative z-10 space-y-14">
        <AccordionHeader />
        <Accordion />
      </div>

    </section>
  );
};

export default MainAccordion;