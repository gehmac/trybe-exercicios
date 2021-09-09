/* 
  ^ FILTER: percorre array e retorna os resultados _TRUE_
*/

/* 
 * EXEMPLO 01
  - Encontra o numero par
*/
const numbers = [19, 21, 30, 3, 45, 22, 15];
const isEven = numbers.filter((number) => number % 2 === 0);
isEven.forEach((numberEven) => console.log(`O numero [${numberEven}] é par`))

/* 
 * EXEMPLO 02
  - recebe um obj e lista os true
*/

const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) => (
  arrayOfPeople.filter((people) => (people.age < 18))
);

console.log(verifyAgeDrive(objPeople));

/* 
 * EXEMPLO 03
  - remove nome de uma lista
*/

const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) => //hof
  listStudents.filter((student) => student !== name);

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents); //retira um aluno
console.log(newListStudents); 
