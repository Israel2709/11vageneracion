$(document).ready( function(){
    $(".content-wrapper").load('./views/home.html')
    loadView("./views/home.html", "home")
})

$('.navbar-nav a').click( event => {
    event.preventDefault()
    let view = event.target.dataset.viewTarget 
    let url = `./views/${view}.html`
    $(".nav-item").removeClass("active")
    $(event.target).closest(".nav-item").addClass("active")
    loadView( url, view )
})

const loadView = (url, view)  => {
    $('.content-wrapper').load(url, () => {
        console.log( view )
        switch ( view ) {
            case "home":
                //alert("cargando home")
                getAllPets()
                break
            
            case "pets":
                //getPets()
                break

            case "users":
                //alert("cargando users")
                break

            default:
                alert("cargando home")
        }
    })
}

const printPets = petCollection => {
    console.log( "imprimiendo mascotas")
    console.log( petCollection )
    $(".pets-wrapper").empty()
    Object.keys( petCollection ).forEach( pet => {
        let { name, description, picture, owner } = petCollection[pet]
        
        if( !owner ){
            let petCard  = ` 
            <div class="col-12 col-md-6">
                <div class="card">
                    <img src="${picture}" alt="">
                    <div class="card-body">
                        <h2 class="card-title">${ name }</h2>
                        <p>${ description }</p>
                    </div>
                    <button data-pet-key = ${pet} type="button" class="btn btn-primary adopt-pet">Adóptame!</button>
                </div>
            </div>
        `

        $(".pets-wrapper").append(petCard)
        }
        
    })
}

/*Event handlers*/

$(".content-wrapper").on("click", ".add-user", () => {
    console.log( " agregando usuario ")
})

$(".content-wrapper").on("click", ".delete-user",() => {
    console.log( "borrando usuario")
})

const getUserData = () => {
    let userObject = {}
    $(".user-form input").each( function (){
        let property = this.name
        let value = this.value
        userObject = {...userObject, [property]:value}
        
    } )
    userObject = { ...userObject, id: new Date().getTime()}
    console.log( userObject )
    saveUser( userObject )
} 

const getPetData = () => {
    let petObject = {}
    $(".pet-form input").each( function (){
        let property = this.name
        let value = this.value
        petObject = {...petObject, [property]:value}
        
    } )
    petObject = { ...petObject, id: new Date().getTime()}
    console.log( petObject )
    savePet( petObject )
} 

const saveUser = userData => {
    $.ajax({
        method:"POST",
        url:"https://ajaxclass-1ca34.firebaseio.com/11g/israel/owners/.json",
        data:JSON.stringify( userData ),
        success: response => {
            console.log( response )
        },
        error: error => {
            console.log( error )
        }
    })
}

const savePet = petData => {
    $.ajax({
        method:"POST",
        url:"https://ajaxclass-1ca34.firebaseio.com/11g/israel/pets/.json",
        data:JSON.stringify( petData ),
        success: response => {
            console.log( response )
        },
        error: error => {
            console.log( error )
        }
    })
}

const getAllPets = () => {
    console.log("getting pets")
    $.ajax({
        method:"GET",
        url:"https://ajaxclass-1ca34.firebaseio.com/11g/israel/pets/.json",
        success: response => {
            console.log( response )
            printPets( response )
        },
        error: error => {
            console.log( error )
        }
    })
}

$(".content-wrapper").on("click", ".save-user",() => {
    getUserData()
})

$(".content-wrapper").on("click", ".save-pet",() => {
    getPetData()
})

$(".content-wrapper").on("click", ".adopt-pet",() => {
    adoptPet( event )
})

const adoptPet = event => {
    let petKey = event.target.dataset.petKey
    $.ajax({
        method:"PATCH",
        data:JSON.stringify({owner:"1618973427660"}),
        url:`https://ajaxclass-1ca34.firebaseio.com/11g/israel/pets/${petKey}/.json`,
        success: response => {
            console.log( response )
            getAllPets()
        },
        error: error => {
            console.log ( error )
        }
    })
}



//--------//


