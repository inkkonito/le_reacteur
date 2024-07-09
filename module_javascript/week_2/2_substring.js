let string = "Je suis étudiant en informatique"; // string init

console.log("First letter is " + string.charAt(8)); // get first letter "é" => position is 8 in the string
console.log("First letter is " + string[8]); // equals previous line

let wordLength = "étudiant".length; // get word length and store it
console.log("Word length is " + wordLength);
let letterE = string.indexOf("é") // store 8 ("é" index) in a variable
let letterT = letterE + wordLength; // add 8 for init position "é" to last letter T (16 in the index)

let substring = string.substring(letterE, letterT);
console.log("Extract word with index 8 and index 16 gives : " + substring);

let newString = "I am a student in information technology"; // extract information technology
let subText = newString.slice(18, newString.length); //
console.log(subText);

newString = "I love Biarritz";
if(newString.includes("Biarritz")) {
    let biarritzLength = "biarritz".length
    console.log(newString.slice(7, 7+biarritzLength))
}

// substring function

const extractWord = (sentence, word) => {
    if(sentence.includes(word)) {
        return word;
    }
}
console.log(extractWord("I must code everyday", "everyday"));