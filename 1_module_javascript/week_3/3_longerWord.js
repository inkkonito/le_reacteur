const longerWord = (sentence) => {
    let arr = sentence.split(" ");
    let longestWords = [];
    let maxLength = 0;
    console.log(arr);
    for (let i=0; i<arr.length; i++) {
        if(arr[i].length > maxLength) {
            maxLength = arr[i].length
            longestWords = [arr[i]];
        } else if(arr[i].length === maxLength)
            {
            longestWords.push(arr[i])
            }
    }
    return longestWords.join(' ');
}

console.log(longerWord("Le Reacteur est une formation incroyable")); // doit afficher `incroyable`
console.log(longerWord("Hello world")); // doit afficher `Hello World` 
console.log(longerWord("Apprendre le JS est la meilleure formation possible")); // doit afficher `Apprendre meilleure formation`

// redo

const getLongerWord = (sentence) => {
    let arr = sentence.split(" ");
    console.log(arr);
    let longestLength = 0
    let longestWord 
    for(let i=0; i<arr.length; i++) {
        if (arr[i].length > longestLength) {
            longestLength = arr[i].length
            longestWord = arr[i];
        }
    }
    return longestWord
}

console.log(getLongerWord("The Count of Monte Cristo"));