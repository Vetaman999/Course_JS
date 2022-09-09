var hola = "Hola Mundo";
let hello = "Hello World";

console.log(hola);
console.log(hello);

var musica = "Rock";
console.log("Variable Musica antes del bloque", musica);

{
    var musica = "Pop";
    console.log("Variable Musica dentro del bloque", musica);
}

console.log("Variable Musica despues del bloque", musica);
