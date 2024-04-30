import fs from 'node:fs';
import jsTypes from 'js-types';
import allKeys from 'all-keys';

const result = Object.create(null);

for (const type of jsTypes) {
	const {prototype} = global[type];
	if (!prototype) {
		continue;
	}

	result[type] = [...allKeys(prototype, {includeSymbols: false})].filter(x => !x.startsWith('__')).sort();
}

fs.writeFileSync('prototype-properties.json', JSON.stringify(result, undefined, '\t'));
