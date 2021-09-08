/* Criado um obj com uma função */

const person = {
  name: 'Geovanni',
  lastName: 'Cardoso',
  greet: function(callBack){  /* torna dinamica não se importa com as outras funções */
    const mensagem = 'Oiii!!!';
    return `${mensagem} ${callBack}`
  }
}

const send = person.greet

const formalGreet = () => 'Tudo bom?'
const badGreet = () => 'Não fale comigo, que estou poucas'

console.log(send(formalGreet()));