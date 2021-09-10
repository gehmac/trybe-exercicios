
// ^ array standard
const numbers = [2, 3, 4, 6, 8, 12, 24]

// * ultilizando for
let sumFor = 0
for (let index = 0; index < numbers.length; index += 1){
  sumFor += numbers[index]
}
console.log(`Ultilizando o for para somar o array, o resultado é: ${sumFor}.\n`);

// * ultilizando forEach
let sumEach = 0;
numbers.forEach((number) => sumEach += number)
console.log(`Ultilizando o forEach para somar o array, o resultado é: ${sumEach}.\n`);

// * ultilizando reduce
const numbersReduce = numbers.reduce((acumulador, number) => acumulador + number, 0)
console.log(`Ultilizando o reduce para somar o array, o resultado é: ${numbersReduce}.\n`);

// ^ Exemplo 2
console.log('exemplo 02:');

// const assert = require('assert')
const quote = [ 'So', 'long', 'and', 'thanks', 'for', 'all', 'the', 'fish' ]

// const expected = 'So long and thanks for all the fish'
const actual = quote.reduce((acumulator, word) => {
  return `${acumulator} ${word}`
})

console.log(actual);
// assert.strictEqual(actual, expected)

// * usando join
console.log(quote.join(' ') + ' (usando o join)');


// ^ Exemplo 3
// constrtuindo um obj
console.log('\n Exemplo 03');
const players = [
  {fullName: 'Revolta', email: 'Revolta@gmail.com'},
  {fullName: 'Tokes', email: 'Tokes@gmail.com'},
  {fullName: 'Tinous', email: 'Tinous@gmail.com'},
  {fullName: 'Luci', email: 'Luci@gmail.com'},
]

const getplayer = (accumulator, player) => {
  accumulator[player.fullName] = player.email; 
  return accumulator
}

const playersObjectos = players.reduce(getplayer, {})
console.log(playersObjectos);
