const duplicate = (arr) => {
    // Début de votre code
    let result = []
   for (let i=0; i<arr.length; i++) {
    result.push(arr[i], arr[i])
   }
   return result
    // Fin de votre code
   }
   
   console.log(duplicate([2, 6, 9])); // Doit afficher [2, 2, 6, 6, 9, 9]
   console.log(duplicate(["Hello", null, 67])); // Doit afficher ["Hello", "Hello", null, null, 67, 67]
   console.log(duplicate(["John", "John", 8, 9])); // Doit afficher ["John", "John", "John", "John", 8, 8, 9, 9]