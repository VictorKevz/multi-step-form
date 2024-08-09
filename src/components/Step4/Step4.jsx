import React from "react";
import "../css/step4.css";
import { step2Data } from "../Step2/step2Data";
import { step3Data } from "../Step3/step3Data";
import { AnimatePresence, motion } from "framer-motion";
import { nextStep } from "../../Variants";

function Step4({ formData, onShow, decrementStep, changeStep }) {
  const { isToggled, subscription, checkbox1, checkbox2, checkbox3 } = formData;

  const selectedSubscription = step2Data.find(
    (sub) => sub.title === subscription
  );

  const calculateResults = () => {
    let total = 0;

    if (selectedSubscription) {
      total += isToggled
        ? selectedSubscription.price.yearly.yearlyPrice
        : selectedSubscription.price.monthly.monthlyPrice;
    }

    step3Data.forEach((addOn) => {
      if (formData[addOn.name]) {
        total += isToggled ? addOn.price.yearly : addOn.price.monthly;
      }
    });

    return total;
  };

  const total = calculateResults();

  return (
    <AnimatePresence mode="wait">
      <motion.section
        className="step4 wrapper"
        aria-labelledby="step4-title"
        variants={nextStep}
        initial="hidden"
        animate="visible"
      >
        <header className={`step4 step-header-container`}>
          <h2 id="step4-title" className="step4 title">
            Finishing up
          </h2>
          <p className="step4 parag">
            Double-check everything looks OK before confirming.
          </p>
        </header>
        <form className="step4-form">
          <fieldset className="summary-wrapper">
            <legend className="visually-hidden">
              Selected Plan and Add-ons
            </legend>
            <div className="summary">
              <div className="sub-price-wrapper">
                <div className="sub-change-wrapper">
                  <p className="sub-name">
                    {subscription} ({isToggled ? "Yearly" : "Monthly"})
                  </p>
                  <button
                    className="change-btn"
                    onClick={changeStep}
                    aria-label="Change subscription plan"
                  >
                    Change
                  </button>
                </div>
                <p className="sub-price">
                  {isToggled
                    ? `+$${selectedSubscription.price.yearly.yearlyPrice}/yr`
                    : `+$${selectedSubscription.price.monthly.monthlyPrice}/mo`}
                </p>
              </div>
              <div className="adds-on-wrapper">
                <div className="service-name-container">
                  {checkbox1 && (
                    <p className="service-name">{step3Data[0].service}</p>
                  )}
                  {checkbox2 && (
                    <p className="service-name">{step3Data[1].service}</p>
                  )}
                  {checkbox3 && (
                    <p className="service-name">{step3Data[2].service}</p>
                  )}
                </div>
                <div className="service-price-container">
                  {checkbox1 && (
                    <p className="service-price">
                      {isToggled
                        ? `+$${step3Data[0].price.yearly}/yr`
                        : `+$${step3Data[0].price.monthly}/mo`}
                    </p>
                  )}
                  {checkbox2 && (
                    <p className="service-price">
                      {isToggled
                        ? `+$${step3Data[1].price.yearly}/yr`
                        : `+$${step3Data[1].price.monthly}/mo`}
                    </p>
                  )}
                  {checkbox3 && (
                    <p className="service-price">
                      {isToggled
                        ? `+$${step3Data[2].price.yearly}/yr`
                        : `+$${step3Data[2].price.monthly}/mo`}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="total-wrapper" aria-live="polite">
              <p className="total-name">
                Total ({isToggled ? "per year" : "per month"})
              </p>
              <h4 className="total-value">
                {isToggled ? `+$${total}/yr` : `+$${total}/mo`}
              </h4>
            </div>
          </fieldset>
          <div className="field button step4">
            <button
              className="return step4"
              type="button"
              onClick={decrementStep}
            >
              Go Back
            </button>
            <button
              className="btn step4"
              type="button"
              onClick={onShow}
              aria-label="Confirm your selections"
            >
              Confirm
            </button>
          </div>
        </form>
      </motion.section>
    </AnimatePresence>
  );
}

export default Step4;
