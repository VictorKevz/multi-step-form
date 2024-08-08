import React, { useState } from "react";
import "../css/step4.css";
import { step2Data } from "../Step2/step2Data";
import { step3Data } from "../Step3/step3Data";

function Step4({ formData, onShow, decrementStep,changeStep }) {
  // Acess data chosen by the user
  const { isToggled, subscription, checkbox1, checkbox2, checkbox3 } = formData;

  // Find the selected subscription data
  const selectedSubscription = step2Data.find(
    (sub) => sub.title === subscription
  );

  // Modal State
  const calculateResults = () => {
    let total = 0;

    // Add subscription price to the total
    if (selectedSubscription) {
      total += isToggled
        ? selectedSubscription.price.yearly.yearlyPrice
        : selectedSubscription.price.monthly.monthlyPrice;
    }

    // Add add-ons prices to total
    step3Data.forEach((addOn) => {
      if (formData[addOn.name]) {
        total += isToggled ? addOn.price.yearly : addOn.price.monthly;
      }
    });

    return total;
  };

  const total = calculateResults();

  

  return (
    <section className="step4 wrapper">
      <header className={`step4 step-header-container`}>
        <h2 className="step4 title">Finishing up</h2>
        <p className="step4 parag">
          Double-check everything looks OK before confirming.
        </p>
      </header>
      <article className="summary-wrapper">
        <div className="summary">
          <div className="sub-price-wrapper">
            <div className="sub-change-wrapper">
              <p className="sub-name">
                {subscription} ({isToggled ? "Yearly" : "Monthly"})
              </p>
              <button className="change-btn" onClick={changeStep}>Change</button>
            </div>

            <p className="sub-price">
              {isToggled
                ? `+$${selectedSubscription.price.yearly.yearlyPrice}/yr`
                : `+$${selectedSubscription.price.monthly.monthlyPrice}/mo`}
            </p>
          </div>
          <div className="adds-on-wrapper">
            <div className="service-name">
              {checkbox1 && <p>{step3Data[0].service}</p>}
              {checkbox2 && <p>{step3Data[1].service}</p>}
              {checkbox3 && <p>{step3Data[2].service}</p>}
            </div>
            <div className="service-price">
              {checkbox1 && (
                <p>
                  {isToggled
                    ? `+$${step3Data[0].price.yearly}/yr`
                    : `+$${step3Data[0].price.monthly}/mo`}
                </p>
              )}
              {checkbox2 && (
                <p>
                  {isToggled
                    ? `+$${step3Data[1].price.yearly}/yr`
                    : `+$${step3Data[1].price.monthly}/mo`}
                </p>
              )}
              {checkbox3 && (
                <p>
                  {isToggled
                    ? `+$${step3Data[2].price.yearly}/yr`
                    : `+$${step3Data[2].price.monthly}/mo`}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="total-wrapper">
          <p className="total-name">
            Total ({isToggled ? "per year" : "per month"})
          </p>
          <h4 className="total-value">{isToggled ? `+$${total}/yr` : `+$${total}/mo`}</h4>
        </div>
        <div className="field button">
          <button
            className="return step4"
            type="button"
            onClick={decrementStep}
          >
            Go Back
          </button>
          <button className="btn step4" type="button" onClick={onShow}>
            Confirm
          </button>
        </div>
      </article>
    </section>
  );
}

export default Step4;
