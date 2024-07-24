/*

Niveau Facile
Exercice 1 : Fusionner deux listes de fruits
Objectif : Utiliser concat() pour combiner deux tableaux.

Énoncé :

Tu as deux tableaux de fruits :

const fruits1 = ["pomme", "banane", "orange"];
const fruits2 = ["kiwi", "fraise", "mangue"];

Utilise la méthode concat() pour créer un nouveau tableau contenant tous les fruits des deux tableaux.
Affiche le nouveau tableau.
*/

const fruits1 = ["pomme", "banane", "orange"];
const fruits2 = ["kiwi", "fraise", "mangue"];

const allFruits = fruits1.concat(fruits2);
console.log(allFruits)

/*

Niveau Intermédiaire
Exercice 2 : Ajouter des éléments multiples
Objectif : Ajouter plusieurs éléments à un tableau existant en utilisant concat().

Énoncé :

Tu disposes d'un tableau de livres :


const livres = ["1984", "Le Petit Prince", "Les Misérables"];
Tu souhaites ajouter les livres suivants : "Don Quichotte", "Moby Dick" et "Le Seigneur des Anneaux".

Utilise concat() pour ajouter ces livres au tableau existant.
Affiche le tableau mis à jour.
*/

const livres = ["1984", "Le Petit Prince", "Les Misérables"];
const nouveauxLivres = ["Don Quichotte", "Moby Dick", "Le Seigneur des Anneaux"]
const allLivres = livres.concat(nouveauxLivres)
console.log(allLivres);

/* 
Niveau Difficile
Exercice 3 : Fusionner des tableaux avec condition
Objectif : Utiliser concat() avec une condition pour combiner des tableaux.

Énoncé :

Tu as trois tableaux représentant les stocks de trois magasins :

const magasin1 = ["chaussures", "sacs", "chapeaux"];
const magasin2 = ["vêtements", "montres"];
const magasin3 = ["chaussures", "lunettes", "ceintures"];

Utilise concat() pour fusionner les stocks des trois magasins, mais uniquement si un magasin a plus de 2 articles en stock.
Affiche le tableau combiné.
Indice : Utilise une condition pour vérifier la longueur des tableaux avant de les concaténer.
*/ 

const magasin1 = ["chaussures", "sacs", "chapeaux"];
const magasin2 = ["vêtements", "montres"];
const magasin3 = ["chaussures", "lunettes", "ceintures"];

let stock = []

if (magasin1.length > 2) {
stock = stock.concat(magasin1)
}
if (magasin2.length > 2) {
stock = stock.concat(magasin2)
}
if (magasin3.length > 2) {
stock = stock.concat(magasin3)
    }
console.log(stock);