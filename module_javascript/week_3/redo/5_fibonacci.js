const generateFibonacciSequence = (num) => {
    let arr = [0];
    let i = 1;
    while (i <= num) {
        arr.push(i);
        i = i + arr[arr.length -2]; 
    }
    return arr;
}
  
  console.log(generateFibonacciSequence(10)); // Résultat attendu : [0, 1, 1, 2, 3, 5, 8]
  console.log(generateFibonacciSequence(100)); // Résultat attendu : [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]