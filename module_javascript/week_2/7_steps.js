const firstStep = () => {
    console.log("Étape 1");
    secondStep(); // Une fonction peut en appeler une autre !
  };
  
  const secondStep = () => {
    console.log("Étape 2");
  };

  firstStep();