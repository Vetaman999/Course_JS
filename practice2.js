let sentence = "The Quick Brown Fox Jumps Over The Lazy Dog";
let alphabet = "abcdefghijklmnopqrstuvwxyz";

function isPangram(sentence, alphabet) {
    sentence.toLowerCase().split('');

    sentence = new Set(sentence);

    sentence = Array.from(sentence).filter(l => l != ' ');

    alphabet = Array.from(alphabet)
    console.log(alphabet)

    for (let i = 0; i < alphabet.length; i++) {
        let a = alphabet[i]
        if (sentence.includes(a)) {
            return true
        }
        return false
    }
}
console.log(isPangram(sentence, alphabet))