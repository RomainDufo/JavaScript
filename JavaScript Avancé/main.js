import addition from "./math.js";
console.log(addition(1, 2));

import tab from "./data.js"
console.log(tab);

import Admin from "./admin.js";
import User from "./user.js";

let User1 = new User("Dufour", "Romain");
console.log(User1);
User1.sePresenter();

let Admin1 = new Admin("Commercial", "Lefevre", "Lili");
Admin1.sePresenter();