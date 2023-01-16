
$("#bouton1").click(function () {
    $("#h2Supp").hide();
});

$("#h2Supp").hover(function () {
    $("#h2Supp").addClass("h2Supp");
});

$("#lienWiki").click(function () {
    alert("Attention, site frauduleux");
});

$("#bouton1").click(function () {
    $("#lienWiki")
        .animate({ fontSize: "35px" }, 2000);

});

$.get("fichier.json", function (data) {
    console.log(data);
});

$("h2").css('background-color', 'lightblue');


$("#bouton1").on("click", function () {
    // traite l'événement de clic 
    console.log("Le bouton a été cliqué");
});

//Exercice création de slider//
$(function () {
    setInterval(function () {
        $(".slider1 ul").animate({ marginLeft: -350 }, 800, function () {
            $(this).css({ marginLeft: 0 }).find("li:last").after($(this).find("li:first"));
        })
    }, 5000);
});



