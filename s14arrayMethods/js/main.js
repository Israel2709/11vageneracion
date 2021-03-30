/*
usando mentorsArray, realizar lo siguiente:
-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
-Obtener el promedio individual de cada mentor
-Obtener un array de strings con la siguiente forma:
     "Mi nombre es {nombre} y mi promedio es de {promedio}"
-Obtener la lista de mentores cuyo promedio sea mayor a 9.5
*/

var mentorsArray = [
    {
        name:"Israel Salinas Martinez",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"David Cermeño Moranchel",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Charles Silva",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Michael Villalba Sotelo",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    }
]

mentorsArray.forEach( mentor => {
    console.log( mentor ) /* => Object*/
    console.log( mentor.name )  /* => String */
})

let someArray = [
    [
        "amadeo",
        "jaime"
    ],
    [
        "oscar",
        "deleyja"
    ],
    [
        "shalem",
        "solis"
    ]
]

someArray.forEach( (item,index) => {
    console.log(`el item número ${index} es: ${item}`)
    console.log( typeof item )
    item.forEach( element => {
        console.log( element )
    } )
})

let fruits = [
    "mango",
    "uva",
    "pera"
]

/*
    ["0 mango"],
    ["1 uva"],
    ["2 pera"]
    */

let result = fruits.map( (fruit, index ) => `${index} ${fruit}`)

console.log( result )

let resultR = fruits.reduce( (accum, current, index ) => [...accum, `${index} ${current}`], [])

console.log( resultR )

let filtered = fruits.filter( (fruit, index) => fruit.charAt(0) === "p" )

console.log( filtered )

let filteredR = fruits.reduce( (accum, current, index) => current.charAt(0) === "p" ? [...accum, current] : accum, [])

console.log( filteredR)
