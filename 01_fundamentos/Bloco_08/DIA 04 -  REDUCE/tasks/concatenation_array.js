const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const getArray = (accumulator, array) => accumulator.concat(array)
  return arrays.reduce(getArray)
}
console.log(flatten());
 assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);