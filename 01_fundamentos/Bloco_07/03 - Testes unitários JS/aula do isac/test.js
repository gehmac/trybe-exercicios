const assert = require('assert');

const summationOf = number => {
  let summation = 0;
  if (typeof number !== 'number'){
    throw 'Os valores tem que ser numeros'
  }
  for(let index = 1; index <= number; index += 1){
    summation += index
  }
  return summation
};

// assert observa se é ua função
assert.strictEqual(typeof summationOf, 'function', 'O tipo não é uma função');

// Assert verifica se com o parâmetro 1, a summationOf retorna 1
assert.strictEqual(summationOf(1), 1, 'Ao passar 1, espero que retorne 1')

// Assert verifica se com o parâmetro 3, a summationOf retorna 3
assert.strictEqual(summationOf(3), 6, 'Ao passar 3, espero que retorne 6')

// Assert verifica se com o parâmetro 5, a summationOf retorna 15
assert.strictEqual(summationOf(5), 15, 'Ao passar 5, espero que retorne 15')

// Assert verifica se com o parametro 'str', é gerado erro!
assert.throws(() => {
  // o que for gerado aqui dentro vai gerar um erro
  summationOf('str')
})