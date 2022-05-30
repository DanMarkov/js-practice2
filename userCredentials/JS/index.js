/* index.js */
import User from "./user.js";

// class usage
let sam = new User("Sam", "Blue", 49);
console.log(sam);
sam.getFullName();
sam.getInitials();
sam.canVote();

console.log("---");

let charlie = new User("Charlie", "Doe", 13);
console.log(charlie);
charlie.getFullName();
charlie.getInitials();
charlie.canVote();