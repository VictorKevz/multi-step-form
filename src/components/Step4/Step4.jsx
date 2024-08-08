import React from "react";
import "../css/step4.css";

function Step4({ formData, setFormData, decrementStep }) {
  const { isToggled, subscription, checkbox1, checkbox2, checkbox3 } = formData;

  const calculateResults = () => {
    let total = 0;

    // Subscription prices
    const subscriptionPrices = {
      Arcade: { monthly: 9, yearly: 90 },
      Advanced: { monthly: 12, yearly: 120 },
      Pro: { monthly: 15, yearly: 150 },
    };

    // Add-on prices
    const addOnPrices = {
      addOn1: { monthly: 1, yearly: 10 },
      addOn2: { monthly: 2, yearly: 20 },
      addOn3: { monthly: 2, yearly: 20 },
    };

    // Calculate subscription price
    if (subscription) {
      total += isToggled
        ? subscriptionPrices[subscription].yearly
        : subscriptionPrices[subscription].monthly;
    }

    // Calculate add-ons price
    if (checkbox1) {
      total += isToggled
        ? addOnPrices.addOn1.yearly
        : addOnPrices.addOn1.monthly;
    }
    if (checkbox2) {
      total += isToggled
        ? addOnPrices.addOn2.yearly
        : addOnPrices.addOn2.monthly;
    }
    if (checkbox3) {
      total += isToggled
        ? addOnPrices.addOn3.yearly
        : addOnPrices.addOn3.monthly;
    }

    return total;
  };

  const total = calculateResults();

  const handleSubmit = () => {
    // Handle final form submission
    // I will show the Modal
    alert("Submitted!");
  };

  return (
    <section className="step4 wrapper">
      <header className={`step4 step-header-container`}>
        <h2 className="step4 title">Review and Confirm</h2>
        <p className="step4 parag">
          Review your selected options before confirming.
        </p>
      </header>
      <article className="summary-wrapper">
        <div className="summary">
          <div className="sub-price-wrapper">
            <div className="sub-change-wrapper">
              <p>
                {subscription} ({isToggled ? "Yearly" : "Monthly"})
              </p>
              <button className="change-btn">Change</button>

            </div>
            {subscription === "Arcade" && (
              <p>{isToggled ? "$90/yr" : "$9/mo"}</p>
            )}
            {subscription === "Advanced" && (
              <p>{isToggled ? "$120/yr" : "$12/mo"}</p>
            )}
            {subscription === "Pro" && (
              <p>{isToggled ? "$150/yr" : "$15/mo"}</p>
            )}
          </div>
          <div className="ads-on-wrapper">
            <div className="service-option">
              {checkbox1 && <p>Online Service</p>}
              {checkbox2 && <p>Larger Storage</p>}
              {checkbox3 && <p>Customizable Profile</p>}
            </div>
            <div className="service-price">
              {checkbox1 && <p>{isToggled ? "+$10/yr" : "+$1/mo"}</p>}
              {checkbox2 && <p>{isToggled ? "+$20/yr" : "+$2/mo"}</p>}
              {checkbox3 && <p>{isToggled ? "+$20/yr" : "+$2/mo"}</p>}
            </div>
          </div>
        </div>
        <div className="total-wrapper">
          <p className="total-cost">Total ({isToggled ? "per year" : "per month"})</p>
          <h4>{isToggled ? `+$${total}/yr` : `+$${total}/mo`}</h4>
        </div>
        <div className="field button">
          <button
            className="return step4"
            type="button"
            onClick={decrementStep}
          >
            Go Back
          </button>
          <button className="btn step4" type="button" onClick={handleSubmit}>
            Confirm
          </button>
        </div>
      </article>
    </section>
  );
}

export default Step4;
