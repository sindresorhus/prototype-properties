import test from 'ava';
import protoProps from './proto-props';

test('main', t => {
	t.true(Object.keys(protoProps).length > 0);
	t.true('Array' in protoProps);
	t.true('Number' in protoProps);
	t.true(protoProps.Array.includes('forEach'));
});
