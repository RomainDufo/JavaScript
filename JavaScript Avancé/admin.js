import User from "./user.js";

export default class Admin extends User {
    constructor(role, nom, prenom) {
        super(nom, prenom);
        this.role = role;
    }

    sePresenter() {
        console.log(`L'admin ${this.nom},${this.prenom} est un ${this.role}`);
    }
}