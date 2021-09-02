/* 
 *EXEMPLO 01:
    Posso atribuir uma função dentro de uma variável.
 */
function sum (number1, number2) {
  return number1 + number2;
}

const sumVariable = sum;

console.log(`Exemplo 01: ${sumVariable}`);



/* 
  EXEMPLO 02: 
    posso colocar uma função na chama da função
*/

/* função diga ola  */
const sayHello = () => { 
  return ('hello trybers'); 
}
/* retona uma strig apenas */

const printGreeting = (callback) => {
    console.log(`\nExemplo 02: essa função que diz "${callback()}" 
    origina da sayHello ${sayHello}`); 
    /* aqui que o log aconstece */
}

printGreeting(sayHello);/* chamei a função diga ola dentro da outra */



/* 
  EXEMPLO 03: 
    posso colocar um valor dentro da função que chamei
*/
const sumFixAmount = (amount) => { // função retorna outra função
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(`\nExemplo 03: a função "initialSum" >>>| ${initialSum} |<<< 
ou seja dentro dessa funçãoeu vou colocar um  
parametro como "4" que vai me retorna ${initialSum(4)} `);
