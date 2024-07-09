const number = 13;
let isPrime = true;

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime === true) {
  console.log("Le nombre " + number + " est premier.");
} else {
  console.log("Le nombre " + number + " n'est pas premier");
}

// calculate if a number is prime (can only be divided by himself)

let primeNumber = 13; // number to check
let isNumberPrime = true; // set a true value

for (let i = 2; i < primeNumber; i++) {
  // create a loop to check all numbers from 2 to 13
  if (primeNumber % i === 0) {
    // if 13%1,2,3,4,5,6,7,8,9,10,11,12,13 output is 0
    isNumberPrime = false; // set value to false
    break; // stop the loop
  }
}
if (isNumberPrime === true) {
  console.log(primeNumber + " is a prime number");
} else {
  console.log(primeNumber + " is not a prime number");
}

let numberTest = 18;
let estPremier = true;

for (let i = 2; i <= numberTest; i++) {
  if (numberTest % i === 0) {
    estPremier = false;
    break;
  }
}
if (estPremier === true) {
  console.log(numberTest + " est premier");
} else {
  console.log(numberTest + " n'est pas premier");
}

// evalute is a number is prime

const testPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    } 
  }
  return true
};

console.log(testPrime(11));
