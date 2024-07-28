// const getObjectKeys = (obj) => {
// return Object.keys(obj);
// }

// console.log(getObjectKeys({name: "John", age: 32}));

let freddie = {
    name: "freddie",
    age: 5,
    race: "european",
    color: "tabby"
}

const getKeys = (obj) => {
    return Object.keys(obj)
}

console.log(getKeys(freddie));