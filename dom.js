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
*/
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
createDom("p", "L'un des principaux buts de HTML est de structurer du texte et lui donner du sens (ce que l'on appelle la sémantique) afin que le navigateur puisse l'afficher correctement. Cet article explique comment HTML peut être utilisé pour structurer une page en ajoutant des titres et des paragraphes, en marquant des emphases, en créant des listes, et bien plus encore.", document.body);
createDom("p", "Dans cet article, nous allons commencer le voyage vers la maîtrise des styles du texte avec CSS. Nous passerons en revue les principes de base de mise en forme du texte, y compris la graisse, la famille et le style de police, les codes d'abréviation, l'alignement du texte et autres effets, ainsi que l'espacement des lignes et des lettres.", document.body);
createDom("p", "Concentrons-nous maintenant sur les chaînes de caractères - c'est le nom donné à un segment de texte en programmation. Dans cet article, nous aborderons les aspects les plus communs des chaînes de caractères que vous devez vraiment connaître quand vous apprenez JavaScript, comme créer une chaîne de caractères, échapper des guillemets dans une chaîne ou encore concaténer des chaînes.", document.body);
