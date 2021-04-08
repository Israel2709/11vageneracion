/*
    seleccionar elementos a traves de tagname
*/

//let listItems = document.getElementsByTagName("li")
//console.log( listItems )

/*
    seleccionar elementos a través de su clase
*/

//let successItems = document.getElementsByClassName("bg-success")

//console.log( successItems )

/*
    Seleccionar elementos a través de su id
*/

//let kodersList = document.getElementById("koders-list")

//console.log( kodersList )

/*seleccion de múltiples elementos*/

//let italicItem = document.querySelector("#koders-list .bg-success .text-italic")

//console.log( italicItem )

//let spans = document.querySelectorAll("#koders-list li span")

let listItems = document.querySelectorAll("#koders-list li")

listItems.forEach( element => {
    element.classList.add("list-group-item")
    console.log( element.innerText)
    let elementText = element.innerText

    elementText.length > 4 ? element.classList.add("bg-primary") : element.classList.add("bg-secondary")
})


let notesArray = [
    {
        signature:"Español",
        note:8
    },{
        signature:"Matemáticas",
        note:9
    },{
        signature:"Inglés",
        note:8.5
    },{
        signature:"Física",
        note:7
    }
]

const addItem = ( signature, note ) => {
    let notesList = document.getElementById("notes-list")

    let noteLi = document.createElement("li")
    let noteText = document.createTextNode(`${signature}: ${note}`)
    
    noteLi.appendChild(noteText)

    noteLi.className = "list-group-item"

    note < 8 ? noteLi.classList.add("bg-warning") : noteLi.classList.add("bg-success")

    notesList.appendChild(noteLi)
}

notesArray.forEach( note => {
    addItem( note.signature, note.note )
})

const getLowerScore = () => {
    let scores = document.querySelectorAll('li.bg-warning').length;
    console.log(scores);
    return scores;
}

/*element.addEventListener({event}, callback )*/

document.getElementById("button").addEventListener("click", () => {
    console.log(" hola ")
})


document.getElementById("button").addEventListener("click", getLowerScore )




