const invert = (obj) => {
    const newObj = {}
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    for (let i=0; i<values.length; i++) {
        newObj[values[i]] = keys[i];
    }
    return newObj
}

console.log(invert({ name: "John", age: 32}))