const isAnagram = (str1, str2) => {
    // Début de votre code
    
    if (str1.length !== str2.length) {
        return false
    } else {
        // split strings in array of letters
        const letters1 = str1.split("");
        const letters2 = str2.split("")

        // sort letters

        letters1.sort();
        letters2.sort();

        for (let i=0; i<letters1.length; i++) {
            if (letters1[i] !== letters2[i]) {
                return false
            } else {
                return true
            }
        }
    }

    // Fin de votre code
  }
  
  console.log(isAnagram("listen", "silent")); // Affichera true
  console.log(isAnagram("hill", "liane")); // Affichera false