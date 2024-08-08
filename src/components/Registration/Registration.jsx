import React, { useState } from "react";
import { regData } from "./regData";
import "../css/registration.css";
import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";
import Step3 from "../Step3/Step3";
import Step4 from "../Step4/Step4";

function Registration() {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subscription: "Arcade",
    isToggled: false,
    checkbox1:true,
    checkbox2:true,
    checkbox3:false
  });

  const incrementStep = () => {
    setActiveStep((prevStep) => (prevStep === 4 ? 4 : prevStep + 1));
  };

  const decrementStep = () => {
    setActiveStep((prevStep) => (prevStep === 1 ? 1 : prevStep - 1));
  };

  return (
    <div className="reg-wrapper">
      <div className={`reg-container`}>
        <aside className="header-container">
          <div className="steps-container">
            {regData.map((step) => (
              <ul key={step.id} className="step-item">
                <li
                  className={`step-num ${
                    activeStep === step.id ? "active-step" : ""
                  }`}
                >
                  {step.id}
                </li>
                <article className="step-info">
                  <p className={`step`}>{`Step ${step.id}`}</p>
                  <p className="step-title">{step.title}</p>
                </article>
              </ul>
            ))}
          </div>
        </aside>
        {activeStep === 1 && (
          <Step1
            incrementStep={incrementStep}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {activeStep === 2 && (
          <Step2
            incrementStep={incrementStep}
            decrementStep={decrementStep}
            formData={formData}
            setFormData={setFormData}
          />
        )}
         {activeStep === 3 && (
          <Step3
            incrementStep={incrementStep}
            decrementStep={decrementStep}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {activeStep === 4 && (
          <Step4
            decrementStep={decrementStep}
            formData={formData}
            setFormData={setFormData}
          />
        )}
      </div>
    </div>
  );
}

export default Registration;