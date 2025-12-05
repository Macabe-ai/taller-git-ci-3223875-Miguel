import assert from 'assert';
import suma from '../src/app.js';

assert.strictEqual(suma(2, 3), 5);
assert.strictEqual(suma(10, 5), 15);
assert.strictEqual(suma(-1, 1), 0);
