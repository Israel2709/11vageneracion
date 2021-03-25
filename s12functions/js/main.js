/*
    calcular el valor +  iva de los siguientes costos:

    245.56
    97.45
    23.15
    54.96
    12.16
*/

function addTax( price ){
    const IVA = 1.16
    let result = price * IVA
    console.log( result )
}

addTax( 245.56 )
addTax( 97.45 )
addTax( 23.15 )
addTax( 54.96 )
addTax( 12.16 )

var myName = "Israel Salinas Martínez" /*ámbito global*/

function printMyName(){
    var myAddress = "Azcapotzalco"
    console.log( myName )
    console.log( myAddress )
    if( true ){
        console.log( myName )
        console.log( myAddress )
        var heroVar = "x"
        let unHeroVar  = "y"
        var heroVar = "xy"
        unHeroVar = "yx"

        console.log( unHeroVar )
    }

    console.log( heroVar )
    //console.log( unHeroVar )

    printMyAddress( myAddress /*"Azcapotzalco"*/)
}

function printMyAddress( direccion ){
    console.log( direccion )
}

printMyName()


function getUserName(){
    let userName = prompt("Ingresa tu nombre completo")
    
    console.log( userName )
}

/*
    -Crear una función que pida al usuario el número de koders a registrar
    
    -tantas veces como koders se deseen registrar:
        -Pedir el nombre del koder
        -Pedir el apellido del koder
        -Imprimir el nombre completo del koder
*/


/*Teniendo en cuenta la siguiente lista de músicos, imprimir únicamente las inciciales de cada músico
    input Gustavo Cerati
    output G. C.
*/


let musicians = [
    "Gustavo Cerati",
    "Juan Valdivia",
    "Roy Orbison"
]

let painters = [
    "Vincent Van Gogh",
    "Diego Rivera",
    "Remedios Varo"
]

let writers = [
    "Howard Philips Lovecraft",
    "Anne Rice",
    "Isaac Asimov",
    "José Saramago"
]

/*
    -Tomar la lista
    -Tomar el primer nombre de la lista
    -divirlo en palabras
    -tomar la primer palabra
    -extraer el primer caracter
    -escribir el primer caracter
    -agregarle ". "
    -revisar si hay siguiente palabra
        si hay, 
            tomar la siguiente palabra
            extraer el primer caracter
            escribir el primer caracter
            agregarle ". "
        si no hay
            tomar el siguiente nombre en la lista
            repetir
*/


function getInitials( fullName ){
    console.log( fullName )
    let dividedName = fullName.split(" ")
    
    let initials = "";
    for( let i = 0; i < dividedName.length; i++ ){
        let word = dividedName[i]
        //console.log( dividedName[i] )
        let initial = word.charAt(0)
        //console.log( initial )
        initial += ". "
        //console.log( initial )
        initials += initial
        console.log( initials )
    }
}

function printInitials( namesArray ){
    for( let i = 0; i < namesArray.length; i++){
        getInitials( namesArray[i] )
    }
}

printInitials( musicians )
printInitials( painters )
printInitials( writers )


/*
    -pedir al usuario la cantidad de koders a guardar
    -pedir nombre y apellido de cada koder
    -guardar cada koder en un array 
    -imprimir cada uno de los koders
*/

/*
    permitir guardar koders adicionales
    permitir borrar un koder aleatorio de la lista
*/











