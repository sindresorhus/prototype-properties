'use strict';
const fs = require('fs');
const jsTypes = require('js-types');
const allPropertyNames = require('all-property-names');

const ret = Object.create(null);

for (const type of jsTypes) {
	ret[type] = [...allPropertyNames(global[type].prototype)].filter(x => !x.startsWith('__')).sort();
}

fs.writeFileSync('proto-props.json', JSON.stringify(ret, null, '\t'));
