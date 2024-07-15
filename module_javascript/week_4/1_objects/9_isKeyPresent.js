const isKeyInObject = (obj, str) => {
   if (obj.hasOwnProperty("name")) {
    return true
   } else {
    return false
   }
}
   
const user = {
     name: 'John',
     age: 19,
     city: 'Londres'
};
   
   console.log(isKeyInObject(user, 'name')); // true
   console.log(isKeyInObject(user, 'job')); // false