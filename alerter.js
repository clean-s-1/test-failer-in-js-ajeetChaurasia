const { expect } = require('chai');

let alertFailureCount = 0;

function networkAlertStub(celcius) {
	console.log(`Alert! Temperature is ${celcius} degrees`);
	// Return 200 for ok
	// Return 500 for not-ok
	// stub always succeeds and returns 200
	return 200;
}

function alertInCelcius(farenheit) {
	const celcius = convertFarenheitToCelcius(farenheit);
	const returnCode = networkAlertStub(celcius);
	countAlertFailure(returnCode);
}

function convertFarenheitToCelcius(farenheit) {
	let celcius = ((farenheit - 32) * 5) / 9;
	return celcius;
}

function countAlertFailure(code) {
	if (code !== 200) {
		return (alertFailureCount += 1);
	}
}

alertInCelcius(400.5);
alertInCelcius(303.6);
console.log(`${alertFailureCount} alerts failed.`);
console.log('All is well (maybe!)');
