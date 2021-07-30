// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 

let mainArray = []
for (let index = 1; index < 26; index += 1){
    mainArray.push(index)
}

let divisao = 0
let numbdividido = 2
for (let index = 0; index < mainArray.length; index += 1){
    divisao = mainArray[index] / numbdividido
    console.log(divisao)
}