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

