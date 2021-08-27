function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//Exercício 1:

function createDaysNumbers() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  const daysNumber = document.querySelector('#days')
  for(let days of dezDaysList){

    const dayListIt = document.createElement('li')
    dayListIt.innerHTML = days;
    daysNumber.appendChild(dayListIt).classList.add('day')

    if (days === 24) dayListIt.className = 'day holiday'
    if (days === 25) dayListIt.className = 'day holiday'
    if (days === 31) dayListIt.className = 'day holiday'

    if (days === 4) dayListIt.className = 'day friday'
    if (days === 11) dayListIt.className = 'day friday'
    if (days === 18) dayListIt.className = 'day friday'
    if (days === 25) dayListIt.className = 'day friday holiday'
  }
}


createDaysNumbers()

// Exercício 2:

function createButton(idButoon, nameButton) {
  let button = document.querySelector('.buttons-container')
  let pathButton = button.appendChild(document.createElement('button'))
  pathButton.setAttribute('id', idButoon)
  document.querySelector(`#${idButoon}`).innerHTML = nameButton
}

createButton("btn-holiday", "Feriados")

// Exercício 3:

function changeColor(idName){
  const id = document.getElementById(idName)
  id.addEventListener('click', function(){

    let setNewColor = "white"
    let backgroundColor = document.querySelector(`#${idName}`).style.backgroundColor;

    const select = document.querySelectorAll('.holiday')

    for (let holi of select)
    if (holi.style.backgroundColor ===  setNewColor ){
      holi.style.backgroundColor = backgroundColor;
    } else {
      holi.style.backgroundColor = setNewColor
    }
 
  })
}
changeColor ("btn-holiday")

// Exercício 4: 
createButton("btn-friday", "Sexta-feira")

//Exercício 5: 
function changeText(idName){
  const id = document.getElementById(idName)
    id.addEventListener('click', function(){

    let newText = "Sextouu"
    let fridays = [ 4, 11, 18, 25 ];

    const select = document.querySelectorAll(".friday")

    for (let key in select){
      if (select[key].innerHTML !== newText)  select[key].innerHTML = newText
      else select[key].innerHTML = fridays[key]

    }
  });
}
changeText ("btn-friday")

//Exercício 6: 

function mouseZoom() {

  const font = document.querySelector('.day').style.fontWeight;
  const size = document.querySelector('.day').style.fontSize;

  let getDay = document.querySelectorAll('.day')

  for (let day of getDay){
    day.addEventListener('mouseenter', function(event){
      event.target.style.fontSize = '30px'
      event.target.style.fontWeight = '600'
      });
    day.addEventListener('mouseout', function(event){
      event.target.style.fontWeight = font;
      event.target.style.fontSize = size;
    });
  };
};

mouseZoom()

// Exercício 7 

function newTask(task) {
  let tasks = document.querySelector('.my-tasks')
  let taskSpan = document.createElement('span')
  tasks.appendChild(taskSpan)

  taskSpan.innerHTML = task
}

newTask('Dia de projeto')

//Exercício 8 

function colorLegend (color) {
  let tasks = document.querySelector('.my-tasks')
  let creatDiv = document.createElement('div')
  
  creatDiv.className = 'task'
  creatDiv.style.backgroundColor = color
  tasks.appendChild(creatDiv)
}

colorLegend('rgb(13, 202, 220)')

//  Exercício 9: