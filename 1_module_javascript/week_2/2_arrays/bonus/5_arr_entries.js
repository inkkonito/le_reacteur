/*
Niveau Facile
Exercice 1 : Parcourir un tableau avec entries()
Objectif : Utiliser entries() pour parcourir un tableau et afficher ses indices et valeurs.

Énoncé :

Tu as un tableau de prénoms :

const prenoms = ["Alice", "Bob", "Charlie", "David"];
Utilise entries() pour obtenir un itérateur sur le tableau.
Parcours le tableau avec une boucle for...of pour afficher chaque indice et son prénom correspondant sous la forme : Index: X, Prénom: Y.
*/

const prenoms = ["Alice", "Bob", "Charlie", "David"];
const iterator = prenoms.entries();
for (let [index, values] of iterator) {
    console.log(`Index is ${index} and Value is ${values}`);
}

/*
Niveau Intermédiaire
Exercice 2 : Transformer un tableau en objet
Objectif : Utiliser entries() pour convertir un tableau en un objet où chaque clé est l'indice de l'élément dans le tableau, et la valeur est l'élément lui-même.

Énoncé :

Tu as un tableau d'animaux :

const animaux = ["chat", "chien", "poisson"];
Utilise entries() pour créer un objet où chaque clé est l'indice de l'élément dans le tableau et la valeur est l'élément lui-même.
Affiche l'objet résultant. Il devrait ressembler à : {0: "chat", 1: "chien", 2: "poisson"}.
*/

const animaux = ["chat", "chien", "poisson"];

let objectAnimals = {}

for (let [index, values] of animaux.entries()) {
    objectAnimals[index] = values;
}

console.log(objectAnimals)

/*

Niveau Difficile
Exercice 3 : Trouver des paires avec des sommes spécifiques
Énoncé :

Tu as un tableau de nombres :

const nombres = [10, 15, 3, 7, 8, 10];
const sommeCible = 17;
Utilise entries() pour parcourir le tableau et trouver toutes les paires d'indices où la somme des valeurs est égale à sommeCible.
Affiche chaque paire d'indices et leur somme correspondante sous la forme : Indices: (i, j) - Valeurs: (nombres[i], nombres[j]).
*/

const nombres = [10, 15, 3, 7, 8, 10];
const sommeCible = 17;

