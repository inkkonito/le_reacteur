// const axios = require("axios");

// axios
// .get("https://jsonplaceholder.typicode.com/users")
// .then((response => { 
//     let displayUsers = ""; 
//    // console.log(response.data);
//     for (let i=0; i<response.data.length; i++) {
//         const user = response.data[i];
//         displayUsers = displayUsers + "Name : " + user.name + "\n";
//         displayUsers = displayUsers + "Email : " + user.email + "\n";
//         displayUsers = displayUsers + "Town : " + user.address.city + "\n";
//         displayUsers = displayUsers + "--------------------------\n"
//     }
//     console.log(displayUsers);
// }))
// .catch(error => { console.log(error) })

const axios = require("axios");
axios.get("https://jsonplaceholder.typicode.com/users")
.then(response => {
    console.log(response.data.length)
    for (let i=0; i<response.data.length; i++)
{    const user = response.data[i];
    console.log(`User name is ${user.name}`)
}    
})