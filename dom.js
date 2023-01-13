/*
//Exercice 1//
let bouton = document.getElementById("button");

bouton.addEventListener('click', function () {
    let h1 = document.createElement("h1");
    document.body.appendChild(h1);
    h1.textContent = "Hello World !";
})


//Exercice 2//

let bouton = document.getElementById("button");


bouton.addEventListener('click', function afficher() {
    let saisie = document.getElementById("input1").value;
    let h1 = document.createElement("h1");
    document.body.appendChild(h1);
    h1.textContent = saisie;
})


//Exercice 3//
let titre1 = document.getElementById("titre1");
let titre2 = document.getElementById("titre2");
let titre3 = document.getElementById("titre3");
let paragraphe1 = document.getElementById("paragraphe1");
let paragraphe2 = document.getElementById("paragraphe2");
let paragraphe3 = document.getElementById("paragraphe3");

console.log(titre1.nextElementSibling);

let h2s = document.querySelectorAll("h2");
console.log(h2s);

h2s.forEach((h2) => {
    h2.addEventListener('click', () => {
        let varElemSibling = h2.nextElementSibling;
        if (getComputedStyle(varElemSibling).display != "none") {
            varElemSibling.style.display = "none";
        } else {
            varElemSibling.style.display = "block";
        }
    })
})


//Exercice 4//

let reponse = prompt("Voulez vous jouer ?");


if (reponse == "oui") {
    let h1 = document.createElement("h1");
    document.body.appendChild(h1);
    h1.textContent = "Jouons ensemble !";
}

//Exercice 5//

function createDom(element_name, text, parent) {
    const markup = document.createElement(element_name);
    markup.textContent = text;
    parent.appendChild(markup);
    return markup;
}

createDom("button", "Tous", document.body);
createDom("button", "HTML", document.body);
createDom("button", "CSS", document.body);
createDom("button", "JS", document.body);

let buttons = document.querySelectorAll("button");
console.log(buttons);

buttons[0].setAttribute("id", "Tous");
buttons[1].setAttribute("id", "HTML");
buttons[2].setAttribute("id", "CSS");
buttons[3].setAttribute("id", "JS");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.getAttribute("id"));
        if (button.getAttribute("id") == "Tous") {
            createDom("p", "L'un des principaux buts de HTML est de structurer du texte et lui donner du sens (ce que l'on appelle la sémantique) afin que le navigateur puisse l'afficher correctement. Cet article explique comment HTML peut être utilisé pour structurer une page en ajoutant des titres et des paragraphes, en marquant des emphases, en créant des listes, et bien plus encore.", document.body);
            createDom("p", "Dans cet article, nous allons commencer le voyage vers la maîtrise des styles du texte avec CSS. Nous passerons en revue les principes de base de mise en forme du texte, y compris la graisse, la famille et le style de police, les codes d'abréviation, l'alignement du texte et autres effets, ainsi que l'espacement des lignes et des lettres.", document.body);
            createDom("p", "Concentrons-nous maintenant sur les chaînes de caractères - c'est le nom donné à un segment de texte en programmation. Dans cet article, nous aborderons les aspects les plus communs des chaînes de caractères que vous devez vraiment connaître quand vous apprenez JavaScript, comme créer une chaîne de caractères, échapper des guillemets dans une chaîne ou encore concaténer des chaînes.", document.body);
        } else if (button.getAttribute("id") == "HTML") {
            createDom("p", "L'un des principaux buts de HTML est de structurer du texte et lui donner du sens (ce que l'on appelle la sémantique) afin que le navigateur puisse l'afficher correctement. Cet article explique comment HTML peut être utilisé pour structurer une page en ajoutant des titres et des paragraphes, en marquant des emphases, en créant des listes, et bien plus encore.", document.body);
        } else if (button.getAttribute("id") == "CSS") {
            createDom("p", "Dans cet article, nous allons commencer le voyage vers la maîtrise des styles du texte avec CSS. Nous passerons en revue les principes de base de mise en forme du texte, y compris la graisse, la famille et le style de police, les codes d'abréviation, l'alignement du texte et autres effets, ainsi que l'espacement des lignes et des lettres.", document.body);
        } else if (button.getAttribute("id") == "JS") {
            createDom("p", "Concentrons-nous maintenant sur les chaînes de caractères - c'est le nom donné à un segment de texte en programmation. Dans cet article, nous aborderons les aspects les plus communs des chaînes de caractères que vous devez vraiment connaître quand vous apprenez JavaScript, comme créer une chaîne de caractères, échapper des guillemets dans une chaîne ou encore concaténer des chaînes.", document.body);
        }
    })
})



//Exercice 6//

function createDom(element_name, text, parent) {
    const markup = document.createElement(element_name);
    markup.textContent = text;
    parent.appendChild(markup);
    return markup;
}

createDom("button", "Démarrer", document.body);
createDom("button", "Arrêter", document.body);
createDom("button", "Reset", document.body);
createDom("div", "00 : 00 : 00", document.body);



let buttons = document.querySelectorAll("button");
console.log(buttons);

buttons[0].setAttribute("id", "Demarrer");
buttons[1].setAttribute("id", "Arreter");
buttons[2].setAttribute("id", "Reset");


let timer = document.querySelector("div");
timer.setAttribute("id", "timerDisplay")
console.log(timer);

let [seconds, minutes, hours] = [0, 0, 0];
let timerRef = document.querySelector('#timerDisplay')
console.log(timerRef);
let int = null;

// Code pour les appels des boutons//
document.getElementById('Demarrer').addEventListener('click', () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 100);
});

document.getElementById('Arreter').addEventListener('click', () => {
    clearInterval(int);
});

document.getElementById('Reset').addEventListener('click', () => {
    clearInterval(int);
    [seconds, minutes, hours] = [0, 0, 0];
    timerRef.innerHTML = "00 : 00 : 00";
});

//Code pour le fonctionnement du Timer//
function displayTimer() {
    seconds += 1;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    timerRef.innerHTML = ` ${h} : ${m} : ${s} `;
}



//Exercice 7//

function createDom(element_name, text, parent) {
    const markup = document.createElement(element_name);
    markup.textContent = text;
    parent.appendChild(markup);
    return markup;
}

let euros = createDom("input", "", document.body);
createDom("label", "euros", document.body);
euros.setAttribute("id", "euros")
console.log(euros);

let francs = createDom("input", "", document.body);
createDom("label", "francs suisse", document.body);
francs.setAttribute("id", "francs suisse");
console.log(francs);



function convSomme(id, valeur) {
    if (id == "euros") {

    } else if (id == "francs suisse") {

    }
}

*/



