const carros = ["gol", "HB20", "Focus"];
const motos  = ["Biz", "R1"]

const veiculos = [...motos, ...carros,]

console.log(veiculos);

const spellCard = {
  mulorAm: "Fica em capo ate ser destruida",
  xpMade: "aumenta o poder de atk em 20pts",
}
const mosterCard = {
  mulock: attack = 20,
  medti: attack = 20,
  mmgalu: attack = 20,
  oibr: attack = 20,
}
const totalObj = {
  ...mosterCard,
  ...spellCard
}
console.log(totalObj);

console.log('\n'+'calcula o IMC (índice de massa corporal)');
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];
console.log(imc(...patientInfo));


