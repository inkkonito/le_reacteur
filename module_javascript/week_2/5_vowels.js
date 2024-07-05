let str = "My name is Doe. John Doe.";
let counter = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === "y") {
    counter++;
  }
}

console.log(counter);

// second method using an array
let vowels = ["a", "e", "i", "o", "u", "y"];
let count = 0;
for (let i = 0; i < str.length; i++) {
    
  if (vowels.indexOf(str[i]) !== -1) {
    console.log("Letter is : " + str[i]);
    count++;
    console.log("Count is now : " + count)
  } else {
    console.log(str[i] + " : is not a vowel");
  }
}
console.log(count);
