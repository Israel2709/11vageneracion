var someString = "Kodemia";
var stringLength = someString.length;

for( var i = 0; i < stringLength; i++){
    var character = someString.charAt( i );
    console.log( `la letra es ${character} y ocupa la posición ${i + 1} / ${stringLength} `)
}

/*
    var phrase = "La mejor forma de predecir el futuro es creándolo"

    1- saber la cantidad de palabras
    2- saber la cantidad de "a"
    3- crear una nueva frase usando sólo los caracteres que esten en posiciones nones
        "amjrf"
    4- crear una nueva frase usando sólo los caracteres que esten en posiciones pares


*/

var phrase = "La mejor aAáÁ forma de predecir el futuro es creándolo"

var aMatches = phrase.match(/[aá]/gi)
console.log( aMatches )

/*
    Usando la frase "La mejor forma de predecir el futuro es creándolo" lograr los siguientes resultados:

    1.- Mostrar la misma frase en snake_case
    2.- Mostrar la misma frase en kebab-case
    3.- Mostrar la misma frase con todas las vocales en mayúscula
    4.- Mostrar los primeros 10 caracteres de la frase
    5.- Mostrar los últimos 10 caracteres de la frase 
*/