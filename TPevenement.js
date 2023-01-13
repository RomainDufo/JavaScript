console.log("TP Evenement");
/*
//Fonction pour creer element//
function createDom(element_name, text, parent) {
    const markup = document.createElement(element_name);
    markup.textContent = text;
    parent.appendChild(markup);
    return markup;
}
let navbar = createDom("nav", "------NAVBAR-------", document.body);
let ul = createDom("ul", "", navbar);
let boutonForm = createDom("button", "Afficher Formulaire", document.body);
let formulaire = createDom("form", "", document.body);
let titreLabel = createDom("label", " Ecrire votre Titre: ", formulaire);
let titreInput = createDom("input", "", formulaire);
let paragLabel = createDom("label", " Ecrire vos paragraphes: ", formulaire);
let paragInput = createDom("input", "", formulaire);
let btnEditer = createDom("button", "Editer", formulaire);
let divArticle = createDom("div", "", document.body);



function editerArticle() {
    let Div1 = createDom("div", "", document.body);
    createDom("h2", titreInput.value, Div1);
    createDom("p", paragInput.value, Div1);
    createDom("button", "supprimer", Div1);
    Article = [Titre, Paragraphe, btnSupp];
}

function editerNav() {

}
*/
/*boutonForm.style.display = 'none';

if (titreInput.value.trim == "" || paragInput.value.trim == "") {
        e.preventDefault();
    }*/


let navbar = document.createElement("nav");
window.document.body.appendChild(navbar);
navbar.textContent = "------NAVBAR-------";

let ulNav = document.createElement("ul");
navbar.appendChild(ulNav);

let boutonForm = document.createElement("button");
window.document.body.appendChild(boutonForm);
boutonForm.textContent = "Afficher Formulaire";

let formulaire = document.createElement("form");
window.document.body.appendChild(formulaire);
formulaire.hidden = true;

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

let btnEditer = document.createElement("button");
formulaire.appendChild(btnEditer);
btnEditer.textContent = "Editer";

let divArticle = document.createElement("div");
window.document.body.appendChild(divArticle);




boutonForm.addEventListener('click', function () {
    if (formulaire.style.display == 'none') {
        formulaire.style.display = 'block';
    } else {
        formulaire.style.display = 'none';
    }
});


btnEditer.addEventListener('click', function () {
    article.hidden = false;
    newArticle()
    newTitreNavbar()
});


let article = document.createElement("article");
divArticle.appendChild(article);

let titre = document.createElement("h2");
article.appendChild(titre);

let paragraphe = document.createElement("p");
article.appendChild(paragraphe);

let boutonEdit = document.createElement("button");
article.appendChild(boutonEdit);
boutonEdit.textContent = "Supprimer";

article.hidden = true;




function newArticle(event) {
    titre.textContent = titreInput.value;
    paragraphe.textContent = paragInput.value;
}




function newTitreNavbar() {
    let li = document.createElement("li");
    ulNav.appendChild(li);

    let titreNavbar = document.createElement("a");
    li.appendChild(titreNavbar);
    titreNavbar.textContent = titreInput.value;

    return false;
}


