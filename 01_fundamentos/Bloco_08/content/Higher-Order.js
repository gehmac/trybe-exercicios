console.log("\n        Higher Order Functions             \n");
/* 
  EXEMPLO 01:
    Essa estrutura permite que usemos funções nativas dentro de outras função
*/
const repeatCount = (number, action) => { 
  for (let count = 0; count <= number; count += 1) {
    action(count);// action === console.log || count === numero do loop 
  }
};
console.log('Exemplo 01:');
repeatCount(5, console.log); // numero e função 



/* 
  EXEMPLO 02:
*/console.log('\nExemplo 02:');

const repeatCheckPar = (number, action) => {
  for (let count = 0; count <= number; count += 1) { /* essa função tem como objetivo percorre o array*/
    action(count);
  }
};

repeatCheckPar(10, (number) => { /* o segundo parametro é uma função */
  if (number % 2 === 0) { /* vefifica se é par */
    console.log(number, 'é um numero par'); /* despara a função */
  }
});

/* 
  EXEMPLO 03:
*/console.log('\nExemplo 03:');

const repeatCheck = (number, action) => { /* callback */
  for (let count = 0; count <= number; count += 1) {
    action(count)
  }
}

const isEven = (number) => { if(number % 2 === 0) /* vefifica se é par */
  console.log(number, 'é um numero par') }
  
const isOdd = (number) => { if(number % 2 !== 0) /* vefifica se é impar */
  console.log(number, 'é um numero Impar') }

repeatCheck(7, isEven) /* chama a funação passando como parametro uma outra função */
console.log('--');
repeatCheck(7, isOdd)
console.log('\n');



/* 
  EXEMPLO 04:
*/console.log('\nExemplo 04:');

const numberGenerator = () => {
  return Math.random() * 100;
}

console.log(`Number Random Generator = ${numberGenerator}`); // posso atribuir valores
console.log("");
console.log(`Resultado da função: ${numberGenerator()}`); // função ja executada



/* 
  EXEMPLO 05:
*/console.log('\nExemplo 05:');

const calcNumbers = (number01, number02, action) => {
  action(number01, number02)
}

const sum = (numb01, numb02) => {console.log(`${numb01} + ${numb02} = ${numb01 + numb02}`)}
const sub = (numb01, numb02) => {console.log(`${numb01} - ${numb02} = ${numb01 - numb02}`)}
const div = (numb01, numb02) => {console.log(`${numb01} / ${numb02} = ${numb01 / numb02}`)}
const mult = (numb01, numb02) => {console.log(`${numb01} * ${numb02} = ${numb01 * numb02}`)}

calcNumbers(5, 7, sum)
calcNumbers(5, 7, sub)
calcNumbers(50, 5, div)
calcNumbers(5, 7, mult)