/*
fetch("https://api.openweathermap.org/data/2.5/weather?q=Montpellier&appid=8d1ea57f5c7bb682b127c50f23b95b2b&units=${unit}")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
*/


let valueVille = document.getElementById("inputVille");

valueVille.addEventListener('change', function (e) {
    e.preventDefault();
    valueVille = valueVille.value;
    console.log(valueVille);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valueVille}&appid=8d1ea57f5c7bb682b127c50f23b95b2b&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let resultData = data.main;
            let resultSys = data.sys;
            console.log(resultData);
            //Titre pour ville
            let h3meteo = document.createElement("h3");
            let idDiv = document.getElementById("resultMeteo");
            idDiv.appendChild(h3meteo);
            h3meteo.textContent = `Ville de ${valueVille}`;
            //Je parcours mon tableau et j'integre mes LI dans ma page HTML
            let idUl = document.getElementById("listMeteo");
            idDiv.appendChild(idUl);
            let li1 = document.createElement("li");
            idUl.appendChild(li1);
            li1.textContent = `Température ${JSON.stringify(resultData.temp)}°C`;
            let li2 = document.createElement("li");
            idUl.appendChild(li2);
            li2.textContent = `Température minimum ${JSON.stringify(resultData.temp_min)}°C`;
            let li3 = document.createElement("li");
            idUl.appendChild(li3);
            li3.textContent = `Température maximum ${JSON.stringify(resultData.temp_max)}°C`;
           
            //Titre pour soleil
    
            let li4 = document.createElement("li");
            idUl.appendChild(li4);
            li4.textContent = `Lever soleil${JSON.stringify(resultSys.sunrise)}`;
        })
        .catch(error => console.log(error));
});

/*
resultData.forEach(d => {
    let idUl = document.getElementById("liste_etablissements");
    let li = document.createElement("li");
    idUl.appendChild(li);
    li.textContent = d;
    console.log(d);
});
*/