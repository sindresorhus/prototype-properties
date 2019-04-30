'use strict';
const fs = require('fs');
const jsTypes = require('js-types');
const allKeys = require('all-keys');

const result = Object.create(null);

for (const type of jsTypes) {
	result[type] = [...allKeys(global[type].prototype, {includeSymbols: false})].filter(x => !x.startsWith('__')).sort();
}

fs.writeFileSync('proto-props.json', JSON.stringify(result, null, '\t'));
