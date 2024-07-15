// Début de votre code

const range = (num, array) => {
        const range = array.sort((a,b) => a-b)
       // console.log(range);
    if (num > range[0] && num < range[1]) {
        return true
    } else {
        return false
    }
}
// Fin de votre code

console.log(range(3, [2, 7])); // Affiche : true
console.log(range(1, [3, 9])); // Affiche : false
console.log(range(7, [11, 6])); // Affiche : true