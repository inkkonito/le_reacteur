const calculator = (num1, operator, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number" || typeof operator !== "string") {
    return "ERROR";
  }
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    console.log("ERROR");
  }
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "%":
      return num1 % num2;
  }
};

console.log(calculator(4, "+", 2));

const calc = (num1, operator, num2) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    case "*":
      return num1 * num2;
    case "%":
      return num1 % num2;
  }
};

console.log(calculator(3, "-", 2)); // return 1