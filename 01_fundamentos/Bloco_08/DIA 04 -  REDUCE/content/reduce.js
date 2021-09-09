/* 
  ^ REDUCE: retorno da primeira na segunda e o resultado, na terceira, e assim por diante.
*/
/* 
 * EXEMPLO 01
  - soma os numeros
*/console.log(`\n  EXEMPLO 01`);

const numbers = [32, 15, 3, 2, -5, 56, 10];
const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log("o resultado é " + sumNumbers); 

/* 
 * EXEMPLO 02
  - transforma os numeros em negativos
*/console.log(`\n  EXEMPLO 02`);
