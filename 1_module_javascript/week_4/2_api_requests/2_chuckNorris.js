// const axios = require("axios");

// axios
// .get("https://api.chucknorris.io/jokes/categories")
// .then(response => { 
//     console.log(response.data)
//     let joke=0
//     for (let i=0; i<response.data.length; i++) {
//         if (response.data[i] === "history" ||
//             response.data[i] === "science" ||
//             response.data[i] === "dev"
//         ) {
//             joke=response.data[i];
//             axios.get(`https://api.chucknorris.io/jokes/random?category=${joke}`)
//             .then(jokeResponse => {
//                 console.log(`Thème : ${jokeResponse.data.categories}`)
//                 console.log(`${jokeResponse.data.value}\n`);
//             })
//             .catch(error => console.log(error));
//         }
//     }
// })
// .catch(error => console.log(error))

const axios = require("axios");

let categories = ["history", "science", "dev"];

for (let i=0; i<categories.length; i++)
{axios
.get(`https://api.chucknorris.io/jokes/random?category=${categories[i]}`)
.then(response => {
    let joke = response.data;
    console.log(`Theme : ${joke.categories}`) 
    console.log(`Joke : ${joke.value}\n`) 
})
.catch((error) => console.log(error))
};