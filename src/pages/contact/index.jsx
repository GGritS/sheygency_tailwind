import React from "react";
import { Address } from "./address";
import { ContactForm } from "./contactForm";

export const Contact = () => {
  return (
    <>
      <div className="grid grid-cols-2 px-32 gap-20 mt-32 sm:grid-cols-1 sm:p-5">
        <Address />
        <ContactForm />
      </div>
    </>
  );
};
