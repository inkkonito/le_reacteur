const firstStep = () => {
    console.log("Étape 1");
    secondStep(); // Une fonction peut en appeler une autre !
  };
  
  const secondStep = () => {
    console.log("Étape 2");
  };

  firstStep();

  
  const stepOne = () => {
    console.log("First step called");
    stepSecond();
  }

  const stepSecond = () => {
    console.log("Second step triggered")
  }
  
  stepOne();