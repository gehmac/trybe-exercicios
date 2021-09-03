/* 
  Uma função que retorna outra função com um obj, 
  e executa com os parametros da segunda função
*/

const newEmployees = (callBack) => {  // recebe a função (o nome nao precisa ser o mesmo da função)
  const employees = {
    id1: callBack('Pedro Guerra'),  // passs como parametro o nome das pessoas 
    id2: callBack('Luiza Drumond'), // funcionaria da mesma forma com o recebimento de um banco de dados
    id3: callBack('Carla Paiva'), 
  }
  return employees;
};

const creatEmail = (fullName) => {
  return fullName.replace(/\s/g, '_');
  /* a primeira parte tira os espaços
  a segunda parte eu coloco pelo que vai substituir */
}

const creatPerson = (fullName) => ({ // essa e a regra do negócio
  fullName,
  email: creatEmail(`${fullName}@trybe.com`)
})

console.log(newEmployees(creatPerson));