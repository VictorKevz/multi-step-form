import React from "react";
import { step3Data } from "./step3Data";
import "../css/step3.css";

function Step3({ formData, setFormData, decrementStep, incrementStep }) {
  const isToggled = formData.isToggled;

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevVal) => ({
      ...prevVal,
      [name]: checked,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    incrementStep();
  };
  return (
    <section className="step3 wrapper">
      <header className={`step3 step-header-container`}>
        <h2 className="step3 title">Pick add-ons</h2>
        <p className="step3 parag">
          Add-ons help enhance your gaming experience.
        </p>
      </header>
      <form className="step3-form" onSubmit={handleSubmit}>
        <div className="field step3">
          {step3Data.map((item) => (
            <label key={item.id} htmlFor={item.id} className={`service-item ${formData[item.name] && "active"}`}>
              <div className="box-info-wrapper">
                <div className="custom-checkbox">
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={formData[item.name] || false}
                    onChange={handleCheckboxChange}
                    id={item.id}
                    className="step3-checkbox"
                  />
                  <span className="checkmark"></span>
                </div>
                <div className="text-wrapper">
                  <h3 className="service">{item.service}</h3>
                  <p className="description">{item.description}</p>
                </div>
              </div>
              <p className="service-price">
                {isToggled
                  ? `+$${item.price.yearly}/yr`
                  : `+$${item.price.monthly}/mo`}
              </p>
            </label>
          ))}
          <div className="field button">
            <button
              className="return step3"
              type="button"
              onClick={decrementStep}
            >
              Go Back
            </button>
            <button className="btn step3" type="submit">
              Next Step
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
export default Step3;
