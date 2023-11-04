'use strict';
const fs = require('fs');
const jsTypes = require('js-types');
const allKeys = require('all-keys');

const result = Object.create(null);

for (const type of jsTypes) {
	const prototype = global[type].prototype;
	if (!prototype) {
		continue;
	}

	result[type] = [...allKeys(prototype, {includeSymbols: false})].filter(x => !x.startsWith('__')).sort();
}

fs.writeFileSync('proto-props.json', JSON.stringify(result, undefined, '\t'));
