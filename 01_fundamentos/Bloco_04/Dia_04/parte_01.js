let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: "Sim",
  };

  // task 01
  console.log("Bem-vinda, " + info.personagem);

  // task 02
  console.log(info)

  //task 03
for(let key in info ){
  console.log(key);
}

  //task 04
for(let key in info){
  console.log(info[key]);
}

  //task 05 
let info02 = {
  personagem: "Margarida e Tio Patinhas",
  origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas",

}

info02.recorrente= "Sim"

if (info.recorrente === "Sim" && info02.recorrente === "Sim"){
  console.log("ambas recorrente");
}
