export default class User {
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }

    sePresenter() {
        console.log(`L'user est ${this.nom},${this.prenom}`);
    }
}