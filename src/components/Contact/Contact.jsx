import React from "react";
import emailjs from '@emailjs/browser'

import '../Contact/Contact.css'

const Contact = () => {

 function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_rmywku9', 'template_1r2mw31', e.target, 'YI3thNnaMMjsZPvGm')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <section className="bg-violet-500 contact-page-wrapper min-h-[calc(100vh)] "id='contact'>
      <form className="form" onSubmit={sendEmail}>
        <div class="pageTitle title">Can you come to my graduation ? </div>
      <div class="secondaryTitle title">Let me known</div>
      <input type="text" name="from_name" class="name formEntry" placeholder="Name" />
        <input type="email" name="from_email" class="email formEntry" placeholder="Email" />
        <textarea name="html_message" class="message formEntry" placeholder="Message"></textarea>
      <input className="submit formEntry" type="submit" value="Send" />
      </form>
    </section>

  );
};

export default Contact;
