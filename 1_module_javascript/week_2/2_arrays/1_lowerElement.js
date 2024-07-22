/*
let myArray = [1, 9, 18, 4, 7];

const lowerElement = (arr) => {
  let highestNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < highestNum) {
      highestNum = arr[i];
    }
  }
  return highestNum;
};

console.log(lowerElement(myArray));

*/

let myArray = [2, 18, 13, 4, 3];

console.log(myArray.every((elem) => elem > 0)); // all number are positive

console.log(
  myArray.reduce((accu, value, index) => {
    console.log(`${index} Accu value is ${accu} and nextValue is ${value}`);
    return accu + value;
  })
);
