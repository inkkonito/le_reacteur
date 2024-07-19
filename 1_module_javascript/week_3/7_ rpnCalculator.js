const rpnCalculator = (string) => {
  let stack = [];
  let tokens = string.split(" ");
  tokens.forEach((elem) => {
    if (!isNaN(elem)) {
      elem.push(stack);
    } else {
      let b = stack.pop();
      let a = stack.pop();

      switch (elem) {
        case "+":
          a + b;
          break;
      }
    }
    return stack.pop();
  });
};

console.log(rpnCalculator("3 4 +"));
