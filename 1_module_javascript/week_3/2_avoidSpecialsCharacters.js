/* const removeSpecialCharacters = (str) => {
    console.log(str + " is initial string")
    let regEx = new RegExp("^[a-z0-9]$", "i") 
    let newString = "";
    for (let i=0; i<str.length; i++) {
        if(regEx.test(str[i])) {
            newString += str[i];
        } else {
            console.log(str[i] + " is not valid")
        }
    }
    return newString + " is trimmed from special characters";
}

/* let result = removeSpecialCharacters("test@");
console.log(result); */

// redo

/*
const onlyAlphaNumerical = (str) => {
    let newString = ""
    let reg = /[a-z0-9]/i
    for (let i=0; i<str.length; i++) {
    if (reg.test(str[i])) {
        newString+= str[i]
    }
}
    return newString
}   

console.log(onlyAlphaNumerical("blabla"));
console.log(onlyAlphaNumerical("!no"));
*/

const testAlphaNumerical = (str) => {
    let newString = "";
    let i=0;
    while(i<str.length) {
        let code = str.charCodeAt(i);
       //  console.log("Character is " + str[i] + ", Code is " + code)
        if (
            (code >= 48 && code <= 57) ||  // chiffres 0-9
            (code >= 65 && code <= 90) ||  // lettres majuscules A-Z
            (code == 32) ||
            (code >= 97 && code <= 122)    // lettres minuscules a-z
        ) {
            newString+= str[i]
            console.log(newString)
        } else {
            console.log("Not adding " + str[i])
        }
        i++
    }
return newString
}

console.log(testAlphaNumerical("I lov€ B!arritz"));