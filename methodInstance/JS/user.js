/* user.js */
export default class User {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    getFullName(){
        return "Full name here";
    }

    canVote(){
        return true;
    }

    hasVoted(){
        return false;
    }
  }