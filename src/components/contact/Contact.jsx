import React from "react";
import ContactHero from "./sections/ContactHero";
import ContactForm from "./sections/ContactForm";
import FooterOtherPages from "../layout/FooterOtherPages";

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <FooterOtherPages />
    </div>
  );
};

export default Contact;
