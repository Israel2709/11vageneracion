/*
{
    name:"...And Justice for All",
    band:"Metallica",
    gender:"Metal"
}
*/

/*Función para obtener la información del disco*/
const getAlbumData = () => {
    /*creamos el objeto que llenaremos con los datos del disco*/
    let albumObject = {}

    /*agrupamos los inputs de tipo texto para iterarlos*/
    let fields = document.querySelectorAll("form input[type='text']")
    
    //console.log( fields )

    /*por cada campo creamos una propiedad en el objeto con el nombre y valor del input*/
    fields.forEach( field => {
        console.log( field.name )
        albumObject[field.name] = field.value 
        console.log( albumObject )
    })

    /*Extraemos el género del disco desde el dropdown*/
    let select = document.getElementById("gender")
    let gender = select.options[select.selectedIndex].value

    //console.log( gender )

    /*Agregamos el género al objeto del disco*/
    albumObject = {...albumObject, gender }
    console.log( albumObject )
    
    /*Corremos la función que guarda el disco*/
    saveAlbum( albumObject )

    /*vaciamos el formulario*/
    fields.forEach( field => {
        field.value = ""
    })
}

/*agregamos el listener al botón que extrae los datos del formulario*/
document.getElementById("save-album").addEventListener("click", getAlbumData )

/*Petición para guardar el disco en la base de datos*/
const saveAlbum = album => {
    let xhttp = new XMLHttpRequest(); /**/ 
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           console.log( xhttp.response )
           /*Mostramos la modal de confirmación*/
           $('#save-succesful').modal('show')

           /*Actualizamos la tabla*/
            printTable( getAlbumsCollection() )
        }
    }

    xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/11g/israel/albums.json", true);

    xhttp.send( JSON.stringify(album) );
}

/*Función para traer la colección de discos desde la base de datos*/
const getAlbumsCollection = () => {
    let albumsCollection;
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log( xhttp.response )
            albumsCollection = JSON.parse( xhttp.response)
        }
    }

    xhttp.open("GET", "https://ajaxclass-1ca34.firebaseio.com/11g/israel/albums.json", false );

    xhttp.send();

    return albumsCollection    
}

/*Función para borrar un disco*/
const deleteAlbum = event => { /*recibimos como parámetro el botón al que se le hace click*/
    console.log( event.target )
    /*extraemos la llave del disco*/
    let albumKey = event.target.dataset.albumKey
    console.log( albumKey )

    /*lanzamos la petición para borrar el disco*/
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log( xhttp.response )
            printTable( getAlbumsCollection() )
        }
    }

    xhttp.open("DELETE", `https://ajaxclass-1ca34.firebaseio.com/11g/israel/albums/${albumKey}/.json`, false );

    xhttp.send();
}

/*Función que imprime la tabla*/
const printTable =  dataToPrint => {
    console.log( dataToPrint )
    let table = document.getElementById("albums-table")
    let index = 1

    /*limpiamos la tabla antes de imprimirla*/    
    while (table.lastElementChild) {
        table.removeChild( table.lastElementChild );
    }

    /*iteramos en la lista de discos y creamos los elementos correspondientes de cada fila*/
    for( key in dataToPrint ){
        console.log( key )
        console.log( dataToPrint[key] )

        let { name, gender, band } = dataToPrint[key]

        let albumRow = document.createElement("tr")

        let indexTd = document.createElement("td")
        let nameTd = document.createElement("td")
        let bandTd = document.createElement("td")
        let genderTd = document.createElement("td")
        let buttonTd = document.createElement("td")

        let indexText = document.createTextNode( index )
        let nameText = document.createTextNode( name )
        let bandText = document.createTextNode( band )
        let genderText = document.createTextNode( gender )

        let deleteButton = document.createElement("button")
        deleteButton.classList = "btn btn-outline-danger delete-button"
        deleteButton.dataset.albumKey = key

        let buttonText = document.createTextNode("Borrar")

        deleteButton.appendChild(buttonText)

        indexTd.appendChild( indexText )
        nameTd.appendChild( nameText )
        bandTd.appendChild( bandText )
        genderTd.appendChild( genderText )
        buttonTd.appendChild( deleteButton )

        albumRow.appendChild(indexTd)
        albumRow.appendChild(nameTd)
        albumRow.appendChild(bandTd)
        albumRow.appendChild(genderTd)
        albumRow.appendChild(buttonTd)

        table.appendChild(albumRow)
        index++
    }

    /*agrupamos todos los botones*/
    let buttons = document.querySelectorAll(".delete-button")

    /*agregamos el listener a cada botón*/
    buttons.forEach( button => {
        button.addEventListener("click", deleteAlbum )
    })
} 

printTable( getAlbumsCollection() )

