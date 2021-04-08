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

const getSignatureScore = (signature, scoresArray) => {
    let score = scoresArray.filter( score => score.signature === signature )[0].score
    return score 
}

const deleteMentor = event => {
    console.log( event.target )
    let mentorIndex = event.target.dataset.mentorIndex 
    mentorsArray.splice(mentorIndex,1)
    console.log( mentorsArray )

    printTable()
}

const printTable = () => {
    let table = document.getElementById("mentor-table")
    
    while (table.lastElementChild) {
        table.removeChild( table.lastElementChild );
    }

    mentorsArray.forEach( ( mentor, index ) => {
        let mentorRow = document.createElement("tr")
        let indexTd = document.createElement("td")
        let nameTd = document.createElement("td")
        let htmlTd = document.createElement("td")
        let cssTd = document.createElement("td")
        let jsTd = document.createElement("td")
        let reactTd = document.createElement("td")
        let buttonTd = document.createElement("td")
        

        let mentorName = document.createTextNode(mentor.name)
        let mentorIndex = document.createTextNode(index + 1)
        let htmlScore = document.createTextNode( getSignatureScore("HTML",mentor.scores))
        let cssScore = document.createTextNode( getSignatureScore("CSS",mentor.scores))
        let jsScore = document.createTextNode( getSignatureScore("JS",mentor.scores))
        let reactScore = document.createTextNode( getSignatureScore("ReactJS",mentor.scores))

        let deleteButton = document.createElement("button")
        deleteButton.className = "btn btn-danger btn-delete"
        deleteButton.dataset.mentorIndex = index

        let deleteButtonText = document.createTextNode("Eliminar")

        deleteButton.appendChild( deleteButtonText)
       
        indexTd.appendChild( mentorIndex )
        nameTd.appendChild( mentorName )
        htmlTd.appendChild( htmlScore )
        cssTd.appendChild( cssScore )
        jsTd.appendChild( jsScore )
        reactTd.appendChild( reactScore )
        buttonTd.appendChild( deleteButton )

        mentorRow.appendChild( indexTd )
        mentorRow.appendChild( nameTd )
        mentorRow.appendChild( htmlTd )
        mentorRow.appendChild( cssTd )
        mentorRow.appendChild( jsTd )
        mentorRow.appendChild( reactTd )
        mentorRow.appendChild( buttonTd )

        table.appendChild( mentorRow )

        let buttons = document.querySelectorAll(".btn-delete")

        buttons.forEach( button => {
            button.addEventListener( "click", deleteMentor ) 
        })
    })
}

printTable()