const removeSpecialCharacters = (str) => {
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

const testAlphaNumerical = (str) => {

}