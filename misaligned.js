const { expect } = require('chai');

const majorColors = ['White', 'Red', 'Black', 'Yellow', 'Violet'];
const minorColors = ['Blue', 'Orange', 'Green', 'Brown', 'Slate'];

function printColorMap(
	primaryColor,
	secondaryColor,
	printColors,
	getColorsLength
) {
	printColors(primaryColor, secondaryColor);
	let colorCount = getColorsLength(primaryColor, secondaryColor);
	return colorCount;
}

function printColor(primaryColor, secondaryColor) {
	for (let i = 0; i < primaryColor.length; i++) {
		for (let j = 1; j < secondaryColor.length; j++) {
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
colorLength = getColorsCount(majorColors, minorColors);
expect(colorLength).equals(25);
console.log('All is well (maybe!)');
