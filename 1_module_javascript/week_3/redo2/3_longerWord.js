const longerWord = (string) => {
  let wordsSplitted = string.split(" ");
  let longestWord = "";
  for (let i = 0; i < wordsSplitted.length; i++) {
    if (wordsSplitted[i].length > longestWord.length) {
      longestWord = wordsSplitted[i];
    }
  }
  return longestWord
};
console.log(longerWord("Le Reacteur est une formation incroyable")); // doit afficher `incroyable`
console.log(longerWord("Hello world")); // doit afficher `Hello`
