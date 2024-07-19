const rpnCalculator = (string) => {
  let stack = [];
  let tokens = string.split(" ");
  tokens.forEach((token) => {
    if (!isNaN(token)) {
      stack.push(parseFloat(token));
    } else {
      let b = stack.pop(); // extract last
      let a = stack.pop(); // extract again last

      switch (token) {
        case "+":
          stack.push(a + b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "/":
          stack.push(a / b);
          break;
        default:
          throw new Error(`Opérateur inconnu: ${token}`);
      }
    }
  });
  return stack.pop();
};

console.log(rpnCalculator("3 4 +")); // Affiche : 7
console.log(rpnCalculator("5 2 * 8 + 4 /")); // Affiche : 4.5
