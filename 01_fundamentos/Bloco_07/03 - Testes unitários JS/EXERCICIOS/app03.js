const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
assert.ok(typeof myRemoveWithoutCopy === 'function', 'Para verificar se isso é uma função') //coloca uma função como um if
assert.strictEqual(typeof myRemoveWithoutCopy, 'function')
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), ([1, 2, 4]))
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), ([1, 2, 3, 4]))

const array = [10, 11, 12, 13]
myRemoveWithoutCopy(array, 11)
assert.notDeepStrictEqual(array, [10, 11, 12, 13])

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), ([1, 2, 3, 4]))