const limit2 = 10;
somme = 0;
let iteration = 0
for (let i = 0; i <= limit2; i++) {
    if (i%2 === 0) {
        iteration++;
        console.log("Itération paire numéro : " + iteration);
        console.log("Valeur de i : " + i);
        somme+=i;
        console.log("Nouvelle somme est : " + somme);
    }
}
console.log(somme);

console.log("Demo")
let maxN = 20;

for(let i = 1; i <= 20; i++) {
    if (i%2 !== 0) {
         console.log(i);
    }
}