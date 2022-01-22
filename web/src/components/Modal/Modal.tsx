import React, { useState } from "react";
import { FunctionComponent } from "react";
import { BiX } from "react-icons/bi";
import { v4 as uuid } from "uuid";
import { ModalProps } from "./Modal.interface";

export const Modal: FunctionComponent<ModalProps> = ({
  children,
  triggerText,
  modalTitle,
  triggerTitle,
}: ModalProps) => {
  const [active, toggleActive] = useState(false);
  const key = uuid();
  return (
    <>
      <button className="inline-block" title={triggerTitle} onClick={() => toggleActive(true)}>
        {triggerText}
      </button>
      {active && (
        <div
          key={`modal-${key}`}
          title={modalTitle}
          data-component-type="Modal"
          className="fixed flex items-center justify-center left-0 top-0 w-full h-full"
        >
          <div
            onClick={() => toggleActive(false)}
            className="fixed left-0 top-0 w-full h-full bg-opacity-20 bg-black"
          ></div>
          <div
            className="modal flex justify-center items-center rounded bg-white p-4 relative min-w-20 min-h-20"
            title="modal"
          >
            <button
              className="absolute right-2 top-2"
              title="Close Modal"
              onClick={() => toggleActive(false)}
            >
              <BiX></BiX>
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
