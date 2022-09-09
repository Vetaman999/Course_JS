let sentence = "The Quick Brown Fox Jumps Over The Lazy Dog";

function isPangram(sentence){

    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    sentence = sentence.toLowerCase()

    alphabet = Array.from(alphabet)

    for (i = 0; i < alphabet.length; i++){
        let a = alphabet[i]
        if(sentence.includes(a)){
            return true
        }
        return false
    }
}

console.log(isPangram(sentence))