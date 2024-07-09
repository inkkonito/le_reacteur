const notRepeated = (string) => {
  for (let i=0; i < string.length; i++) {
    if ((string.toLowerCase().indexOf(string[i]), string.toLowerCase().indexOf(string[i] + 1) === -1)) {
      return string[i];
    }
  }
};

console.log(notRepeated("abcabcfgh")); // Affichera "f"
console.log(notRepeated("tatazazaela")); // Affichera "e"
console.log(notRepeated("Si ton tonton tond ton tonton, ton tonton sera tondu")); // Affichera "i"

// redo



console.log(getLetterNotRepeated("aabbccddeef")) // should return f