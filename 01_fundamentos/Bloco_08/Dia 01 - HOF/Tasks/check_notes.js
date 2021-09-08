/* 
  ? Cria uma função que compara a nota dos alunas
*/

const right_answer = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const student_answers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkNotes = (right, student, action) => {
  let count = 0; // coloca 0 sempre que tiver uma soma
  for (let index = 0; index < right.length; index += 1){
    const countAction = action(right[index], student[index]);
    count += countAction
  }
  return count
}

const comparisonNumber = (parameterRight, parameterStudent) => {
  if (parameterRight === parameterStudent) return 1 
  return 0.5;
}


console.log(checkNotes(right_answer, student_answers, comparisonNumber))