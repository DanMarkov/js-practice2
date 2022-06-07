/**
 * @param {string[]} user
 */
 const getFullName = user => {
	const [firstName, secondName] = user;
    return `${firstName} ${secondName}`;
}

// Sample usage - do not modify
console.log(getFullName(["Sam", "Blue"])); // "Sam Blue"
console.log(getFullName(["Alex", "Green"])); // "Alex Green"