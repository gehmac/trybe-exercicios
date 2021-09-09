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
const sumNumbers = numbers.reduce(getSum, 0);
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



/* 
 * EXEMPLO 03
  - some o numeros pares
*/console.log(`\n  EXEMPLO 03`);

const numbersOfEven = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0
const sumpPair = (currentValue, number) => {
console.log(`${currentValue} - ${number}`);
return currentValue + number}

const sumNumber1 = (array) => array.filter(getEven).reduce(sumpPair)

console.log(" o resultado é " + sumNumber1(numbersOfEven));


/* 
 * EXEMPLO 03.1
  - some o numeros pares
*/console.log(`\n  EXEMPLO 03.1`);

const sumpPair2 = (currentValue, number) => {
console.log(`${currentValue} - ${number}`);
return (number % 2 === 0) ?  currentValue + number : currentValue}

const sumNumber2 = (array) => array.reduce(sumpPair2, 0)

console.log(" o resultado é " + sumNumber2(numbersOfEven));