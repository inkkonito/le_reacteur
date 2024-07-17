const median = (arr) => {
    const sortedArr = arr.sort((a,b) => a-b);
    if (sortedArr.length %2 === 1) {
        return sortedArr[Math.floor(sortedArr.length / 2)]
    } else {
        const lowMedian = sortedArr[Math.floor((sortedArr.length - 1) / 2)];
        const highMedian = sortedArr[Math.ceil((sortedArr.length - 1) / 2)];
        return (lowMedian + highMedian) / 2
    }

}

console.log(median([1, 2, 3, 4, 5])); // Affiche : 3
console.log(median([-10, -3, 4])); // Affiche : -3
console.log(median([-10, 3, -7])); // Affiche : -7
console.log(median([9, -2, 0])); // Affiche : 0
console.log(median([2, 4])); // Affiche : 3