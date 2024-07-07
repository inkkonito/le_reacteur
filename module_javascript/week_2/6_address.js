// 

const showAddress = (street, zipcode, city) => { // init function with three parameters
    console.log(street);
    console.log(zipcode);
    console.log(city);
}
showAddress("55 rue Etienne Marey", "75020", "Paris"); // execute function

console.log("\n"); // space 

const displayAddress = (street, zipcode, city) => {
    console.log(`Street address is : ${street}\nZipcode is : ${zipcode}\nCity is : ${city}`);
}
displayAddress("10 Downing Street", "SW1A 2AA", "City of Westminster")