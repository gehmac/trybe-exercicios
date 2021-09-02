const assert = require('assert');

/* assert.strictEqual(50, 50); // Sem erros: 50 === 50
assert.strictEqual(50, 70); // AssertionError: 50 === 70 */

function division(x, y) {
  return x / y;
}

const expected = division(9, 3);
assert.notStrictEqual(expected, 3, '')
// assert.strictEqual(3, 3, 'Nove dividido por três é igual a três');
