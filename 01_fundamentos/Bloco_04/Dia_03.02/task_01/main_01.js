/*
1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n 
*/

let n = 5
for (let i = 0; i < n; i++) {
 	let star = "*"
	for (let linha = 0; linha < 5; linha += 1){
		star += "*"
	}

 console.log (star)
}