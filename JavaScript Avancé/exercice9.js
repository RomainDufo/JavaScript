//Exercice 9//

let numero = 1;
const duree = 1000;
const nombreSlides = 4;


$("#suivant").click(function () {
    $("#image" + numero).fadeOut(duree);
    numero = numero + 1;
    if (numero > nombreSlides) {
        numero = 1;
    }
    $("#image" + numero).fadeIn(duree);

});


$("#precedent").click(function () {
    $("#image" + numero).fadeOut(duree);
    numero = numero - 1;
    if (numero < 1) {
        numero = nombreSlides;
    }
    $("#image" + numero).fadeIn(duree);

});