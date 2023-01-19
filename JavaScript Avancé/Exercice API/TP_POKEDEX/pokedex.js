let i = 0;

let btnBas = document.getElementById("btn_bas");
let btnHaut = document.getElementById("btn_haut");

btnHaut.addEventListener('click', function (e) {
    i--;
    instruction();
});

btnBas.addEventListener('click', function (e) {
    i++;
    instruction();
});

function instruction() {
    fetch(`https://pokebuildapi.fr/api/v1/pokemon/${i}`)
        .then(response => response.json())
        .then(data => {

            let tableauData = data;
            console.log(tableauData);

            let name = data.name;
            console.log(name);

            let types = data.apiTypes;
            console.log(types);

            let stats = [data.stats];
            console.log(stats);

            let image = data.image;
            console.log(image);

            //Mettre nom
            let paragName = document.getElementById("name");
            paragName.textContent = `${name}`;

            //Mettre image
            let idImage = document.getElementById("img_pokemon");
            idImage.src = image;

            //Mettre types de pokémon
            let j = 1;
            types.forEach(element => {
                console.log(element.name)
                let paragType = document.getElementById("type" + j);
                paragType.textContent = `${JSON.stringify(element.name)}`;
                j++
            });

            //Mettre statistiques du pokémon
            stats.forEach(element => {
                console.log(element.HP);
                let idHP = document.getElementById("HP");
                idHP.textContent = `${JSON.stringify(element.HP)}`;

                let idAttack = document.getElementById("Attack");
                idAttack.textContent = `${JSON.stringify(element.attack)}`;

                let idDefense = document.getElementById("Defense");
                idDefense.textContent = `${JSON.stringify(element.defense)}`;

                let idSpeAttack = document.getElementById("spe_attack");
                idSpeAttack.textContent = `${JSON.stringify(element.special_attack)}`;

                let idSpeDefense = document.getElementById("spe_defense");
                idSpeDefense.textContent = `${JSON.stringify(element.special_defense)}`;

                let idSpeed = document.getElementById("speed");
                idSpeed.textContent = `${JSON.stringify(element.speed)}`;
            })
        })
        .catch(error => console.log(error));
}


/*
let imgPokedex = document.getElementById("img_pokedex");
console.log(imgPokedex);

if (i > 0) {
    imgPokedex.style.visibility = 'hidden';
}
*/

