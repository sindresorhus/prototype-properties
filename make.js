'use strict';
var fs = require('fs');
var jsTypes = require('js-types');
var ret = {};

jsTypes.forEach(function (x) {
	ret[x] = Object.getOwnPropertyNames(global[x].prototype).sort();
});

fs.writeFileSync('proto-props.json', JSON.stringify(ret, null, '\t'));
