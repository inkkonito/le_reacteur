/*
const notRepeated = (string) => {
  for (let i=0; i < string.length; i++) {
    if ((string.toLowerCase().indexOf(string[i]), string.toLowerCase().indexOf(string[i] + 1) === -1)) {
      return string[i];
    }
  }
};

// console.log(notRepeated("abcabcfgh")); // Affichera "f"
// console.log(notRepeated("tatazazaela")); // Affichera "e"
// console.log(notRepeated("Si ton tonton tond ton tonton, ton tonton sera tondu")); // Affichera "i"

// redo

const getLetterNotRepeated = (string) => {
    for (let i = 0; i < string.length; i++) {
        const currentChar = string.charAt(i);
        const restOfString = string.substring(i + 1);

        // Vérifie si le caractère courant n'apparaît pas dans le reste de la chaîne
        if (!restOfString.includes(currentChar)) {
            const previousString = string.substring(0, i);
            
            // Vérifie si le caractère courant n'apparaît pas dans la chaîne précédente
            if (!previousString.includes(currentChar)) {
                return currentChar;
            }
        }
    }
    // Si aucun caractère non répété n'est trouvé
    return null;
}

console.log(getLetterNotRepeated("aabbccddeefiiooee")); // Sortie: "f" // should return f

*/

// redo 


const letterNotRepeated = (phrase) => {
for (let i=0; i<phrase.length; i++) {
    if (phrase.indexOf(phrase[i]) === phrase.lastIndexOf(phrase[i])) {
        return phrase[i]
    }
}
return null
}
console.log(letterNotRepeated("babar")); // must return R