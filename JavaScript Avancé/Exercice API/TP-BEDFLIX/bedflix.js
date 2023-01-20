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
            let imgModal = document.createElement("img");
            let paragPlot = document.createElement("p");

            for (let i = 0; i < tab.length; i++) {
                let img = document.createElement("img");
                let divContainer = document.getElementById("text_container_recherche");
                divContainer.appendChild(img);
                img.setAttribute("class", "img");
                img.setAttribute("id", "img" + i);
                img.setAttribute("src", tab[i].Poster);
                img.setAttribute("data-bs-target", "#exampleModal");
                img.setAttribute("data-bs-toggle", "modal");

                img.addEventListener('click', function (e) {
                    e.preventDefault();
                    console.log("image" + i);
                    let idTitre = document.getElementById("modalTitle");
                    idTitre.textContent = ` ${tab[i].Title}`;
                    let idModalBody = document.getElementById("modal-body");
                    imgModal.setAttribute("src", tab[i].Poster);
                    idModalBody.appendChild(imgModal);


                    fetch(`http://www.omdbapi.com/?i=${tab[i].imdbID}&apikey=8e6fee54`)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data)
                            let synopsis = document.getElementById("synopsis");
                            synopsis.appendChild(paragPlot);
                            paragPlot.textContent = ` ${data.Plot}`;
                        })
                        .catch(error => console.log(error));
                })
            }

        })
        .catch(error => console.log(error));
}
let image = image + i;

