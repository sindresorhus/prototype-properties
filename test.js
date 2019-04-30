import test from 'ava';
import prototypeProperties from './proto-props';

test('main', t => {
	t.true(Object.keys(prototypeProperties).length > 0);
	t.true('Array' in prototypeProperties);
	t.true('Number' in prototypeProperties);
	t.true(prototypeProperties.Array.includes('forEach'));
});
