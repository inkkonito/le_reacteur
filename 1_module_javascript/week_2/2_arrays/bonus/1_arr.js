// at
let arr = [0, 9, 2, 18];

console.log(arr.at(1)); // get index of position 1

// concat
let arr2 = ["jon", "oliver", "max"];
let newArr = arr.concat(arr2); // add arr2 at the end of arr
console.log(newArr);

// copywithin
let arrA = [0, 1, 2, 3];
let arrB= [4, 5];

console.log(arrA.copyWithin(1,0,1)) // copy from index 0 at index 1

// entries 
let arrC = arrB.entries();
console.log(arrC);

for (let [index, values] of arrC) {
    console.log(`Index: ${index} Value: ${values}`)
}

// every 

let arrD = [0, 9, 4, 1];
console.log(arrD.every(elem => typeof elem === 'number')); // return trues

// fill

let arrE = [1, 2, 3, 4];
console.log(arrE.fill(0,2,4)); // set 0 from index 2 to 4

// filter
let arrF = [0, 9, 3, -1]
console.log(arrF.filter(elem => elem > 0)) // output 9, 3

// find => return first element matching

console.log(arrF.find(elem => elem > 6)) // return 9

// findIndex

console.log(arrF.findIndex(elem => elem > 6)) // return 1 (index for 9)
console.log(arrF.findIndex(elem => elem > 9)) // return -1 (no matching)

// findLast

arrF = [0, 9, 7, 3]
const found = arrF.findLast(elem => elem > 6); // output 7 (from right)
console.log(found) // output 7

// findLastIndex
console.log(arrF.findLastIndex(elem => elem > 6)); // return 2 (arrF[2] is 7)

// flat
let arrG = [0, [1,2,3], [4,5], 6, [1,[2,3]]];
console.log(arrG);

let arrGflat = arrG.flat(1)
console.log(arrGflat); // recursive one level
console.log(arrGflat.length); // 9 length
console.log(arrGflat[8]); // output [2,3] 
console.log(arrGflat[8][1]); // output 3

// flatmap

let arrH = [2, 4, 6];
arrH = arrH.flatMap(elem => elem*2)
console.log(arrH); // 4, 8 , 12

// foreach 

let arrI = [
    { name: "Jon", points:83},
    { name: "Elisa", points:32},
    { name: "Marc", points:45},
]
arrI.forEach(elem => elem.points+=5);
console.log(arrI);

// includes

let arrJ = [0,1,2, "cat"];
console.log(arrJ.includes(1)); // return true
console.log(arrJ.includes("at")); // return false

// indexOf

console.log(arrJ.indexOf("cat")); // return 3

// join
let arrK = ["Max", "Oliver", "Adam"];
console.log(arrK.join("|")) // return Max|Oliver|Adam

// keys
let arrKIterator = arrK.keys();
for (let keys of arrKIterator) {
    console.log(`Keys are ${keys}`);
}

// lastIndexOf

let arrL = ["dodo", "cat", "dodo"];
console.log(arrL.lastIndexOf("dodo")); // return 2

// map

let arrM = [1,3,4] 
arrM = arrM.map(elem => elem+2);
console.log(arrM); // return [3, 5, 6]

// pop
console.log(arrM.pop()); // return 6
console.log(arrM); // return [3,5]

// push
console.log(arrM.push("hello")); // return 3
console.log(arrM); // return [3,5, "hello"]

// reduce
let arrN = [1,2,3,4] // sum = 10
arrN = arrN.reduce((accu, currentValue) => accu + currentValue);
console.log(arrN);

// redudeRight

// reverse

let arrO = [1,2,3];
arrO.reverse();
console.log(arrO) // return 3,2,1

// shift

console.log(arrO.shift()); // return 3 (first item removed)
console.log(arrO); // return 2,1

// slice

let arrP = [3,6,9,12,15];
arrP = arrP.slice(1, 3); // 1 = 6 & 3 = 12
console.log(arrP) // return 6 & 9

// some
console.log(arrP.some(elem => {
    console.log(elem)
    return elem%2 ===0 // is pair? yes 6 is pair so true
}))

// sort
let arrQ = [9, 3, 2];
arrQ.sort(); // sorted ascending
console.log(arrQ); // return [2,3,9]

// splice
arrQ.splice(0, 1, "hi") 
console.log(arrQ); // return ["hi", 3,9]

// toReversed

arrQ = arrQ.toReversed();
console.log(arrQ); // returns [9,3, "hi"];

// toSpliced

// toString
arrQ = arrQ.toString();
console.log(typeof arrQ); // string

// unshift
let arrR = ["hi", "good morning"]
console.log(arrR.unshift("bye")) // return 3 (new array length)
console.log(arrR); // return ["bye"] in first position

// values
let arrRIterator = arrR.values();
for (let values of arrRIterator) {
    console.log(values) // show values
}

// with
arrR = arrR.with(2, "good bye");
console.log(arrR);