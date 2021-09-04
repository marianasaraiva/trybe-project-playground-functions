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
  }
  return arr;
}

// Desafio 11
function generatePhoneNumber(arr) {
  //Primeira condiçao para formar o número de telefone válido
  if (arr.length === 11){
    //for para correr o array e guardar os numeros em uma variável
    let numbers = {};  
    for (let index = 0; index < arr.length; index += 1) {
      let value = arr[index];
      // condicional para colocar o criar um objeto com o numero e a qtd de repetição
      if (numbers[value] === undefined) {
        numbers[value] = 1
      } else {
        numbers[value] = numbers[value] + 1;
      }
    }
    // for para percorrer o objeto numbers
    for (let value in numbers) {
      // Segunda condicional para válidar número
      if (numbers[value] >= 3) {
        return 'não é possível gerar um número de telefone com esses valores'
      }
    }
    //for para validar terceira condicional
    for (const value of arr) {
      if (arr[value] < 0 || arr[value] >9){
        return 'não é possível gerar um número de telefone com esses valores'
      }
    }
    //para retirar do array e formar o numero, usei os métodos slice e join
    let ddd = arr.slice(0,2).join('');
    let first = arr.slice(2,7).join(''); 
    let second = arr.slice(7,11).join(''); 
    let finishNumber = '(' + ddd + ')' + ' ' + first + '-' + second;
    return finishNumber
  } else {
    return "Array com tamanho incorreto."
  }
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
