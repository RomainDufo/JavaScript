let i = 1;

let btnBas = document.getElementById("btn_bas");
btnBas.addEventListener('click', function (e) {
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${i}`)
        .then(response => response.json())
        .then(data => {

            let tableauData = data;
            console.log(tableauData);

            let names = data.name;
            console.log(names);

            let types = data.apiTypes;
            console.log(types);

            let stats = data.stats;
            console.log(stats);

            let paragName = document.getElementById("name");
            paragName.textContent = `${names}`;
            console.log("je met un name");

            types.forEach(element => {
                console.log(element.name)
                let paragType = document.getElementById("type");
                paragType.textContent = `${JSON.stringify(element.name)}`;
                console.log("je met un type");
            });





        })
        .catch(error => console.log(error));
    i++;
});



