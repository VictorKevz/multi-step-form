import React from "react";
import "../css/step2.css";
import { step2Data } from "./step2Data";

function Step2({ formData, setFormData, decrementStep, incrementStep }) {
  const subscription = formData.subscription || "Arcade";
  const isToggled = formData.isToggled || false;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      subscription: e.target.value,
    });
  };

  const switchSubscription = () => {
    setFormData({
      ...formData,
      isToggled: !isToggled,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    incrementStep();
  };

  return (
    <section className="step2 wrapper">
      <header className={`step2 step-header-container`}>
        <h2 className="step2 title">Select your plan</h2>
        <p className="step2 parag">
          You have the option of monthly or yearly billing.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="step2-form">
        <div className="field-wrapper">
          {step2Data.map((item) => (
            <div key={item.id} className="field">
              <label
                className={`sub-label ${
                  subscription === item.title && "active"
                } `}
                htmlFor={item.title}
              >
                <input
                  type="radio"
                  value={item.title}
                  checked={subscription === `${item.title}`}
                  onChange={handleChange}
                  name="subscription"
                  id={item.title}
                  className="subscription"
                />
                <div className="content-wrapper">
                  <div className="icon-wrapper">
                    <img
                      src={item.icon}
                      alt={`Icon of ${item.title}`}
                      className="sub-icon"
                    />
                  </div>
                  <div className="text-wrapper">
                    <h3 className="sub-title">{item.title}</h3>
                    <p className="price">
                      {isToggled
                        ? `$${item.price.yearly.yearlyPrice}/yr`
                        : `$${item.price.monthly.monthlyPrice}/mo`}
                    </p>{" "}
                  </div>
                </div>
              </label>
            </div>
          ))}
          <div className="field switch-wrapper">
            <div className="switch-container">
              <span>Monthly</span>
              <label className="switch" htmlFor="myCheckbox">
                <input
                  type="checkbox"
                  onChange={switchSubscription}
                  id="myCheckbox"
                  aria-label="Switch Prices"
                  checked={isToggled}
                  className="step2-checkbox"
                />
                <span className="slider round"></span>
              </label>
              <span>Yearly</span>
            </div>
          </div>
        </div>

        <div className="field button">
        <button className="return step2" type="button" onClick={decrementStep}>
            Go Back
          </button>
          <button className="btn step2" type="submit">
            Next Step
          </button>         
        </div>
      </form>
    </section>
  );
}

export default Step2;