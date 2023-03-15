import React from "react";

const Contact = () => {
  return (
    <div className="bg-violet-500 contact-page-wrapper">
      <h1 className="primary-heading">Can you come to my graduation ?</h1>
      <h1 className="primary-heading">Let me known</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
