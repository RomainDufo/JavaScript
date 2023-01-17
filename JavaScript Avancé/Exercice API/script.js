/*
fetch("./data.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
*/


//En dessous de 50 pas de ville et au dessus proposer la ville

document.getElementById("ville").style.display = 'none';

let valuePays = document.getElementById("inputPays");
let valueVille = document.getElementById("inputVille");


valuePays.addEventListener('change', function (e) {
    e.preventDefault();
    valuePays = valuePays.value;
    console.log(valuePays);
    fetch(`http://universities.hipolabs.com/search?country=${valuePays}`)
        .then(response => response.json())
        .then(data => {
            if (data.length < 50) {
                let tabData = data;
                console.log(tabData);
            } else if (data.length > 50) {
                document.getElementById("ville").style.display = 'block';
                console.log("data plus grand que 50");
                valueVille.addEventListener('change', function (e) {
                    e.preventDefault();
                    valueVille = valueVille.value;
                    console.log(valueVille);
                    fetch(`http://universities.hipolabs.com/search?name=${valueVille}`)
                        .then(response => response.json())
                        .then(data => console.log(data))
                        .catch(error => console.error(error));
                });
            }
        })
        .catch(error => console.error(error));
});



/*
fetch(`http://universities.hipolabs.com/search?name=${valueVille}country=${valuePays}`)
        .then(response => response.json())
        .then(data => { console.log(data); })
        .catch(error => console.error(error));
*/