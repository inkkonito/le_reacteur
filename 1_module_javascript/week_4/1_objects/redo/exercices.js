
// Bien sûr ! Voici trois exercices pour chaque sujet que vous avez mentionné : Les objets, Méthodes utiles pour l'utilisation d'objets, et Parcourir un objet. Chaque exercice est conçu pour vous aider à comprendre et à utiliser les objets en JavaScript.

// Exercice 1 : Les objets
// Problème
// Créez un objet utilisateur qui représente une personne avec les propriétés suivantes : nom, prenom, age, et email. Ensuite, écrivez une fonction afficherInformationsUtilisateur qui prend cet objet en paramètre et affiche ses informations sous forme de phrase.

const utilisateur = {
    nom: 'Doe',
    prenom: 'Jon',
    age: 28,
    email: 'jon.doe@email.com'
}

const afficherInformationsUtilisateur = (obj) => {
    console.log(`Nom: ${obj.nom}, Prénom ${obj.prenom}, Age: ${obj.age}, Email: ${obj.email}`);
}

afficherInformationsUtilisateur(utilisateur);

/*
Exercice 2 : Méthodes utiles pour l'utilisation d'objets
Problème
Utilisez les méthodes intégrées de JavaScript pour manipuler un objet produit et obtenir ses clés, valeurs, et entrées. Modifiez également l'objet en ajoutant une nouvelle propriété.

Instructions
Créez un objet produit avec les propriétés suivantes :
nom: "Ordinateur Portable"
prix: 999.99
disponible: true

Utilisez Object.keys() pour obtenir un tableau de toutes les clés de l'objet produit.
Utilisez Object.values() pour obtenir un tableau de toutes les valeurs de l'objet produit.
Utilisez Object.entries() pour obtenir un tableau contenant les paires clé-valeur de l'objet produit.
Ajoutez une nouvelle propriété couleur à l'objet produit avec la valeur "gris".
*/

const produit = {
    nom: "Ordinateur Portable",
    prix: 999.99,
    disponible: true
}

const produitKeys = Object.keys(produit);
console.log(produitKeys);
for (let keys of produitKeys) {
    console.log(`Keys are ${keys}`)
}

const produitValues = Object.values(produit);
console.log(produitValues);
for (let keys of produitValues) {
    console.log(`Values are ${keys}`)
}

const produitEntries = Object.entries(produit);
console.log(produitEntries);

produit.couleur = "gris";

/*
Exercice 3 : Parcourir un objet
Problème
Écrivez une fonction parcourirObjet qui prend un objet en paramètre et affiche chaque paire clé-valeur sous forme de chaîne de caractères : "clé: valeur".

Instructions
Créez une fonction nommée parcourirObjet qui accepte un objet comme paramètre.
Utilisez une boucle for...in pour parcourir l'objet.
Pour chaque propriété, affichez une chaîne de caractères avec le format "clé: valeur".
*/

const voiture = {
    marque: 'Toyota',
    modele: 'Corolla',
    annee: 2020
  };

const parcourirObjet = (obj) => {
    for (let cles in obj) {
        console.log(`${cles}: ${obj[cles]}`)
    }
} 
parcourirObjet(voiture);

