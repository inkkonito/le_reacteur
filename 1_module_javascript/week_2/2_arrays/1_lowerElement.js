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
