/*

Niveau Facile
Exercice 1 : Dupliquer une partie d'un tableau
Objectif : Utiliser copyWithin() pour dupliquer une partie d'un tableau.

Énoncé :

Tu as un tableau de chiffres :

const chiffres = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Utilise copyWithin() pour copier les trois premiers chiffres à la fin du tableau.
Affiche le tableau modifié.

*/

const chiffres = [1, 2, 3, 4, 5, 6, 7, 8, 9];
chiffres.copyWithin(6,0,3)
console.log(chiffres)

/*
Niveau Intermédiaire
Exercice 2 : Remplacer des éléments avec une sous-partie
Objectif : Remplacer certains éléments d’un tableau par une sous-partie de ce même tableau.

Énoncé :

Tu as un tableau de lettres :

const lettres = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
Utilise copyWithin() pour remplacer les trois dernières lettres par les trois premières.
Affiche le tableau mis à jour.
*/

const lettres = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
lettres.copyWithin(4,0,3);
console.log(lettres)

/*
Niveau Difficile
Exercice 3 : Manipuler les index pour modifier le tableau
Objectif : Utiliser copyWithin() avec différents index pour créer un effet particulier.

Énoncé :

Tu as un tableau représentant les couleurs de l'arc-en-ciel :

const arcEnCiel = ['rouge', 'orange', 'jaune', 'vert', 'bleu', 'indigo', 'violet'];
Utilise copyWithin() pour déplacer les couleurs du milieu (jaune et vert) au début du tableau.
Essaye de garder le reste du tableau inchangé (ou minimise les modifications).
Affiche le tableau final.

Indice : Pense à manipuler les indices de départ et de fin pour ne remplacer que les éléments nécessaires.
*/

const arcEnCiel = ['rouge', 'orange', 'jaune', 'vert', 'bleu', 'indigo', 'violet'];
arcEnCiel.copyWithin(0,2,4);
console.log(arcEnCiel)