/* const generateFibonacciSequence = (num) => {
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

// redo

const getSumFromNumber = (num) => {
    let arr = [0, 1]
    let i = 2;
    while (true) {
        let nextFib = arr[i - 1] + arr[i - 2]; // Calculer le prochain nombre de Fibonacci
        if (nextFib > num) break; // Sortir de la boucle si le prochain nombre dépasse num
        arr.push(nextFib); // Ajouter le prochain nombre à la séquence
        i++;
    }
    return arr;
}

console.log(getSumFromNumber(30));

*/

const getFibo = (num) => {
    let list = [0,1]
    for(let i=2; i<num; i++) {
        list.push(list[i - 1] + list[i - 2]);
    }
    return list;
}
console.log(getFibo(25));