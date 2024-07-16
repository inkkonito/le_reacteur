const removeSpecialCharacters = (str) => {
    let newStr = "";
    let regex = /[a-zA-Z0-9]/;
        for (let i=0; i<str.length; i++) {
        if(regex.test(str[i])) {
            newStr+=str[i];
        } else if (str[i] === ' ') {
            newStr += str[i]; // Conserver les espaces
          }
    }
    return newStr
  }
  
  // Tests
  console.log(removeSpecialCharacters('Hello, World!')); // Résultat attendu : "Hello World"
  console.log(removeSpecialCharacters('123abc!@#')); // Résultat attendu : "123abc"
  console.log(removeSpecialCharacters('Testing 1, 2, 3')); // Résultat attendu : "Testing 1 2 3"