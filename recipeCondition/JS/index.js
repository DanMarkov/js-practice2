/* index.js */
import Recipe from "./recipe.js";

// class usage
let pasta = new Recipe("Pasta", 700);
console.log(pasta);
console.log(pasta.isLowCaloric());
console.log(pasta.isHighCalories());

let salad = new Recipe("Salad", 350);
console.log(salad);
console.log(salad.isLowCaloric());
console.log(salad.isHighCalories());