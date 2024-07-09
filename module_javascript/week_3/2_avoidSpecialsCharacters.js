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
let result = removeSpecialCharacters("test@");
console.log(result);