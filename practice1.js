
function isPangram() {
    let sentence = "The Quick Brown Fox Jumps Over The Lazy Dog";
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let alphabetArray = Array.from(alphabet);

    sentence = sentence.toLowerCase().split('')

    sentence = new Set(sentence)

    sentence = Array.from(sentence).filter(l => l !== ' ');

    console.log(sentence)
    console.log(alphabetArray)
    if(sentence.length == sentence.length) {
        return true
    }
    return false
}

console.log(isPangram())

/*

funciones que use:

    - .split('') --> separa cada uno de las letras en uno solo.
    - .toLoweCase() --> convierte en minusculas todo.

*/