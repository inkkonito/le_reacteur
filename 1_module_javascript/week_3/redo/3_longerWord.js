const longerWord = (string) => {

    let newString = string.split(" ");
    let longestWord = newString[0];
    for (let i=1; i<newString.length; i++) {
        if(newString[i].length > longestWord.length) {
            longestWord = newString[i];
        }
    }
    return longestWord;
  }
  
  console.log(longerWord("Le Reacteur est une formation incroyable")); // doit afficher `incroyable`
  console.log(longerWord("Hello world")); // doit afficher `Hello`