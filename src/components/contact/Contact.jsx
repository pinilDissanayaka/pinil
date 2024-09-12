import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jdznc3w", "template_9djzlm9", form.current, {
        publicKey: "tqIiE0ldXUR2anvMA",
      })
      .then(
        () => {
          console.log("Email sent successfully");
          setMessage("Message sent successfully, I will get back to you soon");
          setTimeout(() => {
            setMessage("");
          }, 5000)
        },
        (error) => {
          console.log("Email not sent", error);
          setMessage("Message not sent, please try again later");
          setTimeout(() => {
            setMessage("");
          }, 5000)
        }
      );

      e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Get in touch</h2>
      <span className="section_subtitle">Contact me</span>

      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Talk to me</h3>

          <div className="contact_info">
            <div className="contact_card">
              <i className="bx bx-mail-send contact_card-icon"></i>

              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">pinildissanayaka@gmail.com</span>

              <a href="mailto:pinildissanayaka@gmail.com" className="contact_button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bxl-whatsapp contact_card-icon"></i>

              <h3 className="contact_card-title">Mobile</h3>
              <span className="contact_card-data">+94786450938</span>

              <a href="" className="contact_button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bxl-linkedin contact_card-icon"></i>

              <h3 className="contact_card-title">LinkedIn</h3>
              <span className="contact_card-data">Pinil Dissanayaka</span>

              <a href="https://www.linkedin.com/in/pinil-dissanayaka-a69a41285/" className="contact_button">
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact_content">
          <h3 className="contact_title">Write your thoughts</h3>

          <form ref={form} onSubmit={sendEmail} className="contact_form">
            <div className="contact_form-div">
              <label className="contact_form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact_form-input"
                placeholder="Enter your name"
              />
            </div>

            <div className="contact_form-div">
              <label className="contact_form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact_form-input"
                placeholder="Enter your email"
              />
            </div>

            <div className="contact_form-div contact_form-area">
              <label className="contact_form-tag">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact_form-input"
                placeholder="Enter your message"
              ></textarea>
            </div>

            {message && <p className="contact_message">{message}</p>}
            
            <button href="#contact" className="button button--flex">
              Send Message <i className="uil uil-message button_icon"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
