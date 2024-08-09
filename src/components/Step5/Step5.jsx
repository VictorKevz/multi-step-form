import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { step5 } from "../../Variants";
import iconThankYou from "../../assets/images/icon-thank-you.svg";
import "../css/step5.css";


function Step5({ onClose }) {
  return (
    <AnimatePresence mode="wait">
    <motion.div 
    className={`step5 wrapper`}
    variants={step5}
        initial="hidden"
        animate="visible"
    >
      <div className={`step5-container`}>
        <img src={iconThankYou} alt="Icon Thank You" className="thanks-icon" />
        <h2 className={`step5 title`}>Thank You!</h2>
        <p className={`step5 parag`}>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>

        <button className="step5 btn" onClick={onClose}>
          Continue
        </button>
      </div>
    </motion.div>
    </AnimatePresence>
  );
}

export default Step5;
