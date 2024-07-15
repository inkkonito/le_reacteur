const car = {
    brand: "Corvette",
    specificities: {
      color: "red",
      country: "France"
    }
  };
  
  // Début de votre code
  
  car.specificities["color"] = "blue";
  car.specificities["country"] = "USA";
  // Fin de votre code
  
  console.log(car); // Affichera { brand: "Corvette", specificities: { color: "blue", country: "USA" } }