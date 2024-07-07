let email = "nono@lereacteur.io";
let valid = false;

// an email must contain @ and .
// a . must be after an @

console.log(email.indexOf("_")); // return -1 because can't find _ in string
console.log(email.indexOf("@")); // return 4
console.log(email.indexOf(".")); // return 15

if(email.indexOf("@") !== -1 && email.indexOf(".") !== -1) // verify if both @ . exists 
    if (email.indexOf("."), email.indexOf("@") !== -1) { // verify is . is after first @
    valid = true; // if yes set to true
}

// valid?

console.log(valid);

// using a function

const verifEmail = (email) => {
    if (email.indexOf("@") !== -1 && email.indexOf(".") !== -1) {
    const atIndex = email.indexOf("@");
    const dotIndex = email.indexOf(".");
    if (dotIndex > atIndex) {
        console.log(email  + " Email is valid")
    } else {
        console.log(email + " Not found a . after a @")
    }
} else {
    console.log(email + " String does not contain @ and .")
}
}

verifEmail("jon@datadome.co");
verifEmail("jondatadome.co");
verifEmail("jon.datadome@co");