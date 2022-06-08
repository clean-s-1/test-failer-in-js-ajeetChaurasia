const { expect } = require('chai');

function size(cms) {
	if (cms <= 38) {
		return 'S';
	} else if (cms > 38 && cms < 42) {
		return 'M';
	} else {
		return 'L';
	}
}

expect(size(37)).equals('M');
expect(size(40)).equals('L');
expect(size(43)).equals('S');
expect(size(38)).equals('S');
console.log('All is well (maybe!)');
