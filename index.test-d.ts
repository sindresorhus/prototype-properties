import {expectType} from 'tsd';
import prototypeProperties = require('.');

expectType<{readonly [key: string]: readonly string[]}>(prototypeProperties);
