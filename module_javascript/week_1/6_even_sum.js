let somme = 0;
let n = 10;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            somme += i;
        }
    }
    console.log(somme);

// calculate the sum from pairs numbers from 0 to 10

let max = 10;
let sum = 0;
for (let i = 1; i <= max; i++) {
    if (i%2 === 0) {
        console.log("Sum equals " + sum + " and next pair number equal " + i + " so : " + sum + "+" + i);
        sum += i;
    }
}
console.log(sum);

console.log("Demo");

let maxN = 10;
let total = 0;
for (let i = 1; i <= 10; i++) {
if (i%2 === 0) {
    total+=i;
}
}
console.log("Le total est de : " + total);

const sumPairs = (min, max) => {
    let sum = 0;
    for (min; min <max; min++) {
        if (min%2 === 0) {
            console.log("Init Sum is " + sum);
            console.log("Next even number is " + min)
            sum += min;
            console.log("New sum is " + sum )
        }
    }
    return sum
}

const result = console.log("Final sum is " + sumPairs(20, 30));