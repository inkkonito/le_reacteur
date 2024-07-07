const caughtACold = (string) => {
  let newString = "";
  // replace letter m, p and v with b
  for (let i = 0; i < string.length; i++) {
    // iterate over all string
    if (string[i] === "m" || string[i] === "p" || string[i] === "v") {
      if (string[i].toUpperCase() === string[i]) {
        newString += "B";
      } else {
        newString += "b";
      }
    } else if (string[i] === "c")
      if (string[i].toUpperCase() === string[i]) {
        // replace c with g {
        newString += "C";
      } else {
        newString += "c";
      }
    else if (string[i] === "t") {
      if (string[i].toUpperCase() === string[i]) {
        newString += "D";
      } else {
        newString += "d";
      }
    } else {
      newString += string[i];
    }
  }
  return newString;
};

console.log(caughtACold("Je crois que j'ai attrapé froid"));
console.log(caughtACold("Je veux devenir développeur"));
