/* user.js */

// Class definition
export default class User {
	constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`);
        return `${this.firstName} ${this.lastName}`;
    }

    getInitials(){
        console.log(`${this.firstName[0]}${this.lastName[0]}`);
        return `${this.firstName[0]}${this.lastName[0]}`;
    }

    canVote(){
        console.log(this.age >= 18);
        return this.age >= 18;
    }
}