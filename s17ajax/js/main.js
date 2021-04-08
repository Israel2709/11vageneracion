//https://ajaxclass-1ca34.firebaseio.com/11g/israel/mentors.json


/*Object.keys( objeto ) => devuelve un array con las llaves del objeto */
/*Object.values( objeto ) => devuelve un array con los values de cada llave del objeto */
/*Object.entries( objeto ) => devuleve un array bidimensional con las llaves y los valores del objeto */

/*for( key in object){}*/

const getMentors = () => {
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let mentors = JSON.parse(xhttp.responseText)
            console.log( mentors )

            /*console.log( Object.keys( mentors ) )
            console.log( Object.values( mentors ) )
            console.log( Object.entries( mentors ) )*/

            Object.values( mentors ).forEach( mentor => {
                console.log( mentor )
                console.log( mentor.name )
            })

            for( key in mentors ){
                console.log( key )
                console.log( mentors[key] )
                console.log( mentors.key )
            }
        }
    }
    xhttp.open("GET", "https://ajaxclass-1ca34.firebaseio.com/11g/israel/mentors.json", true);

    xhttp.send();
}

getMentors()

let mentor = {
    name:"David",
    scores:[]
}

const saveMentor = () => {
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = xhttp.responseText
            console.log( response  )
        }
    }

    xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/11g/israel/mentors.json", true);

    xhttp.send( JSON.stringify(mentor) );
}

const deleteMentor = mentorKey => {
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = xhttp.responseText
            console.log( response  )
        }
    }

    xhttp.open("DELETE", `https://ajaxclass-1ca34.firebaseio.com/11g/israel/mentors/${mentorKey}.json`, true);

    xhttp.send( );
}

let mentor2 = {
    name:"Fernanda Palacios Vera",
    phone:"555555555",
    age:20
}

let lettersArray = [
    "a",
    "b",
    "c"
]

const printMentor = () => {
    let mentorName = document.createTextNode( mentor2.name )
    let mentorPhone = document.createTextNode( mentor2.phone )
    let mentorAge = document.createTextNode( mentor2.age )

    /*destructuring*/

    let { name, phone, age } = mentor2
    /*
        let name = mentor2.name
        let phone = mentor2.phone
        let age = mentor2.age
    */

    let mentorName = mentor.name

    let [ one, two, three ] = lettersArray
    /*
        let one = lettersArray[0]
        let two = lettersArray[1]
        let three = lettersArray[2]

    */
    
}
