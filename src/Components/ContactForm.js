import React, { useState } from "react";
import emailjs from "emailjs-com";

const emailType = process.env.REACT_APP_EMAIL_TYPE;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const userId = process.env.REACT_APP_USER_ID;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = { email, name, message };

    emailjs.sendForm(emailType, templateId, e.target, userId).then(
      (result) => {
        console.log(result.text);
        setEmailSent(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  const form = (
    <form className="contact" onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        type="text"
        value={name}
        name="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        placeholder="E-mail"
        type="email"
        value={email}
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <textarea
        placeholder="Your message..."
        style={{ resize: "none" }}
        name="message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></textarea>
      <input
        type="submit"
        value="send"
        disabled={name && email && message ? false : true}
      />
    </form>
  );

  const successMessage = (
    <div>
      <p>Thank you!</p>
      <p>We have received your enquiry!</p>
    </div>
  );

  return <div>{emailSent ? successMessage : form}</div>;
};

export default ContactForm;
