const assert = require('assert');

const names = [
  'Miguel', 'Arthur', 'Helena',
  'Davi', 'Benício', 'Júlia',
  'Nicolas', 'Lara', 'Ana Laura',
];

const getArray = (accumulator, array) => accumulator.concat(array)
const getUpCaseA = (accA, words) => (words === 'A'|| words === 'a') ? accA + 1 : accA

function containsA() {
  const splitNames =  names.reduce(getArray).split('')
  return splitNames.reduce(getUpCaseA, 0) 
}
console.log(containsA());