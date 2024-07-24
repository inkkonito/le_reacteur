const removeSpecialCharacters = (str) => {
    let newStr = "";
    let regex = /[a-z0-9\s]/i;
    for (let i=0; i<str.length; i++) {
    if (regex.test(str[i])) {
        newStr+= str[i];
    }
    }
    return newStr
  }
  
  // Tests
  console.log(removeSpecialCharacters('Hello, World!')); // Résultat attendu : "Hello World"
  console.log(removeSpecialCharacters('123abc!@#')); // Résultat attendu : "123abc"
  console.log(removeSpecialCharacters('Testing 1, 2, 3')); // Résultat attendu : "Testing 1 2 3"