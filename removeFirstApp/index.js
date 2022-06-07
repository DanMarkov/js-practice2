/**
 * @param {array} apps
 */
 const removeFirstApp = apps => {
	return apps.splice(1, 3);
}

// Sample usage - do not modify
const apps = ["Calculator", "Whatsapp", "Chrome", "Firefox"];
console.log(removeFirstApp(apps)); // ["Whatsapp", "Chrome", "Firefox"]