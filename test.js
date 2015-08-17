'use strict';
var test = require('ava');
var protoProps = require('./proto-props');

test(function (t) {
	t.assert(Object.keys(protoProps).length > 0);
	t.assert(protoProps.hasOwnProperty('Array'));
	t.assert(protoProps.hasOwnProperty('Number'));
	t.assert(protoProps.Array.indexOf('forEach') !== -1);
});
