/**
 * @param {string} text
 */
 const getUnit = text => {
	return text.includes("°F") ? "Fahrenheit" : text.includes("°C") ? "Celsius" : "N/A"
}

// Sample usage - do not modify
console.log(getUnit("It was 90°F yesterday")); // Fahrenheit
console.log(getUnit("Why is it 20°C")); // Celsius
console.log(getUnit("It is expected to be cold.")); // N/A