/**
 * @param {string} name
 */
 const getSlug = name => {
	return name.substring(0,15).replaceAll(" ", "-").toLowerCase() 
}

// Sample usage - do not modify
console.log(getSlug("IKEA table")); // "ikea-table"
console.log(getSlug("200cm Bed")); // "200cm-bed"
console.log(getSlug("Bedside lavalamp")); // "bedside-lavalamp"
console.log(getSlug("A B C noodles")); // "a-b-c-noodles"
console.log(getSlug("A B C noodles    cool   things")); // "a-b-c-noodles"