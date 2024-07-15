/*
  Description :
  Creates a slice of array with n elements dropped from the beginning.

  Arguments :
  1) The array to query.
  2) The number of elements to drop.

  Returns :
  The slice of array.
*/

// Début de votre code

const drop = (arr, length) =>  {
    let newArr = arr.slice(length)
    return newArr
}
// Fin de votre code

console.log(drop([1, 2, 3], 2)); // Doit afficher `[3]`
console.log(drop([1, 2, 3], 5)); // Doit afficher `[]`
console.log(drop([1, 2, 3], 0)); // Doit afficher `[1, 2, 3]`