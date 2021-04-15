/*
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = xhttp.responseText
            console.log( response  )
        }
    }

    xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/11g/israel/mentors.json", true);

    xhttp.send( JSON.stringify(mentor) )
*/


/*

$.ajax({
        method:  "GET", /*"GET" || "POST" || "PATCH" ||"DELETE" || "PUT"
        data:,  aquí va lo que vamos a enviar
        url: a donde haremos la petición
        success:  callback para cuando la petición es exitosa
        error: callback para cuando hay error en la petición

    })
*/
const getData = () => {
    let dbData
    $.ajax({
        method: "GET",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/israel/.json",
        success: response => {
            console.log(response)
            dbData = response 
        },
        error: error => {
            console.log(error)
        },
        async:false
    })

    console.log( dbData )
    return dbData
}

let otherData = getData()
console.log( otherData )

getData()

const saveData = () => {
    $.ajax({
        method: "POST",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/israel/albums/.json",
        data: JSON.stringify({
            name: "Aegis",
            band: "Theater of Tragedy",
            gender: "Gothic Metal"
        }),
        success: response => {
            console.log(response)
        },
        error: error => {
            console.log(error)
        }
    })
}

const deleteData = key => {
    $.ajax({
        method: "DELETE",
        url: `https://ajaxclass-1ca34.firebaseio.com/11g/israel/albums/${key}.json`,
        success: response => {
            console.log(response)
        },
        error: error => {
            console.log(error)
        }
    })
}

/*-MYDA8x4vqzZgP8h2q-5*/

const updateData = key => {
    $.ajax({
        method: "PATCH",
        url: `https://ajaxclass-1ca34.firebaseio.com/11g/israel/albums/${key}.json`,
        data: JSON.stringify({ gender: "Symphonic Metal" }),
        success: response => {
            console.log(response)
        },
        error: error => {
            console.log(error)
        }
    })
}


const putData = key => {
    $.ajax({
        method: "PUT",
        url: `https://ajaxclass-1ca34.firebaseio.com/11g/israel/albums/${key}.json`,
        data: JSON.stringify({ gender: "Symphonic Metal" }),
        success: response => {
            console.log(response)
        },
        error: error => {
            console.log(error)
        }
    })
}

let cardHtml = `<div class="card">
<div class="card-body">
    <div class="card-title">Un título</div>
    <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor est, maiores a illum quod laboriosam fugit ut esse aliquid quos?</div>
</div>
</div>`


const getMentorData = () => {
    let mentorObject = {}
    $("form input").each(function (index) {
        let property = this.name
        let value = this.value

        mentorObject[property] = value
    });

    saveMentor(mentorObject)
}

const saveMentor = mentorData => {
    $.ajax({
        method: "POST",
        data: JSON.stringify(mentorData),
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/israel/mentors/.json",
        success: response => {
            console.log(response)
            printMentors( getMentors() )
        },
        error: error => {
            console.log(error)
        }
    })
}

$(".save-mentor").click(getMentorData)

const getMentors = () => {
    let mentorsCollection;
    $.ajax({
        method: "GET",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/israel/mentors/.json",
        success: response => {
            mentorsCollection = response
        },
        async: false
    })
    return mentorsCollection
}

const printMentors = mentorsCollection => {
    console.log(mentorsCollection)
    $(".mentors-wrapper").empty()
    for (mentor in mentorsCollection) {
        let { name, email, phone } = mentorsCollection[mentor]
        let mentorCard = `
            <div class="col-6">
                <div class="card mb-3">
                    <div class="card-body">
                        <div class="card-text">Nombre: ${name}</div>
                        <div class="card-text">Email: ${email}</div>
                        <div class="card-text">Phone: ${phone}</div>
                        <div class="d-flex justify-content-between">
                            <div class="btn btn-secondary">Eliminar</div>
                            <div class="btn btn-primary">Editar</div>
                        </div>
                    </div>
                </div>
            </div>
        `
        $(".mentors-wrapper").append(mentorCard)
    }
}

printMentors(getMentors())