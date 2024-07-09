let string = "hugo";
console.log(string.toUpperCase()); // applying the method on initial variable

let stringUppercase = string.toUpperCase(); // declaring a new variable and assigning the result of previous variable content + applied method
console.log(stringUppercase); // logging new variable

let string2 = "I love Biarritz";
string2 = string2.toUpperCase();
console.log(string2);


const toUppercase = (text) => { 
    return text.toUpperCase();
}
console.log(toUppercase("welcome"));