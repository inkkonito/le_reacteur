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