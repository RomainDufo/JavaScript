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



let Tab = [1,2,3];
let Miroir = [...Tab];

console.log("Slice",Tab1=Tab.slice(0,2));
console.log("Reverse",Tab1.reverse());
console.log("Miroir",Miroir);

for(let i=0; i<Tab1.length; i++){
    Miroir.push(Tab1[i]);
}

console.log(Miroir);


let tab= [1,8,9,8,-9,-3,0];

function returnNombre(tab){
    return tab.filter( n => n >= 0 ); 
}

console.log (returnNombre(tab));

*/
let tab = [1,5,6,8,9,8]
function isMultiple(tab,nombre){
    for(let i=0; i<tab.length; i++){
        console.log(tab.filter(n => tab[i] %nombre));
    }
} 