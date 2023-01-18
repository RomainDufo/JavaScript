/*
fetch("https://api.openweathermap.org/data/2.5/weather?q=Montpellier&appid=8d1ea57f5c7bb682b127c50f23b95b2b&units=${unit}")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
*/



let boutonForm = document.getElementById("boutonTrans");

let idDiv = document.getElementById("resultMeteo");


let idUl = document.getElementById("listMeteo");
let idTemperature = document.getElementById("temperature");


let li1 = document.createElement("li");
idTemperature.appendChild(li1);

let li3 = document.createElement("li");
idUl.appendChild(li3);
li3.setAttribute("class", "liMeteo");
li3.setAttribute("id", "tempMax");

let li2 = document.createElement("li");
idUl.appendChild(li2);
li2.setAttribute("class", "liMeteo");
li2.setAttribute("id", "tempMin");

let li4 = document.createElement("li");
idUl.appendChild(li4);
li4.setAttribute("id", "degresVent");



boutonForm.addEventListener('click', function (e) {
    e.preventDefault();
    let valueVille = document.getElementById("inputVille");
    valueVille = valueVille.value;
    console.log(valueVille);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valueVille}&appid=8d1ea57f5c7bb682b127c50f23b95b2b&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let resultData = data.main;
            let resultCloud = data.clouds;
            let resultWind = data.wind;

            console.log(resultData);
            console.log(resultCloud);
            console.log(resultWind);

            li1.textContent = `${JSON.stringify(resultData.temp)}°`;

            let imgMax = document.createElement("img");
            idUl.appendChild(imgMax);
            imgMax.setAttribute("src", "fleche-vers-le-haut.png");
            imgMax.setAttribute("id", "imgMax");

            li3.textContent = `${JSON.stringify(resultData.temp_max)}°C`;

            let imgMin = document.createElement("img");
            idUl.appendChild(imgMin);
            imgMin.setAttribute("src", "fleche-vers-le-bas.png");
            imgMin.setAttribute("id", "imgMin");

            li2.textContent = `${JSON.stringify(resultData.temp_min)}°C`;

            let vent = resultWind.deg;
            let direction = boussole(vent);
            li4.textContent = `Vent ${direction}`;
        })
        .catch(error => console.log(error));
});

function boussole(variable) {
    if (variable >= 340 && variable == 0 && variable <= 25) {
        console.log("Nord");
        return "Nord"
    } else if (variable >= 26 && variable <= 61) {
        console.log("Nord-Est");
        return "Nord-Est"
    } else if (variable >= 62 && variable <= 112) {
        console.log("Est");
        return "Est"
    } else if (variable >= 113 && variable <= 154) {
        console.log("Sud-Est");
        return "Sud-Est"
    } else if (variable >= 155 && variable <= 200) {
        console.log("Sud");
        return "Sud"
    } else if (variable >= 201 && variable <= 244) {
        console.log("Sud-Ouest");
        return "Sud-Ouest"
    } else if (variable >= 245 && variable <= 290) {
        console.log("Ouest");
        return "Ouest"
    } else if (variable >= 291 && variable <= 339) {
        console.log("Nord-Ouest");
        return "Nord-Ouest"
    }
}

