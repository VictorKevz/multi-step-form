import React, { useState } from "react";
import { motion } from "framer-motion";
import { entryRegistration } from "../../Variants";
import { regData } from "./regData";
import "../css/registration.css";
import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";
import Step3 from "../Step3/Step3";
import Step4 from "../Step4/Step4";
import Step5 from "../Step5/Step5";

function Registration() {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subscription: "Arcade",
    isToggled: false,
    checkbox1: true,
    checkbox2: true,
    checkbox3: false,
  });

  // Step 5 state
  const [isConfirm, setConfirm] = useState(false);

  const incrementStep = () => {
    setActiveStep((prevStep) => (prevStep === 5 ? 5 : prevStep + 1));
  };

  const decrementStep = () => {
    setActiveStep((prevStep) => (prevStep === 1 ? 1 : prevStep - 1));
  };
  // Change subscription by changing the step
  const changeStep = () => {
    setActiveStep(2);
  };
  // Show step 5 if step 4 is valid
  const showStep5 = () => {
    setConfirm(true);
    // We need to icrement the step to 5
    setActiveStep((prevStep) => (prevStep === 5 ? 5 : prevStep + 1));
  };
  // Close Step 5 and reset state to step 1
  const closeStep5 = () => {
    setConfirm(false);
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      subscription: "Arcade",
      isToggled: false,
      checkbox1: true,
      checkbox2: true,
      checkbox3: false,
    });
    setActiveStep(1);
  };

  return (
    <motion.div
      className="reg-wrapper"
      // variants={entryRegistration}
      initial="hidden"
      animate="visible"
    >
      <div className={`reg-container`}>
        <aside className="header-container">
          <div className="steps-container">
            {regData.map((step) => (
              <div key={step.id} className="step-item">
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
              </div>
            ))}
          </div>
        </aside>
        <div className="steps-wrapper">
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
              changeStep={changeStep}
              onShow={showStep5}
            />
          )}
          {activeStep === 5 && isConfirm && <Step5 onClose={closeStep5} />}
        </div>
      </div>
    </motion.div>
  );
}

export default Registration;
