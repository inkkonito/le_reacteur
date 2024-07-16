const notRepeated = (str) => {
for (let i=0; i<str.length; i++) {
  if(str.indexOf(str[i], str.indexOf(str[i]+1)) === -1) {
    return str[i]
  }
}
}

console.log(notRepeated("abcabcfgh")); // Affichera "f"
console.log(notRepeated("tatazazaela")); // Affichera "e"
console.log(notRepeated("Si ton tonton tond ton tonton, ton tonton sera tondu")); // Affichera "i"
