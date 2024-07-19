const notRepeated = (str) => {
  str = str.toLowerCase();
for (let i=0; i<str.length; i++) {
  if (str.indexOf(str[i]) === str.lastIndexOf(str[i]))  {
    return str[i]
  }
}
return null
}

console.log(notRepeated("abcabcfgh")); // Affichera "f"
console.log(notRepeated("tatazazaela")); // Affichera "e"
console.log(notRepeated("Si ton tonton tond ton tonton, ton tonton sera tondu")); // Affichera "i"
