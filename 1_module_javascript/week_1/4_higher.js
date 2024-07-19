const a = 5;
const b = 9;
const c = 2;

if (a > b && a > c) {
    console.log(a)
} else if (b > a && b > c) {
    console.log(b)
} else {
    console.log(c);
}

// calculate which number is higher between a(5) b(9) and c(2)

let numberA = 11;
let numberB = 9;
let numberC = 4;

if (numberA > numberB && numberA > numberC) {
    console.log(numberA + " is the higher number");
} else if (numberB > numberA && numberB > numberC) {
    console.log(numberB + " is the higher number");
} else {
    console.log(numberC + " is the higher number");
}

let e = 1;
let f = 3;
let g = 0;

if (e > f && e > g) {
    console.log("E est le plus grand");
} else if (f > e && f > g) {
    console.log("F est le plus grand");
} else {
    console.log("G est le plus grand");
}

// practicing even more

let num1 = 18;
let num2 = 250
let num3 = 30
let num4 = 29;

const highestNumber = (numOne, numTwo, numThree, numFour) => {
if (numOne > numTwo && numOne > numThree && numOne > numFour) {
    console.log(numOne + " is the highest number compare to " + numTwo + " " + numThree + " " + numFour)
} else if (numTwo > numOne && numTwo > numThree && numTwo > numFour) {
    console.log(numTwo + " is the highest number compare to " + numOne + " " + numThree + " " + numFour)
} else if (numThree > numOne && numThree > numTwo && numThree > numFour) {
    console.log(numThree + " is the highest number compare to " + numOne + " " + numTwo + " " + numFour)
} else {
   console.log(numFour + " is the highest number compare to " + numOne + " " + numTwo + " " + numThree)
}
}
highestNumber(num1, num2, num3, num4)
