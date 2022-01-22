import React, { useState } from "react";
import { PropsWithChildren, FunctionComponent } from "react";
import { AccordionProps } from "./Accordion.interface";

export const Accordion: FunctionComponent<AccordionProps> = ({
  title,
  testid,
  accordionTestId,
  body,
  children,
}: AccordionProps) => {
  const [isOpen, toggleIsOpen] = useState(false);
  return (
    <div data-component-type="Accordion" className="accordion" key={title} data-testid={testid}>
      <button
        onClick={() => (isOpen ? toggleIsOpen(false) : toggleIsOpen(true))}
        title={title}
        className="py-2 px-5 border"
      >
        <span className="accordion-title">{title}</span>
      </button>
      <div
        data-testid={accordionTestId}
        className={`accordion-body overflow-hidden  ${isOpen ? "h-auto" : "h-0"}`}
      >
        {body || children}
      </div>
    </div>
  );
};
