/* 
Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; 
 */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let atribuicao = [];

for (let index = 0; index < numbers.length; index += 1){
  if (numbers[index] % 2 != 0){
    atribuicao.push(numbers[index])
    } else {
			console.log("nenhum valor ímpar encontrado")
    }
}
console.log("Existe " + atribuicao.length + " ímpares no array")