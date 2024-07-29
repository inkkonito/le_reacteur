const person = {
  firstName: "John",
  lastName: "Doe",
  age: 32,
};

console.log(person);

const freddie = {
  "firstName": "freddie",
  "age": 39,
  "color": "tabby"
}
console.log(freddie);

console.log(typeof freddie);
let freddieJSON = JSON.stringify(freddie);
console.log(typeof freddieJSON);
console.log(freddieJSON);