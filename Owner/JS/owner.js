/* owner.js */

import Employee from "./employee.js";

export default class Owner extends Employee {
	getPosition() {
        return `${this.firstName} is the owner`;
      }
}