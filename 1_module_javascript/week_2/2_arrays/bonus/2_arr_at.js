/*

Niveau Facile
Exercice 1 : Accéder à un élément
Objectif : Utiliser la méthode at() pour accéder à un élément précis d’un tableau.

Énoncé :

Crée un tableau contenant les jours de la semaine : ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]. Utilise la méthode at() pour récupérer :

Le troisième jour de la semaine.
Le dernier jour de la semaine.

*/

let days = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
console.log(days.at(2))
console.log(days.at(days.length -1))

/* 
Niveau Intermédiaire
Exercice 2 : Remplacer un élément
Objectif : Remplacer un élément d’un tableau en utilisant la méthode at().

Énoncé :

Tu disposes d’un tableau contenant les scores d’une compétition : [45, 50, 39, 62, 55].

Utilise at() pour accéder et mettre à jour le deuxième score (50) en le remplaçant par 52.
Affiche le tableau mis à jour.
*/

let scores = [45, 50, 39, 62, 55]
scores[scores.indexOf(scores.at(1))] = 52;
console.log(scores) 

/* 
Niveau Difficile
Exercice 3 : Extraire les éléments
Objectif : Utiliser at() pour accéder à plusieurs éléments à partir d'un tableau.

Énoncé :

On te donne un tableau des températures moyennes sur une semaine : [18, 21, 20, 19, 22, 17, 23].

Utilise at() pour récupérer la température du premier jour, du milieu de la semaine, et du dernier jour.
Calcule la moyenne de ces trois températures.
Affiche la moyenne.
*/

let temperatures = [18, 21, 20, 19, 22, 17, 23];
let firstDay = temperatures.at(0);
let midWeek = temperatures.at(Math.floor(temperatures.length / 2));
let lastDay = temperatures.at(temperatures.length -1);
let average = (firstDay + midWeek + lastDay) / 3
console.log(average)

