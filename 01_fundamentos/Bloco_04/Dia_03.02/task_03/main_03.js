// 3- Agora inverta o lado do triângulo.

let n = 5
let atribuicao = '';

for (let i = 0; i < n; i += 1) {
	for (let main = 1; main <= n; main += 1){
		if (main >= n-i){
			atribuicao += '*'		
		} else {
			atribuicao += ' '
		}
	}
	console.log(atribuicao)
	atribuicao = ''
}

/*
    *
   **
	***
 ****
*****
*/