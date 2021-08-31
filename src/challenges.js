// Desafio 1
function compareTrue(value1, value2) {
  if((value1 === true) && (value2 === true)){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arr) {
  let lastName = arr[arr.length-1];
  let firstName = arr[0];
  return (lastName + ', ' + firstName);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((3*wins) + (1*ties));
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
//Ajuda grupo do slack sobre numeros absolutos e propriedade math.abs()
//Colega Leandro Boralli.
function catAndMouse(mouse, cat1, cat2){
  if(Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)){
    return "cat2"
  }else if(Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
    return "cat1"
  }else{
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(arr){
  let resultado =[];
  for (let index = 0; index < arr.length; index += 1){
    if((arr[index] % 3 === 0) && (arr[index] % 5 === 0)){
      resultado.push("fizzBuzz");
    }else if(arr[index] % 3 === 0){
      resultado.push("fizz");
    }else if(arr[index] % 5 === 0){
      resultado.push("buzz");
    }else{
      resultado.push("bug!")
    }
  }
  return resultado;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
