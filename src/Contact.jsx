import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f943d98c-77cf-4de4-bec7-c1d5b4e993e1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="cont">
      {/* Left Side - Contact Info */}
      <div className="contact-left">
        <h1>Contact Us</h1>
        <p>
          Feel free to use the form or drop us an email. Old-fashioned phone calls work too.
        </p>
        <div className="contact-details">
          <div className="contact-row">
            {/* Phone Icon */}
            <svg viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
            </svg>
            <span>9505376219</span>
          </div>
          <div className="contact-row">
            {/* Email Icon */}
            <svg viewBox="0 0 24 24">
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.29 6.36a1 1 0 001.42 0L20 10.01V20H4z"/>
            </svg>
            <span>deviravadadevi@gmail.com</span>
          </div>
          <div className="contact-row">
            {/* Location Icon */}
            <svg viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"/>
            </svg>
            <span>
             Kothavlasa, Visakhapatnam.<br />
                Andhra Pradesh, India.
              
            </span>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="contact-form">
        <form onSubmit={onSubmit}>
          <div className="input-row">
            <div className="input-field">
              <label className="label">Name</label>
              <input type="text" name="name" placeholder="First" required className="input" />
            </div>
            <div className="input-field">
              <label className="label" style={{ color: "transparent" }}>Last</label>
              <input type="text" name="lastname" placeholder="Last" required className="input" />
            </div>
          </div>

          <div className="input-field" style={{ marginBottom: 28 }}>
            <label className="label">Email</label>
            <input type="email" name="email" placeholder="example@email.com" required className="input" />
          </div>

          <div className="input-field" style={{ marginBottom: 28 }}>
            <label className="label">Phone</label>
            <input type="tel" name="number" placeholder="xxx-xxx-xxxx" required className="input" />
          </div>

          <div className="input-field" style={{ marginBottom: 32 }}>
            <label className="label">Message</label>
            <textarea name="message" rows="5" placeholder="Type your message ..." required className="textarea" />
          </div>

          <button type="submit" className="submit-button">Submit</button>
          <span className="result-message">{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
