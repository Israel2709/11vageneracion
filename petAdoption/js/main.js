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
                alert("cargando home")
                break
            
            case "pets":
                getPets()
                break

            case "users":
                alert("cargando users")
                break

            default:
                alert("cargando home")
        }
    })
}

const getPets = () => {
    $.ajax({
        method:"GET",
        url:"https://ajaxclass-1ca34.firebaseio.com/11g/hugo/pets/.json",
        success: response => {
            console.log( response )
        },
        error: error => {
            console.log( error )
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

//--------//


