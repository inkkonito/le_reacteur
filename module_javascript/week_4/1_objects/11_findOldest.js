const findOldestPerson = (array) => {
        let maxAge = 0;
        let resultIndex;
        for (let i=0; i<array.length; i++) {
            if(array[i].age > maxAge) {
                maxAge = array[i].age;
                resultIndex = i;
                console.log(resultIndex)
            }
        }
        return array[resultIndex];
}
  
  const users = [
    { name: "Alice", age: 240 },
    { name: "Charlie", age: 27 },
    { name: "David", age: 20 },
    { name: "Bob", age: 31 }
  ]
  
  console.log(findOldestPerson(users)); // Doit afficher { name: "Bob", age: 31 }