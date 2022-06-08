const { expect } = require('chai');

const majorColors = ['White', 'Red', 'Black', 'Yellow', 'Violet'];
const minorColors = ['Blue', 'Orange', 'Green', 'Brown', 'Slate'];

function printColorMap(
	primaryColor,
	secondaryColor,
	printColor,
	getColorsCount
) {
	printColor(primaryColor, secondaryColor);
	let colorCount = getColorsCount(primaryColor, secondaryColor);
	return colorCount;
}

function printColor(primaryColor, secondaryColor) {
	for (let i = 0; i < primaryColor.length; i++) {
		for (let j = 0; j < secondaryColor.length; j++) {
			let colorIndex = getColorIndex(primaryColor.length, i, j);
			getFormattedColorString(colorIndex, primaryColor[i], secondaryColor[j]);
		}
	}
}

function getColorsCount(primaryColor, secondaryColor) {
	return primaryColor.length * secondaryColor.length;
}

function getColorIndex(
	primaryColorLength,
	primaryColorIndex,
	secondaryColorIndex
) {
	return primaryColorIndex * primaryColorLength + secondaryColorIndex + 1;
}

function getFormattedColorString(
	colorIndex,
	primaryColorName,
	secondaryColorName
) {
	return console.log(
		`${colorIndex} | ${primaryColorName} | ${secondaryColorName}`
	);
}

result = printColorMap(majorColors, minorColors, printColor, getColorsCount);
expect(result).equals(25);
console.log('All is well (maybe!)');
