console.log("TP Evenement");

//Fonction pour creer element//
function createDom(element_name, text, parent) {
    const markup = document.createElement(element_name);
    markup.textContent = text;
    parent.appendChild(markup);
    return markup;
}


let navbar = createDom("nav", "----- navbar -------", document.body);
let boutonFormulaire = createDom("button", "Afficher Formulaire", document.body);

let titreInput;
let paragInput;

//Au clique du bouton "Afficher formulaire" il se passera ...//
boutonFormulaire.addEventListener('click', () => {
    let formulaire = createDom("form", "", document.body);
    let titreLabel = createDom("label", " Ecrire votre Titre: ", formulaire);
    titreInput = createDom("input", "", formulaire);
    let paragLabel = createDom("label", " Ecrire vos paragraphes: ", formulaire);
    paragInput = createDom("input", "", formulaire);
    let btnEditer = createDom("button", "Editer", formulaire);
    btnEditer.addEventListener('click', () => {
        editerArticle();
    })
})


/*
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











