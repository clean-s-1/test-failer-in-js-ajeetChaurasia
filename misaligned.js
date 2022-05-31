const { expect } = require('chai');

const majorColors = ['White', 'Red', 'Black', 'Yellow', 'Violet'];
const minorColors = ['Blue', 'Orange', 'Green', 'Brown', 'Slate'];

function print_color_map(
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
	for (let i = 0; i < majorColors.length; i++) {
		for (let j = 0; j < minorColors.length; j++) {
			console.log(`${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`);
		}
	}
}

function getColorsCount(primaryColor, secondaryColor) {
	return primaryColor.length * secondaryColor.length;
}

result = print_color_map(majorColors, minorColors, printColor, getColorsCount);
expect(result).equals(25);
console.log('All is well (maybe!)');
