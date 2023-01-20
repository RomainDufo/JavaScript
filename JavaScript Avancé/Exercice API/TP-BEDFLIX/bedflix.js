let loupe = document.getElementById("loupe");



loupe.addEventListener('click', function (e) {
    e.preventDefault();
    let inputSearch = document.getElementById("barre");
    inputSearch = inputSearch.value;
    sessionStorage.setItem('search', inputSearch);
    window.location.href = 'resultat_recherche.html';
})

inputSearch = sessionStorage.getItem('search');
if (inputSearch != "" && inputSearch != null) {
    appelFetch(inputSearch);
}

function appelFetch() {
    fetch(`http://www.omdbapi.com/?s=${inputSearch}&apikey=8e6fee54`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let tab = [...data.Search]
            for (let i = 0; i < tab.length; i++) {
                let img = document.createElement("img");
                let divContainer = document.getElementById("text_container_recherche");
                divContainer.appendChild(img);
                img.setAttribute("class", "img");
                img.setAttribute("id", "img" + i);
                img.setAttribute("src", tab[i].Poster);

                img.addEventListener('click', function (e) {
                    e.preventDefault();
                    console.log("image" + i);
                    let modalBody = document.getElementById("modal-body");
                    modalBody.appendChild(img);
                    let modal = document.getElementById("modal");
                    modal.style.zIndex = 100;
                })
            }
        })
        .catch(error => console.log(error));
}
let image = image + i;

