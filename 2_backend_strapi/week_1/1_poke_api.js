const axios = require ("axios");

/*
axios
.get("https://pokeapi.co/api/v2/pokemon?limit=100")
.then((response => console.log(response.data)))
.catch(error => console.log(error));

axios
.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=50")
.then((response => console.log(response.data)))
.catch(error => console.log(error));

*/

const getPokemon = (pokemonName) => {
    axios
.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
.then((response) => console.log(response.data))
.catch(error => console.log(error));
}

// getPokemon("charizard") 

const getType = (typeName) => {
    
axios
.get(`https://pokeapi.co/api/v2/type/${typeName}`)
.then((response) => console.log(response.data))
.catch(error => console.log(error));
}

getType("fire");