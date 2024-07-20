const axios = require("axios");

/*
axios
.get("https://lereacteur-bootcamp-api.herokuapp.com/api/strapi-restaurant/restaurants")
.then((response => console.log(response.data)))
*/

/*
let requestedType = "classic"
axios
.get(`https://lereacteur-bootcamp-api.herokuapp.com/api/strapi-restaurant/restaurants?type=${requestedType}`)
.then((response => console.log(response.data)))
*/

/*
requestedName = "Café";
axios
.get(`https://lereacteur-bootcamp-api.herokuapp.com/api/strapi-restaurant/restaurants?name=${requestedName}`)
.then((response => console.log(response.data)))
*/

/*
requestedCity = "Paris";
axios
.get(`https://lereacteur-bootcamp-api.herokuapp.com/api/strapi-restaurant/restaurants?city==${requestedCity}`)
.then((response => console.log(response.data)))
*/

/*
axios
({
    method: 'post',
    url: 'https://lereacteur-bootcamp-api.herokuapp.com/api/strapi-restaurant/restaurants',
    data: {
        name: 'Café des Artistes',
        city: 'Biarritz',
        type: 'classic'
    }
})
.then((response => console.log(response.data)))
*/

/*
axios(
    {
    method: 'get',
    url: `https://lereacteur-bootcamp-api.herokuapp.com/api/strapi-restaurant/restaurants/669b7d7da73cbe00d8ec3f04`
})
.then((response => console.log(response.data)))
*/

/*
axios
(
    {
        method: 'put',
        url: 'https://lereacteur-bootcamp-api.herokuapp.com/api/strapi-restaurant/restaurants/669b7d7da73cbe00d8ec3f04',
        data: {
            name: "Mc Donald",
            type: "fast-food",
            city: "Anglet"
        }
    }
)
.then((response => console.log(response.data)))
*/

/*
axios
.delete("https://lereacteur-bootcamp-api.herokuapp.com/api/strapi-restaurant/restaurants/669b7d7da73cbe00d8ec3f04")
.then(
    response => console.log(response.data)
)
*/