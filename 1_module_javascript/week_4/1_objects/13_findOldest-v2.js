const findOldestPerson = (array) => {
    let oldestPerson = null;
    for(let i=0; i<array.length; i++) {
        {
            for(let j=0; j<array[i].length; j++) {
                if(oldestPerson === null || array[i][j].age > oldestPerson.age) {
                    oldestPerson = array[i][j];
                }
            }
        }
    }
    return oldestPerson;
  }
  
  
  const usersLists = [
    [
      { name: "Alice", age: 24 },
      { name: "Bob", age: 31 },
      { name: "Charlie", age: 27 },
      { name: "David", age: 20 }
    ],
    [
      { name: "John", age: 34 },
      { name: "Lucas", age: 45 },
      { name: "Bill", age: 19 },
      { name: "Max", age: 24 }
    ],
    [
      { name: "Lawrence", age: 13 },
      { name: "Charles", age: 37 }
    ]
  ]
  
  console.log(findOldestPerson(usersLists)); // Doit afficher { name: "Lucas", age: 45 }