const newEmployees = (callBack) => {
  const employees = {
    id1: callBack('Pedro Guerra'), 
    id2: callBack('Luiza Drumond'), 
    id3: callBack('Carla Paiva'), 
  }
  return employees;
};

const creatEmail = (fullName) => {
  return fullName.replace(/\s/g, '_');
}

const creatPerson = (fullName) => ({
  fullName,
  email: creatEmail(`${fullName}@trybe.com`)
})

console.log(newEmployees(creatPerson));