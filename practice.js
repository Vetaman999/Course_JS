
let sentence = "The Quick Brown Fox Jumps Over The Lazy Dog"

sentence = sentence.toLowerCase() // para convertir en minusculas
    .split('')  // llevar todo en un arreglo
    .sort() // ordenar 

sentence = [...new Set(sentence)] // eliminar repetidos

sentence = sentence.filter(letter => letter !== ' ')

console.log(sentence.length)