var productsList = [
    {
        name:"producto 1",
        price:12.45,
        category:"Miscellaneous"
    },
    {
        name:"producto 2",
        price:25.13,
        category:"Vegetables"
    },
    {
        name:"producto 3",
        price:45.00,
        category:"Cloths"
    },
    {
        name:"producto 4",
        price:12500.00,
        category:"Computers"
    },
    {
        name:"producto 5",
        price:15500.00,
        category:"Computers"
    },
    {
        name:"producto 6",
        price:8729.00,
        category:"Computers"
    },{
        name:"producto 7",
        price:150.00,
        category:"Cloths"
    },{
        name:"producto 8",
        price:100.00,
        category:"Miscellaneous"
    },{
        name:"producto 9",
        price:50.00,
        category:"Vegetables"
    },{
        name:"producto 10",
        price:200.00,
        category:"Cloths"
    }
]

/*
    -quiero conocer la cantidad de productos en el array
    -quiero conocer el costo total de todos los productos del array
    -quiero conocer la cantidad de productos de cada categoría
        (Vegetables, Cloths, Miscellaneous, Computers)
    -quiero un nuevo array para cada categoría
    -quiero un nuevo array de strings que tenga lo siguiente
        [
            "El { productName } tiene un costo de { price }"
        ]
*/

const getProductsQuantity = array => array.length

let totalProducts = getProductsQuantity( productsList )

console.log( totalProducts )

const getProductsPrice = array => {
  let totalPrice = 0
  for( let i = 0; i < array.length; i++ ){
    totalPrice += array[i].price
  }

  return totalPrice
}

let totalPrice = getProductsPrice( productsList )

console.log( totalPrice )

const filterByCategory = ( array, selectedCategory )  => {
  let result = []
  for( let i = 0; i < array.length; i++ ){
    array[i].category === selectedCategory && result.push( array[i] )
  }
  return result
}

let vegetablesArray = filterByCategory( productsList, "Vegetables" )

console.log( vegetablesArray )

let computersArray = filterByCategory( productsList, "Computers" )

console.log( computersArray )

let clothsArray = filterByCategory( productsList, "Cloths" )

console.log( clothsArray )

let miscellaneousArray = filterByCategory( productsList, "Miscellaneous" )

console.log( miscellaneousArray )

let computersQuantity = getProductsQuantity( computersArray )

console.log( computersQuantity )

let totalComputerPrice = getProductsPrice( computersArray )

console.log( totalComputerPrice )

const createLabels = array => {
  let result = [];
  for( let i = 0; i < array.length; i++ ){
    let string = `El ${array[i].name} tiene un costo de ${array[i].price}`
    result.push( string )
  }
  return result 
}

let labelsArray = createLabels( productsList )

console.log( labelsArray )