'use strict';
const fs = require('fs');
const jsTypes = require('js-types');
const allKeys = require('all-keys');

const ret = Object.create(null);

for (const type of jsTypes) {
	ret[type] = [...allKeys(global[type].prototype, {includeSymbols: false})].filter(x => !x.startsWith('__')).sort();
}

fs.writeFileSync('proto-props.json', JSON.stringify(ret, null, '\t'));
