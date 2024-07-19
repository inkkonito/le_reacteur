let str = "Bonjour à tous"; // init string
let newString = str.replace("à tous", "à vous") // store replacement in a variable
console.log(newString); 

let string = "Hello to everyone";
let stringModified = string.replace("everyone", "nobody");
console.log(stringModified);

console.log(string.replace("Hello", "Goodbye"));

// function replace

const replaceText = (sentence, word, newWord) => {
    return sentence.replace(word, newWord)
}

console.log(replaceText("Coding two hours a day is important", "important", "mandatory"));

let txt = "House of the Dragons";
txt.replace("Dragons", "Wolves");
console.log(txt)