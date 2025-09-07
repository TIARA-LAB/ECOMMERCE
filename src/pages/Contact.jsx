import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [popup, setPopup] = useState({ show: false, message: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_wdz7y9i",
        "template_e6nxzfh",
        formData,
        "yUuwXY-UNb7_cA338"
      )
      .then(
        () => {
          setPopup({ show: true, message: "✅ Message Sent Successfully!", type: "success" });
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setPopup({ show: true, message: "❌ Failed to send message. Try again.", type: "error" });
        }
      );
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      
      <div className="contact-top">
        <div className="contact-box">
          <h3>📞 Call to Us</h3>
          <p>We are available 24/7 ,7 days a week</p>
          <p>Phone: +8801611112222</p>
        </div>
      </div>

      
      <div className="contact-bottom">
        <div className="contact-box">
          <h3>✉️ Write to Us</h3>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Email: customer@exclusive.com</p>
          <p>Email: support@exclusive.com</p>
        </div>

        <div className="contact-box">
          <h3>📝 Message Us</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      
      {popup.show && (
        <div className="popup">
          <div className={`popup-content ${popup.type}`}>
            <p>{popup.message}</p>
            <button onClick={() => setPopup({ show: false, message: "", type: "" })}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
