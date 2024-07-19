const dateChecking = (string) => { 
    if (string.length != 10) {
        return "Error";
    }
        const parts = string.split("-");
    if(parts.length != 3) {
        return "Error";
    }
        const year = parseInt(parts[0]);
        const month = parseInt(parts[1]);
        const day = parseInt(parts[2]);
        
    if (isNaN(year) || isNaN(month) || isNaN(day)) {
        return "Error";
    }
    if (year < 1000 || year >  9999) {
        return "Error";
    }
    if (month <1 || month > 12) {
        return "Error"
    }
    if (day <1 || day > 31) {    
        return "Error"
    }
    return console.log(`${year}-${month}-${day}`)
}
   console.log(dateChecking("2021-05-21")); // Affichera "OK"
   console.log(dateChecking("07-21-2022")); // Affichera "Error"
   console.log(dateChecking("2027-13-02")); // Affichera "Error"
   console.log(dateChecking("2023-05-41")); // Affichera "Error"
   console.log(dateChecking("20-05-17")); // Affichera "Error"
   console.log(dateChecking("2023-5-12")); // Affichera "Error"
   console.log(dateChecking("2024-07-05")); // Affichera "OK"
