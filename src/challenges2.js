// Desafio 10
function techList(tech, name) {
  tech.sort(); 
  let arr = [];
  // for para trazer cada elemento do array
  for (let index = 0; index < tech.length; index += 1) {
   //montando o array de objetos para dinamico 
    arr.push({
      tech: tech[index], 
      name: name
      }) 
  }
  //condicional para relatar erro 
  if (arr.length === 0) {
    return "Vazio!"
  } else {
    return arr;
  }
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
