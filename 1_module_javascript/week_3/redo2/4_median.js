const median = (arr) => {
    arr.sort((a, b) => a-b);
    length = arr.length;
       
}

console.log(median([1, 2, 3, 4, 5])); // Affiche : 3
console.log(median([-10, -3, 4])); // Affiche : -3
console.log(median([-10, 3, -7])); // Affiche : -7
console.log(median([9, -2, 0])); // Affiche : 0
console.log(median([2, 4])); // Affiche : 3