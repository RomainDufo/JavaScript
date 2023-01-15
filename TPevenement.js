console.log("TP Evenement");
/*
//Fonction pour creer element//
function createDom(element_name, text, parent) {
    const markup = document.createElement(element_name);
    markup.textContent = text;
    parent.appendChild(markup);
    return markup;
}
*/

let navbar = document.createElement("nav");
window.document.body.appendChild(navbar);
navbar.textContent = "";

let ulNav = document.createElement("ul");
navbar.appendChild(ulNav);

let boutonForm = document.createElement("button");
window.document.body.appendChild(boutonForm);
boutonForm.textContent = "Afficher Formulaire";

let formulaire = document.createElement("form");
window.document.body.appendChild(formulaire);
formulaire.style.display = 'none';

let titreLabel = document.createElement("label");
formulaire.appendChild(titreLabel);
titreLabel.textContent = "Ecrire votre Titre: ";

let titreInput = document.createElement("input");
formulaire.appendChild(titreInput);
titreInput.textContent = "";

let paragLabel = document.createElement("label");
formulaire.appendChild(paragLabel);
paragLabel.textContent = "Ecrire vos paragraphes: ";

let paragInput = document.createElement("input");
formulaire.appendChild(paragInput);
paragInput.textContent = "";

let articlesTab = [];
let navbarsTab = [];
let navbarClassTab = [];
let articleClassTab = [];

// Bouton afficher formulaire //
boutonForm.addEventListener('click', function () {
    if (formulaire.style.display == 'none') {
        formulaire.style.display = 'block';
    } else {
        formulaire.style.display = 'none';
        paragInput.value = "";
        titreInput.value = "";
    }
});

let btnEditer = document.createElement("button");
formulaire.appendChild(btnEditer);
btnEditer.textContent = "Editer";
btnEditer.setAttribute("id", "btnEditer");

document.getElementById("btnEditer").addEventListener("click", function (event) {
    event.preventDefault();
    newArticle();
    newTitreNavbar();
    formulaire.style.display = 'none';
    paragInput.value = "";
    titreInput.value = "";
});



// Fonction créer un nouvelle article //
let incrementationArticle = 1;

function newArticle(event) {
    let article = document.createElement("article");
    document.body.appendChild(article);

    let titre = document.createElement("h2");
    article.appendChild(titre);
    titre.textContent = titreInput.value;

    let paragraphe = document.createElement("p");
    article.appendChild(paragraphe);
    paragraphe.textContent = paragInput.value;

    let boutonSupp = document.createElement("button");
    article.appendChild(boutonSupp);
    boutonSupp.textContent = "Supprimer";

    articlesTab.push(article);


    let idBouton = "boutonSupp" + incrementationArticle;
    let idArticle = "article" + incrementationArticle;
    let clas = "article" + incrementationArticle;
    incrementationArticle++;
    article.setAttribute("class", clas);
    article.setAttribute("id", idArticle)
    boutonSupp.setAttribute("class", clas);
    boutonSupp.setAttribute("id", idBouton)
    console.log(article, boutonSupp);

    document.getElementById(idBouton).addEventListener("click", function () {
        article.remove();
        let supp = document.getElementById(idArticle);
        supp.remove();
    });

};



// Fonction mettre un nouveau titre dans une navbar//
let incrementationNav = 1;

function newTitreNavbar() {
    let li = document.createElement("li");
    ulNav.appendChild(li);

    let titreNavbar = document.createElement("a");
    li.appendChild(titreNavbar);
    titreNavbar.textContent = titreInput.value;

    navbarsTab.push(titreNavbar);

    let clas = "article" + incrementationNav;
    let href = "#article" + incrementationNav;
    titreNavbar.setAttribute("href", href);
    li.setAttribute("class", clas);
    li.setAttribute("id", clas);
    incrementationNav++;
    console.log(li);
}












