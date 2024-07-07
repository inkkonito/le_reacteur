const division = (numberOne, numberTwo) => {
  if (numberTwo === 0) {
    console.log("Impossible de diviser par zéro");
    return null;
  } else {
    return numberOne / numberTwo;
  }
};

console.log(division(10, 5));
console.log(division(10, 0));
