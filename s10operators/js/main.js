/*var name = "Aria"

var age = 25

console.log( age )

age += 3

console.log( age )

age += 12

console.log( age )

name += "Missett"

console.log( name )

name -= "Missett"

console.log( name )

var foo;

console.log( !foo ) /*true*/


/*
1 - Crear un script que reciba la dimensión de los 3 lados de un triángulo, y con base en la información recibida, determine si el triángulo en cuestión es equilátero, isóceles o escaleno. Informar el resultado mediante un alert.

2 - Crear un script para recibir 2 de los lados de un cuadrilátero, y determinar si es un cuadrado o un rectángulo. Informar el resultado mediante un alert

2.1 - Calcular el área del cuadrilátero en cuestión, e informarla a través de un alert

3 - Crear un script que pida los datos necesarios para calcular el área de un triángulo, calcular el área y entregar el resultado mediante un alert.
*/

/*
1. Crear un script para calcular el IMC (Indice de masa corporal) de cualquier persona, y determinar la composición corporal de dicha persona bajo los siguientes criterios:

Peso inferior al normal	: IMC Menos de 18.5
Normal	: IMC 18.5 – 24.9
Peso superior al normal	: IMC 25.0 – 29.9
Obesidad : IMC Más de 30.0

formula : peso / (altura ^ 2)

-pedir la altura en metros
-pedir el peso en kilos
-aplicar la fórmula
-evaluar el resultado con base en los criterios definidos
*/
/*
var height = parseFloat( prompt("Ingresa tu altura en metros: "))
var weight = parseFloat( prompt("Ingresa tu peso en kilogramos "))

var imc = weight / ( height * height )


console.log( imc )

if( imc < 18.5){
    alert("Tu IMC es inferior al normal ")
} else if ( imc >= 18.5 && imc <= 24.9 ){
    alert("Tu IMC es normal ")
} else if ( imc >= 25 && imc <= 29.9 ){
    alert("Tu IMC es un poco elevado ")
} else {
    alert("Presentas obesidad")
}*/

/*
2. Usando como referencia los siguientes datos de estaturas promedio:

            General Varón   Mujer
México	    169.9	170.0	160.8   cm's
Australia	172.6	179.2	165.9   cm's
Canadá	    171.0	178.1	163.9   cm's
Brasil	    167.3	173.6	160.9   cm's
Reino Unido	171.0	177.5	164.4   cm's

crear un script que me permita conocer si mi estatura es superior, inferior o igual al promedio dependiendo de mi país y género. Si mi país no se encuentra en la lista, indicar que no se cuenta con el dato de estatura para ese país.
-recibir el dato del país
-recibir el dato de la estatura
-comprar los datos con base en la información brindada
*/

var country = prompt("Ingresa tu país ")
var height2 = parseFloat("Ingresa tu estatura en centímetros ")
var gender = prompt("Ingresa tu género ( masculino || femenino )")

var averageHeight; 

switch ( country ){
    case "México":
                            /*condition ? result if true : result if false*/
        averageHeight = gender === "masculino" 
                            ? 170 
                            : 160.8
        
        if( height2 < averageHeight ){
            alert("tu estatura es menor al promedio")
        } else if( height2 > averageHeight ){
            alert("tu estatura es mayor al promedio")
        } else {
            alert("tu estatura es promedio")
        }
        

        break
    
    case "Australia":

        break

    case "Canadá":

        break

    case "Brasil":
        
        break

    case "Reino Unido":
        
        break

    default:
        alert("la información no se encuentra disponible")
}


/*

3. Tomando como referencia los siguientes datos de densidades:

Sustancia       Densidad (kg/m3)
Acero           7850
Cobre           8940
Oro             19300
Plata           10490
Diamante        3515

crear un script que me permita conocer el peso de un cubo de cualquier material (pedir al usuario la dimensión del lado del cubo y el material a consultar). Si el material no se encuentra en la lista, informar que no se cuentan con datos sobre la densidad de dicho material.

*/


