const sum = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number'){
    
    throw new Error('Os valores tem que ser numeros')
  }

  return num1 + num2;
}

console.log(sum(1,'oal'));