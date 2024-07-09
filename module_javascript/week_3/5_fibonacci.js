const generateFibonacciSequence = (num) => {
    if(num <0 || num > 100)
        console.log("Number should be between 0 and 100")
    let result = [0];
    let i = 1;
    while (i < num) {
    result.push(i);
    i = i + result[result.length -2];   
    console.log("New value of i is " + i)
    console.log(result)
}
    return result;
}
console.log(generateFibonacciSequence(10));