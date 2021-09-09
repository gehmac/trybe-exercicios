/* 
  ^ REDUCE: retorno da primeira na segunda e o resultado, na terceira, e assim por diante.
*/
/* 
 * EXEMPLO 01
  - soma os numeros
*/console.log(`\n  EXEMPLO 01`);

const numbers = [1, 2, 2, 10, -2];
const getSum = (result, number) => {
console.log(`result: ${result}  +  number: ${number}.`);
return result + number;}
const sumNumbers = numbers.reduce(getSum);
console.table(" o resultado é " + sumNumbers); 

/* 
 * EXEMPLO 02
  - encontra o maior numero
*/console.log(`\n  EXEMPLO 02`);

const numbersEx2 = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => {
  console.log(`bigger: ${bigger} x number: ${number}`);
  return (bigger > number) ? bigger : number;
}
const bigger = numbersEx2.reduce(getBigger, 0);
console.log(" o resultado é " + bigger); // 85