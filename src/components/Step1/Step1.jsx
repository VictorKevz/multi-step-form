import React, { useState } from "react";
import "../css/step1.css";

function Step1({ incrementStep, formData, setFormData }) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneNumberRegex = /^\+?\d{1,3}(?:\s?\d{1,4})*$/;

  const [isValid, setValid] = useState({
    name: true,
    email: true,
    phoneNumber: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));

    setValid((prevErr) => ({
      ...prevErr,
      [name]: true,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newFormValid = { ...isValid };

    if (!formData.name) {
      newFormValid.name = false;
    }
    if (!formData.email || !emailRegex.test(formData.email)) {
      newFormValid.email = false;
    }
    if (!formData.phoneNumber || !phoneNumberRegex.test(formData.phoneNumber)) {
      newFormValid.phoneNumber = false;
    }

    if (newFormValid.name && newFormValid.email && newFormValid.phoneNumber) {
      incrementStep();
    }

    setValid(newFormValid);
  };

  return (
    <section className="step1 wrapper">
      <header className={`step1 step-header-container`}>
        <h1 className="step1 title">Personal info</h1>
        <p className="step1 parag">
          Please provide your name, email address, and phone number.
        </p>
      </header>
      <form onSubmit={handleSubmit} autocomplete="off" className="step1-form">
        <div className="field">
          <div className="error-label-field">
            <label htmlFor="userName">Name</label>
            {!isValid.name && (
              <span className="error-message">
                Please enter a valid user name{" "}
              </span>
            )}
          </div>
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            name="name"
            id="userName"
            className="step1-input"
            placeholder="e.g. Stephen King"
          />
        </div>
        <div className="field">
          <div className="error-label-field">
            <label htmlFor="userEmail">Email Address</label>
            {!isValid.email && (
              <span className="error-message">
                Please enter a valid email address{" "}
              </span>
            )}
          </div>
          <input
            type="text"
            value={formData.email}
            onChange={handleChange}
            name="email"
            id="userEmail"
            className="step1-input"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div className="field">
          <div className="error-label-field">
            <label htmlFor="userNum">Phone Number</label>
            {!isValid.phoneNumber && (
              <span className="error-message">
                Please enter a valid phone number{" "}
              </span>
            )}
          </div>
          <input
            type="text"
            value={formData.phoneNumber}
            onChange={handleChange}
            name="phoneNumber"
            id="userNum"
            className="step1-input"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
        <div className="field button step1">
          <button className="btn step1" type="submit">
            Next Step
          </button>
        </div>
      </form>
    </section>
  );
}

export default Step1;