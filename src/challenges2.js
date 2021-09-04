// Desafio 10
function techList(tech, name) {
  tech.sort();
  let arr = [];
  // for para trazer cada elemento do array
  for (let index = 0; index < tech.length; index += 1) {
    // montando o array de objetos para dinamico
    arr.push({
      tech: tech[index],
      name: name,
    });
  }
  // condicional para relatar erro
  if (arr.length === 0) {
    return 'Vazio!';
  }
  return arr;
}

// Desafio 11
function generatePhoneNumber(arr) {
  // Primeira condiçao para formar o número de telefone válido
  if (arr.length === 11) {
    // for para correr o array e guardar os numeros em uma variável
    let numbers = {};
    for (let index = 0; index < arr.length; index += 1) {
      let value = arr[index];
      // condicional para colocar o criar um objeto com o numero e a qtd de repetição
      if (numbers[value] === undefined) {
        numbers[value] = 1;
      } else {
        numbers[value] += numbers[value];
      }
    }
    // for para percorrer o objeto numbers
    for (let value in numbers) {
      // Segunda condicional para válidar número
      if (numbers[value] >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    // for para validar terceira condicional
    for (const value of arr) {
      if (arr[value] < 0 || arr[value] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    // para retirar do array e formar o numero, usei os métodos slice e join
    let ddd = arr.slice(0, 2).join('');
    let first = arr.slice(2, 7).join('');
    let second = arr.slice(7, 11).join('');
    let finishNumber = '(' + ddd + ')' + ' ' + first + '-' + second;
    return finishNumber;
  }
  return 'Array com tamanho incorreto.';
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // exercicio discutido em grupo com Samuel e Luis Gustavo, para fazer os babySteps e interpretar o enunciado da questão.
  if ((lineA < lineB + lineC)
    && (lineB < lineA + lineC)
    && (lineC < lineA + lineB)
    && Math.abs(lineA > lineB - lineC)
    && Math.abs(lineB > lineA - lineC)
    && Math.abs(lineC > lineA - lineB)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(phrase) {
  // forma de encontrar numeros em uma string - pesquisa: YoutubeJavaScript Problem: Extracting Numbers from a String.
  let reg = /\d+/g;
  let result = phrase.match(reg);
  // percorrer o array formado para transformar em number
  for (let index in result) {
    result[index] = parseInt(result[index], 10);
  }
  // fazer a soma dos numeros do array criado
  let sum = 0;
  for (let index = 0; index < result.length; index += 1) {
    sum += result[index];
  }
  // condição para verricar quantos copos de água terão.
  if (sum > 1) {
    let string1 = ' copos de água';
    return sum + string1;
  }
  let string2 = ' copo de água';
  return sum + string2;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
