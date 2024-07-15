const arr = [1, 2, 3, 4, 5];

// Début de votre code

const averageArray = (arr) => {

    let sum = arr.reduce((acc, val) => acc + val)
    let average = sum / arr.length;
    return average
    
}
// Fin de votre code
console.log(averageArray(arr)); // Affiche : 3