/*
    let Variable1 = 2;

    console.log (typeof(Variable1));

    let Variable2 = 3;
    let Variable3 = "45";
    let Variable4 = "14.9";

    console.log(typeof(Variable3));
    Variable3 = parseInt(Variable3);
    console.log(typeof(Variable3));

    console.log(typeof(Variable2));
    Variable2 = Variable2.toString();
    console.log(typeof(Variable2));


    console.log(typeof(Variable4));
    Variable4 = parseFloat(Variable4);
    console.log(typeof(Variable4));
    console.log(Variable4);

    let Variable5 = "bonjour  ";
    let Variable6 = "tout le monde";
    let Variable7= Variable5 + Variable6;
    console.log(Variable7);


    let Variable8 = 45;
    let Variable9= "45";

    console.log(Variable8==Variable9);
    console.log(Variable8===Variable9);


    let Variable10 = 3;
    let Variable11 = 8;
    let Variable12 = 2;

    if (Variable10 == Variable11 && Variable11 == Variable12) {
        console.log("Les variables sont égales");
    } else if (Variable10 == Variable11 || Variable11 == Variable12) {
        console.log("Au moins deux variables sont égales")
        } else {
        console.log("Les trois variables sont différentes");
        }




    let reponse = prompt("la valeur numérique");
    if (reponse >= 100) {
        console.log("La valeur est supérieur ou égale à 100");
    } else {
        console.log("La valeur n'est pas supérieur ou égale à 100");
    }
    let age = prompt("Saisir un age");
    if (age < 18) {
        console.log("Vous êtes mineur");
    } else if (age == 18) {
        console.log("Super, tu peux picoler !");
    } else if (age > 18 && age < 65) {
        console.log("Tu es majeur");
    } else if (age >= 65 && age <= 67) {
        console.log("Super, c'est la retraite")
    } else if (age > 67) {
        console.log("RIP");
    }



    let color1 = prompt("Saisir une couleur");
    let color2 = prompt("Saisir une couleur");



    let age = prompt("Saisir un âge");
    switch (true) {
        case age < 18:
            console.log("Vous êtes mineur");
            break;
        case age == 18:
            console.log("Super, tu peux picoler");
            break;
        case age > 18 && age < 65:
            console.log("Tu es majeur");
            break;
        case age >= 65 && age <= 67:
            console.log("Super, c'est la retraite");
            break;
        case age > 67:
            console.log("RIP");
            break;
    }


    function consoleName(nom, prénom) {
        console.log("je suis", nom, "et", prénom);
    }

    consoleName("dufour", "romain")

    let consoleNom = (nom, prénom) => {
        console.log("je suis", nom, "et", prénom);
    }

    consoleNom("dufour", "romain");


let i=1;


const intervalId = setInterval(function consoleCount(){
    console.log(i++)
    if (i==6){
        clearTimeout (intervalId);
    }
}, 1000);


let i=1

function consoleCount2(){
    setTimeout(()=>{
        console.log(i++)
        if (i<=5){
            consoleCount2();
        }
    }, 1000);
}

consoleCount2();



function anneeBi (annee) {
    if ((annee%100 != 0 && annee%4 == 0 )|| annee%400 == 0 ) {
        console.log("true");
    } else {
        console.log("false");
    }
}

let anneeIn = prompt("metez un an: ")
anneeBi(anneeIn);



var cible = Math.floor(Math.random() * 10) + 1;
var nombre, compteur;

for (compteur = 0; compteur < 3; compteur ++) {
    nombre = parseInt(prompt("Donnez un chiffre entre 1 et 10:"), 10);
    if (nombre === cible) {
        alert("Bravo");
        break;
    }
    if (nombre > cible) {
        alert("Trop grand");
    }

    if (nombre < cible) {
        alert("Trop petit");
    }
    else {
        alert("Ce n'est pas un chiffre");
        compteur -= 1;
}
}
alert("c'est fini. le chiffre cherche est : " + cible);

*/

/*

let tab= ["banane", "pomme", "poire", "abricot", "clémentine", "orange"];

for(let fruit of tab){
    console.log(fruit);
}



let semaine =['lun','mra','mer','jeu','ven','sam','ddi'];
semaine.pop();
semaine.push('dim');
semaine[1] = 'mar';
document.write(semaine);
document.write(semaine.length);
document.write(semaine[2]);



let tabFruits= ["banane", "pomme", "poire", "abricot", "clémentine", "orange"];
let cible = prompt("Choisissez un fruit: "+tabFruits);

if (tabFruits.includes(cible, [0])){
    positionIndex = tabFruits.indexOf(cible);
    tabFruits.splice(positionIndex,1);
    prompt("Ok ! Votre produit à été ajouté. "+tabFruits);
} else {
    prompt("Ce produit est indisponible");
}


let classes1 = [{ Nom: "Laurent", Notes: [18, 20, 15] }, { Nom: "Gilles", Notes: [1, 5, 0] }, { Nom: "Céline", Notes: [8, 15, 20] }, { Nom: "Hamza", Notes: [20, 10, 5] }];
let classes2 = [{ Nom: "Haitam", Notes: [3, 8, 20] }, { Nom: "Jérémy", Notes: [9, 12, 18] }, { Nom: "Facundo", Notes: [8, 12, 19] }, { Nom: "Karim", Notes: [20, 11, 4] }];
let lesClasses = [classes1, classes2];
let sum = 0;
let moyenneClasses1 =[];
let moyenneClasses2 = [];


console.log("Moyenne individuelle Classe 1");
for (let i = 0; i < classes1.length; i++) {
    classes1[i].Notes;
    sum = classes1[i].Notes.reduce((a, b) => a + b, 0);
    sum = sum / classes1[i].Notes.length;
    console.log("Moyenne générale de", classes1[i].Nom,sum= Math.round((sum) * -10) / -10);
    moyenneClasses1.push(sum);
}
for (let i = 0; i < moyenneClasses1.length; i++) {
    sum = moyenneClasses1.reduce((a, b) => a + b, 0);
    sum = sum / moyenneClasses1.length;
}
console.log("Moyenne générale de la classe",moyenneClasses1=sum= Math.round((sum) * -10) / -10);




console.log("Moyenne individuelle Classe 2");
for (let i = 0; i < classes2.length; i++) {
    classes2[i].Notes;
    sum = classes2[i].Notes.reduce((a, b) => a + b, 0);
    sum = sum / classes2[i].Notes.length;
    console.log("Moyenne générale de", classes2[i].Nom,sum= Math.round((sum) * -10) / -10);
    moyenneClasses2.push(sum);
}
for (let i = 0; i < moyenneClasses2.length; i++) {
    sum = moyenneClasses2.reduce((a, b) => a + b, 0);
    sum = sum / moyenneClasses2.length;
}
console.log("Moyenne générale de la classe",moyenneClasses2=sum= Math.round((sum) * -10) / -10);

let bestMoyenne = "";
if(moyenneClasses1<moyenneClasses2){
    console.log("La classe 2 a la meilleur moyenne, qui est de:",moyenneClasses2)
} else {
    console.log("La classe 2 a la meilleur moyenne, qui est de:",moyenneClasses1)
}



let tab = [1,68,8,9,45,25,14];
let result = 0;

for (let i = 0; i < tab.length; i++) {
    console.log(tab[i])
    if (tab[i]>result){
        result = tab[i];
    } else {
        result = result;
    }

}
console.log("Le nombre le plus grand est:",result);


//Exercice 13//

let Tab = [1,2,3];
let Miroir = [...Tab];

console.log("Slice",Tab1=Tab.slice(0,2));
console.log("Reverse",Tab1.reverse());
console.log("Miroir",Miroir);

for(let i=0; i<Tab1.length; i++){
    Miroir.push(Tab1[i]);
}

console.log(Miroir);

//Exercice 14//

let tab= [1,8,9,8,-9,-3,0];

function returnNombre(tab){
    return tab.filter( n => n >= 0 );
}


//Exercice 15//


function isMultiple(tab, nombre) {
    let returnTab = [];
    returnTab = tab.filter(n => n % nombre);
    console.log(returnTab);
}

isMultiple([1, 5, 8, 9, 7, 8, 2], 3);
isMultiple([3, 11, 25, 9, 4, 65, 22], 5);


//Exercice 16//

function searchFilm(liste) {
    console.log(liste);
    let recherche = prompt("Quel film recherchez vous ?");
    recherche = recherche.toLowerCase();
    let resultat = liste.filter(w => w.toLowerCase().includes(recherche));
    console.log(resultat);
}


searchFilm(["batman", "zorro", "Zorro"]);



//Exercice 17//

function wordLength(tab) {
    let tabWordLength = tab.map(x => "Le mot " + x + " contient " + x.length);
    console.log(tabWordLength);
}

wordLength(["bonjour", "merci", "aurevoir", "s'il vous plait", "derien"]);


//Exercice 18//

let food = [{ Aliment: "poulet", isVegetarian: false }, { Aliment: "concombre", isVegetarian: true }, { Aliment: "tomate", isVegetarian: true }, { Aliment: "saumon", isVegetarian: false }];

let vegetarianOrNot = (food) => food.map(food => {
    if (food.isVegetarian == true) {
        return food.Aliment + " est consommable par les végétariens";
    } else {
        return food.Aliment + " n'est pas onsommable par les végétariens";
    }
});
// console.log(reponse);


console.log(vegetarianOrNot(food))



//Exercice 19//



let listFilms = [{ Name: "Avatar", Rating: "77" }, { Name: "Megan", Rating: "94" }, { Name: "A Man Called Otto", Rating: "66" }, { Name: "Women Talking", Rating: "90" }, { Name: "Broker", Rating: "92" }, { Name: "The Old Way", Rating: "41" }, { Name: "Babylon", Rating: "55" }, { Name: "Living", Rating: "95" }];


function rottenOr(rat) {
    if (rat < 60) {
        return "rotten";
    } else if (rat > 60 && rat < 75) {
        return "fresh";
    } else {
        return "certified fresh";
    }

}

function films(tabfilms) {
    return tabfilms.map(film => {
        film.label = rottenOr(film.Rating);
        return film;
    }
    );
}

console.log(films(listFilms));



//Exercice 20//

function cercleData(rayon) {
    let circumference = 2 * Math.PI * rayon;
    let diametre = Math.PI * rayon * rayon;

    console.log(`
    radius: ${rayon}
    circumference: ${circumference.toFixed(3)}
    diametre: ${diametre.toFixed(3)}`);
}

cercleData(10);


//Exercice 21//

let tabStarWars = [
    { name: 'Yoda', side: 'light' },
    { name: 'Count Dooku', side: 'dark' },
    { name: 'Obiwan Kenobi', side: 'light' },
    { name: 'Mace Windu', side: 'light' },
    { name: 'Darth Sidious', side: 'dark' },
    { name: 'Darth Maul', side: 'dark' }
]

const PersoLight = (PersoStarWars) => console.log(PersoStarWars.filter(p => p.side == 'light').map(p => p.name));

PersoLight(tabStarWars);



//Constuire une classe//

class Personne {
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }

    direBonjour() {
        console.log(`Bonjour, je m'appelle ${this.nom} ${this.prenom}`);
    }
}

class Walk extends Personne {
    constructor(nom, prenom, walk) {
        super(nom, prenom);
        this.walk = walk;
    }

    isWalk() {
        super.direBonjour()
        if (this.walk === true) {
            console.log("et je marche");
        } else {
            console.log("et je ne marche pas");
        }

    }
}

let Nicolas = new Walk("Maligue", "Nicolas", true);
Nicolas.isWalk();


//Exercice 23//

class Vélo {
    constructor(nom, poids, couleur) {
        this.nom = nom;
        this.poids = poids;
        this.couleur = couleur;
    }

    move(start, end) {
        console.log(`Je me déplace de ${start} à ${end} avec mon ${this.nom} ${this.couleur}`)
    }
}

let Romain = new Vélo("Cyfac", "78", "jaune");
Romain.move("Montpellier", "Tokyo");



//Exercice 24//


class VeloElectrique extends Vélo {
    constructor(nom, poids, couleur) {
        super(nom, poids, couleur);
    }

    moveElectrique(vitesse, puissance) {
        super.move;
        console.log(`à ${vitesse} km/h. Mon vélo fait ${puissance} Watt, c'est une bombe !`);
    }
}

Romain = new VeloElectrique("Cyfac", "78", "jaune");
Romain.moveElectrique("80", "10500");

*/

//Exercice 25//

class Titualaire {
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }

    sePresenter() {
        console.log(`Bonjour, je m'appelle ${this.nom} ${this.prenom}`);
    }
}

class Compte {
    constructor(titulaire, montant = 0) {
        this.titulaire = titulaire;
        this.montant = montant;
    }

    crediter() {

    }
    debiter() {

    }
    afficherSolde() {

    }
}

class CompteEpargne extends Compte {
    constructor(titulaire, montant = 50, taux = 0.05) {
        super(titulaire, montant, taux);
        this.taux = taux;
    }

    nouveauSolde() {
        setInterval(function consoleCount() => {
            CompteEpargne += 1 + this.taux;
        }, 1000);
    }
}


