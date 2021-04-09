/*
{
    name:"...And Justice for All",
    band:"Metallica",
    gender:"Metal"
}
*/

const getAlbumData = () => {
    let albumObject = {}
    let fields = document.querySelectorAll("form input[type='text']")
    
    //console.log( fields )

    fields.forEach( field => {
        console.log( field.name )
        albumObject[field.name] = field.value 
        console.log( albumObject )
    })

    let select = document.getElementById("gender")
    let gender = select.options[select.selectedIndex].value

    //console.log( gender )

    albumObject = {...albumObject, gender }
    console.log( albumObject )
    saveAlbum( albumObject )

    fields.forEach( field => {
        field.value = ""
    })
}

document.getElementById("save-album").addEventListener("click", getAlbumData )

const saveAlbum = album => {
    let xhttp = new XMLHttpRequest(); /**/ 
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           console.log( xhttp.response )
           $('#save-succesful').modal('show')
            printTable( getAlbumsCollection() )
        }
    }

    xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/11g/israel/albums.json", true);

    xhttp.send( JSON.stringify(album) );
}

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

const deleteAlbum = event => {
    console.log( event.target )
    let albumKey = event.target.dataset.albumKey
    console.log( albumKey )

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

const printTable =  dataToPrint => {
    console.log( dataToPrint )
    let table = document.getElementById("albums-table")
    let index = 1

    while (table.lastElementChild) {
        table.removeChild( table.lastElementChild );
    }

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

    let buttons = document.querySelectorAll(".delete-button")

    buttons.forEach( button => {
        button.addEventListener("click", deleteAlbum )
    })
} 

printTable( getAlbumsCollection() )

