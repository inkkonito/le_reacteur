const number = 13;
let isPrime = true;

for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime === true) {
    console.log("Le nombre " + number + " est premier.");
} else {
    console.log("Le nombre " + number + " n'est pas premier");
}