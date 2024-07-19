const axios = require("axios");

axios
.get("https://api.chucknorris.io/jokes/categories")
.then(response => { 
    console.log(response.data)
    let joke=0
    for (let i=0; i<response.data.length; i++) {
        if (response.data[i] === "history" ||
            response.data[i] === "science" ||
            response.data[i] === "dev"
        ) {
            joke=response.data[i];
            axios.get(`https://api.chucknorris.io/jokes/random?category=${joke}`)
            .then(jokeResponse => {
                console.log(`Thème : ${jokeResponse.data.categories}`)
                console.log(`${jokeResponse.data.value}\n`);
            })
            .catch(error => console.log(error));
        }
    }
})
.catch(error => console.log(error))