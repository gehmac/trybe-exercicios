/* 
  ^ MAP: manipula e modifica o email
*/

/* 
 * EXEMPLO 01
  - coloca 1 de dano em cada carta
*/
const cards = [
  {dragon: 'Infernity Doom Dragon '},
  {hidden: 'Hidden Armory'},
  {march: 'March of the Monarchs'},
]

const sumDamege = (cards) => 1;

const listCards = cards.map((buff) => {return {card: buff, damege: sumDamege(cards)}} )
console.log(listCards);
console.log('\n');


/* 
 * EXEMPLO 02
  - gerador de fullname
*/

const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = persons.filter((person) => `${person.firstName} ${person.lastName}`);
// retorna os objetos com as informações encontradas

const fullNamesMap = persons.map((person) => `${person.firstName} ${person.lastName}`);
// retornas um array com als alterações pedidas

console.log(fullNames, fullNamesMap);

/* 
 * EXEMPLO 03
  - transforma os numeros em negativos
*/console.log(`\n  EXEMPLO 03`);

const numbers = [1, 2, 3, 4, -5];
const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers);

/* 
 * EXEMPLO 04
  - transforma os numeros em negativos
*/console.log(`\n  EXEMPLO 04`);

const cardMosters = ['Obelisk the Tormentor', 'Slifer the Sky Dragon', 'The Winged Dragon of Ra ']
const godDamege = [4000, 'x0000', '????']

const updateCards = (cards, damegeGods) => cards.map((card, damege) => (
  { [card]: damegeGods[damege] } // unio os dois arrays dando o valor do dano para cada um deles
));

console.log(updateCards(cardMosters, godDamege));