let previewObject = {
    title: "Sample Title",
    content: "Sample Content",
    cover: "https://i.stack.imgur.com/y9DpT.jpg"
}

setPreview = previewObject => {
    let { title, content, cover } = previewObject

    $("#preview-card .title").text(title)
    $("#preview-card .content").text(content)
    $("#preview-card .cover").attr("src", cover)
}

setPreview(previewObject)

$("#preview-form input, #preview-form textarea").on("keyup", event => {
    let property = event.target.name
    let value = event.target.value

    previewObject[property] = value
    setPreview(previewObject)
})

let carsCollection = {}

const getCars = () => {
    $.ajax({
        method: "GET",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/jaime/cars/.json",
        success: response => {
            carsCollection = response
        },
        error: error => {
            console.log(error)
        },
        async: false
    })
}

getCars()

console.log(carsCollection)


printCars = data => {
    $("#car-wrapper").empty();
    for (car in data) {
        let { brand, model, transmission } = data[car]

        let carCard = ` 
        <div class="col-12 col-md-3">
            <div class="card">
                <div class="card-body">
                    <p class="card-text">${brand}</p>
                    <p class="card-text">${model}</p>
                    <p class="card-text">${transmission}</p>
                </div>
            </div>
        </div>`
        $("#car-wrapper").append( carCard )
    }
}

//printCars( carsCollection )
/*
{
    -MYx3yRCkxgGyOrJQOUM: {
        brand: " Nissan", model: "March", transVal: "manual"
    },
    -MYx4COgfg9HRbnThRVy: {
        brand: " Nissan", model: "Versa", transVal: "automatic"
    },
}
*/

const filterByBrand = ( brand, data ) => {
    let result = Object.keys( data ).reduce( ( accum, current ) => {
        console.log( data[ current ])
        let car = data[current]
        car.brand.trim() === brand && ( accum[ current ] = car )
        return accum    
    },{})

    console.log( "result", result )
}

filterByBrand("Nissan", carsCollection ) 

let database = firebase.database()

console.log( database )

let carsRef = database.ref("carsCollection")

console.log( carsRef )

carsRef.on('value', snapshot => {
    console.log( snapshot )
    console.log( snapshot.val() )
    printCars( snapshot.val() )
})