let single = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3 },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

let fullname = single.name + " " + single.lastName 

console.log("A jogadora " + single.name + " " +single.lastName + " tem " + single.age + " anos de idade")
console.log("A jogadora " + fullname + " foi eleita a melhor do mundo por " + single['bestInTheWorld'].length + " vezes")
console.log("A jogadora possui " + single.medals['golden'] + " medalhas de ouro e " + single.medals['silver']  + " medalhas de prata.");
