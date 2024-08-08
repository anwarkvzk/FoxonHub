import React, { useState } from "react";
import Section from "./Section";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <Section id="contact-information">
      <div style={{ padding: "1px", maxWidth: "600px", margin: "auto" }}>
        <h1 className="text-4xl  text-center font-bold ">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="name"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="email"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
              required
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="message"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                boxSizing: "border-box",
                minHeight: "100px",
              }}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>

        <div style={{ marginTop: "40px" }}>
          <h3>Our Contact Information</h3>
          <p>
            <strong>Email:</strong> contact@example.com
          </p>
          <p>
            <strong>Phone:</strong> +123 456 7890
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ContactPage;
