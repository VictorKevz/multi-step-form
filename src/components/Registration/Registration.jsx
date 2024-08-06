import React, { useState } from "react";
import { regData } from "./regData";
import "../css/registration.css";
import Step1 from "../Step1/Step1";
function Registration() {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <div className="reg-wrapper">
      <div className={`reg-container`}>
        <aside className="header-container">
          <div className="steps-container">
            {regData.map((step) => {
              return (
                <ul key={step.id} className="step-item">
                  <li
                    className={`step-num ${
                      activeStep === step.id && "active-step"
                    }`}
                  >
                    {step.id}
                  </li>
                  <article className="step-info">
                    <p className={`step`}>{`Step ${step.id}`}</p>
                    <p className="step-title">{step.title}</p>
                  </article>
                </ul>
              );
            })}
          </div>
        </aside>
        <Step1/>
      </div>
    </div>
  );
}

export default Registration;
