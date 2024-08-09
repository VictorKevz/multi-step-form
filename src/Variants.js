export const entryRegistration = 
  {
    hidden: {
      opacity: 0.7,
      scale:0.5,
      y: "70%",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale:1,
      transition: {
        type: "tween",
        ease:"easeIn",
        duration: 1,
        delay: 0.2,
        
      },
    },
  }

  export const nextStep = 
  {
    hidden: {
      opacity: 0,
      scale:0.2,
      x: "10%",
      rotate:"45deg",
      delay:0.2
    },
    visible: {
      opacity: 1,
      x: 0,
      scale:1,
      rotate:0,
      transition: {
        type: "tween",
        ease:"easeIn",
        duration: 0.8,
        
        
      },
    },
  }
  export const step5 = 
  {
    hidden: {
      opacity: 0.4,
      x:"-50%",
      scale:0.1,
      rotate:"180deg",
    },
    visible: {
      opacity: 1,
      x: 0,
      scale:1,
      rotate:0,
      transition: {
        type: "tween",
        ease:"easeInOut",
        duration: 1.2,
        
        
      },
    },
  }

