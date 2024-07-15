const arr = [1, 2, 3];

// Début de votre code

const removeElement = (arr, elem) => {
    arr.splice(elem, 1)
    return arr
}
// Fin de votre code

console.log(removeElement(arr, 1)); // Affiche : [1, 3]