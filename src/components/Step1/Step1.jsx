import React, { useState } from "react";
import "../css/step1.css";

function Step1() {
  const [step1Data, setStep1Data] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneNumberRegex = /^\+?\d{1,3}(?:\s\d{1,4})*$/;

  const [isValid, setValid] = useState({
    name: true,
    email: true,
    phoneNumber: true,
  });
  const[showStep2, setShowStep2] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStep1Data((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));

    // Instantly clear errors
    setValid((prevErr) => ({
      ...prevErr,
      [name]: true,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newFormValid = { ...isValid };
    
    if (!step1Data.name) {
        newFormValid.name = false;
    }
    if (!step1Data.email || !emailRegex.test(step1Data.email)) {
        newFormValid.email = false;
    }
    if (!step1Data.phoneNumber || !phoneNumberRegex.test(step1Data.phoneNumber)) {
        newFormValid.phoneNumber = false;
    }

    if (newFormValid.name && newFormValid.email && newFormValid.phoneNumber) {
        setShowStep2(true)
    }

    setValid(newFormValid);
};

  return (
    <section className="step1-wrapper">
      <header className={`step1-header-container`}>
        <h1 className="step1-title">Personal info</h1>
        <p className="step1-parag">
          Please provide your name, email address, and phone number.
        </p>
      </header>
      <form onSubmit={handleSubmit} className="step1-form">
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
            value={step1Data.name}
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
            value={step1Data.email}
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
            value={step1Data.phoneNumber}
            onChange={handleChange}
            name="phoneNumber"
            id="userNum"
            className="step1-input"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
        <div className="field">
          <button className="btn step1" type="submit">
            Next Step
          </button>
        </div>
      </form>
    </section>
  );
}

export default Step1;
