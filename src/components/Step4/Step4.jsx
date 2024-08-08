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
      total += isToggled ? addOnPrices.addOn1.yearly : addOnPrices.addOn1.monthly;
    }
    if (checkbox2) {
      total += isToggled ? addOnPrices.addOn2.yearly : addOnPrices.addOn2.monthly;
    }
    if (checkbox3) {
      total += isToggled ? addOnPrices.addOn3.yearly : addOnPrices.addOn3.monthly;
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
        <p className="step4 parag">Review your selected options before confirming.</p>
      </header>
      <article className="step4-details-wrapper">
        <div className="summary">
          <h3>Subscription:</h3>
          <p>{subscription} ({isToggled ? "Yearly" : "Monthly"})</p>
          <h3>Add-ons:</h3>
          {checkbox1 && <p>Add-on 1: {isToggled ? "+$50/yr" : "+$5/mo"}</p>}
          {checkbox2 && <p>Add-on 2: {isToggled ? "+$100/yr" : "+$10/mo"}</p>}
          {checkbox3 && <p>Add-on 3: {isToggled ? "+$150/yr" : "+$15/mo"}</p>}
          <h3>Total:</h3>
          <p>{isToggled ? `+$${total}/yr` : `+$${total}/mo`}</p>
        </div>
        <div className="field button">
          <button className="return step4" type="button" onClick={decrementStep}>
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