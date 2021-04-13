/*Con vanilla*/

//document.getElementById("save-user").addEventListener("click", () => {
  //  console.log( "guardando usuario" )
//})

/*Con JQuery*/

/*$('#save-user').click(()=>{
    console.log( 'guardando usuario' )
})*/

$('#toggle-text').click( () => {
    console.log('Toggleando')

    /*ocultar elemento con vanilla y bootstrap*/
    //document.getElementById("text").classList.add("d-none")

    /*ocultar elemento con JQuery*/
    //$("#text").hide()

    /*conmutar el elemento con vanilla y bootstrap*/

    /*let element = document.getElementById("text")
    let elementIsVisible = !element.classList.contains("d-none")
    console.log( elementIsVisible )

    elementIsVisible ? element.classList.add("d-none") : element.classList.remove('d-none')*/

    /*conmutar el elemento usando JQuery*/
    $('#text').toggle()

})

$(".text-controls .btn-secondary").click( event => {
    console.log('click on secondary')
    //let type = event.target.dataset.controlsType

    let type = $(event.target).data('controls-type')
    console.log( type )
    $(`.text-${type}`).remove()
})
/*
$('#btn-dangers').click( () => {
    $('.text-danger').remove()
})

$('#btn-warnings').click( () => {
    $('.text-warning').remove()
})

$('#btn-success').click( () => {
    $('.text-success').remove()
})

*/

$("form").click( () => {
    console.log("click al form")
})
let shouldWork = true 
$("button").click( event => {
    event.preventDefault()
    event.stopPropagation()
    if( shouldWork ) {
        console.log( "click al botón")
    } else {
        return false 
    }
    console.log(" después del ternario ")
})

/*agregamos el listener de click a todos los inputs del tipo radio dentro e controls wrapper*/
$(".controls-wrapper input[type='radio']").click( () => {
    /*determinamos cuál fue la forma seleccionada*/
    let selection = $(".controls-wrapper input[type='radio']:checked").val()
    console.log( selection )
    /*a nuestro elemento mutable le agregamos una clase con el mismo nombre que la selección*/
    $("#mutable-shape").removeClass().addClass(selection)
})
