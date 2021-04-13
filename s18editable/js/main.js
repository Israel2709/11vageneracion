const getAlbums = () => {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let albums = JSON.parse(xhttp.responseText)
            console.log(albums)
            printCards( albums )
        }
    }
    xhttp.open("GET", "https://ajaxclass-1ca34.firebaseio.com/11g/israel/albums/.json", true);

    xhttp.send();
}

const activateEdition = event => {
    let albumKey = event.target.dataset.albumKey
    document.getElementById("save-changes").dataset.albumKey = albumKey
    console.log( albumKey )
    $("#edition-modal").modal("show")

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let album = JSON.parse(xhttp.responseText)
            console.log(album)

            Object.keys( album ).forEach( key => {
                console.log( key )
                document.querySelector(`#edition-modal input[name=${key}]`).value = album[key]
            })
            
        }
    }

    xhttp.open("GET", `https://ajaxclass-1ca34.firebaseio.com/11g/israel/albums/${albumKey}.json`, true);

    xhttp.send();
}

const saveChanges = event => {
    let albumKey = event.target.dataset.albumKey
    let editedObject = {}
    document.querySelectorAll("#edition-modal input").forEach( input => {
        editedObject[input.name] = input.value
    })
    console.log( editedObject)

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(xhttp.responseText)
            console.log(response)
            getAlbums()
            $("#edition-modal").modal("hide")
        }
    }

    xhttp.open("PUT", `https://ajaxclass-1ca34.firebaseio.com/11g/israel/albums/${albumKey}.json`, true);

    xhttp.send(JSON.stringify(editedObject));
}

document.getElementById("save-changes").addEventListener("click", saveChanges )



const printCards = dataToPrint => {
    let cardDeck = document.getElementById("albums-deck")

    for (key in dataToPrint) {
        let { name, gender, band } = dataToPrint[key]

        let cardElement = document.createElement("div")
        cardElement.classList = "card"

        let cardBody = document.createElement("div")
        cardBody.classList = "card-body"
        
        let nameP = document.createElement("p")
        nameP.classList = "card-text"
        let nameText = document.createTextNode(name)
        nameP.appendChild( nameText )

        let bandP = document.createElement("p")
        bandP.classList = "card-text"
        let bandText = document.createTextNode(band) 
        bandP.appendChild( bandText )

        let genderP = document.createElement("p")
        genderP.classList = "card-text"
        let genderText = document.createTextNode(gender) 
        genderP.appendChild(genderText)

        let editButton = document.createElement("button")
        editButton.classList = "btn btn-warning edit-button"
        editButton.dataset.albumKey = key 
        editText = document.createTextNode("Editar")
        editButton.appendChild(editText)

        let detailButton = document.createElement("button")
        detailButton.classList = "btn btn-success text-white"
        let buttonAnchor = document.createElement("a")
        let anchorText = document.createTextNode("Ver detalle")
        buttonAnchor.href = `views/albumDetail.html?albumKey=${key}`
        buttonAnchor.target = "_blank"

        buttonAnchor.appendChild(anchorText)
        detailButton.appendChild(buttonAnchor)

        cardBody.appendChild( nameP )
        cardBody.appendChild( bandP )
        cardBody.appendChild( genderP )
        cardBody.appendChild( editButton)
        cardBody.appendChild( detailButton )

        cardElement.appendChild( cardBody )
        
        cardDeck.appendChild(cardElement)
    }

    document.querySelectorAll(".edit-button").forEach( button => {
        button.addEventListener("click", activateEdition )
    })
}

getAlbums()