var heading = document.createElement("h1")
console.log( heading )
var headingText = document.createTextNode("Hola Koders")

/*Element.appendChild( child )*/

heading.appendChild( headingText )

//console.log( heading )

document.body.appendChild( heading )

var namesArray = [
    "Jaime",
    "Mariana",
    "Demian"
]

const printList = () => {
    let list = document.createElement( "ul" )

    namesArray.forEach( name => {
        let listItem = document.createElement( "li" )
        let itemText = document.createTextNode( name )

        listItem.appendChild( itemText )

        list.appendChild( listItem )
    })

    document.body.appendChild(list)
}

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

let testArray = [
    {
        name:"Israel",
        phone:"5543788096",
        mail:"israel@kodemia.mx"
      },
      {
        name:"Hagen",
        phone:"N/A",
        mail:"hagen@kodemia.mx"
      }
]

const printTable = () => {
    let headersArray =[
        "Nombre",
        "Teléfono",
        "Mail"
    ]
    let dataTable = document.createElement("table")
    let dataHeader = document.createElement("thead")
    let headerRow = document.createElement("tr")
    headersArray.forEach( header => {
        let head = document.createElement("th")
        let headText = document.createTextNode(header)
        head.appendChild( headText )
        headerRow.appendChild(head)
    })

    dataHeader.appendChild( headerRow )
    dataTable.appendChild( dataHeader )
    document.body.appendChild( dataTable )

    let dataTableBody = document.createElement("tbody")

    testArray.forEach( item => {
        let itemRow = document.createElement( "tr" )
        
        let nameTd = document.createElement( "td" )
        let phoneTd = document.createElement( "td" )
        let mailTd = document.createElement( "td" )

        let nameText = document.createTextNode( item.name )
        let phoneText = document.createTextNode( item.phone )
        let mailText = document.createTextNode( item.mail )

        nameTd.appendChild( nameText )
        phoneTd.appendChild( phoneText )
        mailTd.appendChild( mailText )

        itemRow.appendChild(nameTd)
        itemRow.appendChild(phoneTd)
        itemRow.appendChild(mailTd)

        dataTableBody.appendChild( itemRow )
    })

    dataTable.appendChild(dataTableBody)
}

printTable()