//function 
// codigo feito na mentoria do João


function consverteNumeroRomanos (numeroRomano) {
	let numerosRomanos = {
			I: 1,
			V: 5,
			X: 10,
			L: 50,
			C: 100,
			D: 500,
			M: 1000
	};
  
	let arrayNumerosRomanos = numeroRomano.split("");
	let arrayIndoArabico = [];
	let algarismoRomano;
	let numeroFinal = 0;

	for (let index = 0; index < arrayNumerosRomanos.length; index += 1) {
		algarismoRomano = arrayNumerosRomanos[index]
		arrayIndoArabico.push(numerosRomanos[algarismoRomano])
	}
  
	for (let index = 0; index < arrayIndoArabico.length; index += 1) {
		if (arrayIndoArabico[index] < arrayIndoArabico[index+1]) {
			numeroFinal -= arrayIndoArabico[index];
		} else {
			numeroFinal += arrayIndoArabico[index];
		}
	}

 return console.log(numeroFinal);
}

consverteNumeroRomanos("DXIV")