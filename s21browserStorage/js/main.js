let isLogged = localStorage.getItem("userIsLogged")

console.log( isLogged )

//if( isLogged === null || isLogged === undefined || isLogged === 0 ||isLogged === false )

!isLogged && $("form").removeClass("d-none")

isLogged && $(".landing").removeClass("d-none")

$("#login").click(() => {
    localStorage.setItem("userIsLogged",true)
})

$("#logout").click(() => {
    localStorage.removeItem("userIsLogged")
    location.reload()
})