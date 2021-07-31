// Utilize o for para imprimir os elementos da lista groceryList com o console.log() : 

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia']
for (let main = 0; main < groceryList.length; main += 1){
    let message = main + " List: " + groceryList[main]
    console.log(message)
}