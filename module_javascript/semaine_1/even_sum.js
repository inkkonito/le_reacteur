let somme = 0;
let n = 10;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            somme += i;
        }
    }
    console.log(somme);