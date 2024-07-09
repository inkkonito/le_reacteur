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
