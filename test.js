import test from 'ava';
import m from './proto-props';

test(t => {
	t.true(Object.keys(m).length > 0);
	t.true(m.hasOwnProperty('Array'));
	t.true(m.hasOwnProperty('Number'));
	t.true(m.Array.indexOf('forEach') !== -1);
});
