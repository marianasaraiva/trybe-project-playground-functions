// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 === true) && (value2 === true)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arr) {
  let lastName = arr[arr.length - 1];
  let firstName = arr[0];
  return (lastName + ', ' + firstName);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((3 * wins) + (1 * ties));
}

// Desafio 6
function highestCount(arr) {
  arr.sort(function(a,b) {
    //oredenar em ordem decrescente, considerando negativo
    return b-a;
  });
  let highNumberRepete = 0;
  for(let position in arr){
    if(arr[position] === arr[position.length - 1]){
      highNumberRepete ++
    }
  }
  return highNumberRepete;
}

// Desafio 7
// Ajuda grupo do slack sobre numeros absolutos e propriedade math.abs()
// Colega Leandro Boralli.
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return "cat2"
  } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return "cat1"
  } else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(arr) {
  let resultado = [];
  for (let index = 0; index < arr.length; index += 1) {
    if ((arr[index] % 3 === 0) && (arr[index] % 5 === 0)) {
      resultado.push("fizzBuzz");
    } else if (arr[index] % 3 === 0) {
      resultado.push("fizz");
    } else if (arr[index] % 5 === 0) {
      resultado.push("buzz");
    } else {
      resultado.push("bug!")
    }
  }
  return resultado;
}

// Desafio 9
function encode(string) {
  let newPhrase = [];
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === "a") {
      newPhrase.push(1); 
    } else if (string[index] === "e") {
      newPhrase.push(2); 
    } else if (string[index] === "i") {
      newPhrase.push(3); 
    } else if (string[index] === "o") {
      newPhrase.push(4); 
    } else if (string[index] === "u") {
      newPhrase.push(5); 
    } else {
      newPhrase.push(string[index]);
    }    
  }
  return (newPhrase.join(''));
}
function decode(string) {
  let newPhrase = [];
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      newPhrase.push('a'); 
    } else if (string[index] === '2') {
      newPhrase.push('e'); 
    } else if (string[index] === '3') {
      newPhrase.push('i'); 
    } else if (string[index] === '4') {
      newPhrase.push('o'); 
    } else if (string[index] === '5') {
      newPhrase.push('u'); 
    } else {
      newPhrase.push(string[index]);
    }    
  }
  return (newPhrase.join(''));
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
