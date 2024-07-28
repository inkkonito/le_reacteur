// const usersLists = [
//     [
//       { name: "Alice", age: 24 },
//       { name: "Bob", age: 31 },
//       { name: "Charlie", age: 27 },
//       { name: "David", age: 20 }
//     ],
//     [
//       { name: "John", age: 34 },
//       { name: "Lucas", age: 45 },
//       { name: "Bill", age: 19 },
//       { name: "Max", age: 24 }
//     ],
//     [
//       { name: "Lawrence", age: 13 },
//       { name: "Charles", age: 37 }
//     ]
//   ]
  
//   console.log(usersLists[0][1])

const invert = (obj) => {
const invertedObj = {};
const keys = Object.keys(obj);
const values = Object.values(obj);

for (let i=0; i<values.length; i++) {
  invertedObj[values[i]] = keys[i];
}
return invertedObj;
}


console.log(invert({ 'a': 3, 'b': 2, 'c': 7 })); // Affichera {'3' : 'a', '2' : 'b', '7' : 'c'}
console.log(invert({ 'a': 7, 'b': 1, 'c': 7 }));