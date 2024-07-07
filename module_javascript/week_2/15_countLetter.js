const str = "Hello World"; // string to evaluate
let count = 0;  // count start at 0
const countLetter = (sentence, letter) => { // create a function with two parameters
    for(let i =0; i < sentence.length; i++) { // start a loop based on param 1 length
        if(sentence[i] === letter) { // if each letter = param2
            count++ // increment count
        }
    }
    return count; // return count value
}

console.log(countLetter(str, "l")); // should display 3
