/* 
* Retorna o resultado do sorteio 
*/
const checkNumber = (myNumber, number) => myNumber === number;
//  a função acima apenas compara o valor

const win = (person) => `${person}, parabéns você ganhou o premio!` /* mensagem 01 */
const loser = (person) => `${person}, infelizmente não foi dessa vez!`/* mensagem 02 */
const sortition = (person, callback ) => { /* recebe como paramentro a função checkNumber */
  const nameSort = person.fullname
  const number = Math.floor(Math.random() * 5 + 1)
  console.log(`O numero sorteado foi: ${number}.`);

  return callback(person.sortNumber, number) ? win(nameSort) : loser(nameSort);
  /* executo a função e ja ultilizo operador ternário */
}

const person = (fullname, number) => ({
  fullname,
  sortNumber: number,
})


console.log(`${sortition(person('Lucas Morato', 3), checkNumber)}`);