/* 
  ^ Promise:
  * - é executada, ela entra automáticamente no estado PENDING
  * - FULFILLED, se ocorreu tudo certo com sua execução
  * - REJECTED, se ocorreu algum erro
  
*/

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    return reject((`Que fracasso =( Nosso número foi ${number}`));
  }
  resolve((`Que sucesso =) nosso número foi ${number}`));
  console.log('\n\n' )
}); //^mesagem de erro proposital

/* 

* Gestores de fluxo 

*/

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg));