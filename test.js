import test from 'ava';
import m from './proto-props';

test(t => {
	t.true(Object.keys(m).length > 0);
	t.true('Array' in m);
	t.true('Number' in m);
	t.true(m.Array.indexOf('forEach') !== -1);
});
