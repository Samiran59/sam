import React from 'react';
import CoolContactForm from './ui/CoolContactForm';

const Contact = () => {
  return (
    <section id="contact">
      <CoolContactForm
        title="Let's Build Something Great Together"
        description="Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life."
        phone="+91 9707030281"
        email="samiranmalakar718@gmail.com"
        location="Guwahati, Assam, India"
      />
    </section>
  );
};

export default Contact;