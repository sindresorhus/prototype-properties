import prototypePropertiesJson = require('./prototype-properties.json');

/**
List of prototype properties for [JavaScript types](https://github.com/sindresorhus/js-types).

@example
```
import prototypeProperties from 'prototype-properties';

console.log(prototypeProperties);
// {
// 	Array: [
// 		'length',
// 		'constructor',
// 		'toString',
// 		'toLocaleString',
// 		'join',
// 		'pop',
// 		…
// 	],
// 	ArrayBuffer: [
// 		'constructor',
// 		'byteLength',
// 		'slice'
// 	],
// 	…
// }
```
*/
declare const prototypeProperties: typeof prototypePropertiesJson;

export = prototypeProperties;
