const median = (arr) => {
    arr.sort(function(a, b) {
        return a - b;
    })
    console.log(arr.length + " array length")
    let total = arr.length;
    let medianIndex = Math.floor((total +1) / 2 - 1);
    if (total%2 === 0) {
        return (arr[medianIndex] + arr[medianIndex +1]) /2
    }
    return arr[medianIndex];
}

console.log(median([1, 2, 3, 4, 5])); // should return 3
console.log(median([-10, -3, 4])); // should return : -3
console.log(median([-10, 3, -7])); // should return : -7
console.log(median([9, -2, 0])); // should return : 0
console.log(median([2, 4])); // should return : 3

// redo

const getMediane = (numbers) => {
    const numbersSorted = numbers.slice().sort((a, b) => a - b); // Créer une copie triée du tableau
    const sum = numbersSorted.length;
    const rank = (sum + 1) / 2;
    let mediane;

    if (Number.isInteger(rank)) {
        mediane = numbersSorted[rank - 1];
    } else {
        const lowerIndex = Math.floor(rank) - 1;
        mediane = (numbersSorted[lowerIndex] + numbersSorted[lowerIndex + 1]) / 2;
    }

    return mediane;
}

console.log(getMediane([1, 9, 12, 7, 3]));  // Sortie attendue : 7
console.log(getMediane([1, 9, 17, 32]));   // Sortie attendue : 13