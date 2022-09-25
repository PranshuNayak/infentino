import React from "react";
import UpperBorder from "../Border/UpperBorder";
import ContactForm from "./Form";
import './style.css'
function Contact() {
  return (
    <div className="row my-5 p-5 justify-content-between align-items-center relative">
      <div className="col-lg-6 col-12">
        <div className="row">
          <UpperBorder
            align="justify-content-left"
            textAlign="text-left"
            text1={`Let's see`}
            text2="how it works"
          />
          <p className="col-10 h5 mb-5">
            One of the Tech Experts will reach out to you within next 48
            business hours.
          </p>
          <div className="col-12 contact" />
          <div className="col-12">
            <div className="col-4"></div>
            <div className="col-4"></div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>

        <ContactForm/>
    </div>
  );
}

export default Contact;
