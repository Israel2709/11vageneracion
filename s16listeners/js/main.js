document.getElementById("my-input").addEventListener("keyup", (event) => {
    console.log( event )
    console.log( event.target )
    let value = event.target.value
    console.log( value )
    document.getElementById("my-heading").innerText = value
})

let buttons = document.querySelectorAll( ".test-btn" )

console.log( buttons )

buttons.forEach( button => {
    console.log( button )
    button.addEventListener("click", event => {
        console.log( event.target.innerText )
        console.log( event.target.dataset )
        let customKey = event.target.dataset.customKey
        console.log( customKey )
    })
})

let koderList = []

const getKoderName = () => {
    let kodersList = document.getElementById("koders-list")
    let nameInput = document.getElementById("koder-name")
    let koderName = nameInput.value
    //console.log( koderName )
    
    koderList.push( koderName )
    
    
    while (kodersList.lastElementChild) {
        kodersList.removeChild( kodersList.lastElementChild );
    }


    console.log( koderList )
    printKodersList()
    document.getElementById("koder-name").value = ""
}

document.getElementById("save-koder").addEventListener("click", getKoderName )

const printKodersList = () => {
    koderList.forEach( koder => {
        let listItem = document.createElement("li")
        let itemText = document.createTextNode(koder)
        listItem.appendChild(itemText)

        listItem.classList.add("list-group-item")

        document.getElementById("koders-list").appendChild(listItem)
    })
}





