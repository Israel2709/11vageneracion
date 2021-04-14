let imgIndex = 0;
let imgArray = [
    "https://picsum.photos/id/169/500/300",
    "https://picsum.photos/id/170/500/300",
    "https://picsum.photos/id/171/500/300",
    "https://picsum.photos/id/172/500/300",
    "https://picsum.photos/id/173/500/300"
]

const setImgSrc = src => {
    $(".gallery-wrapper img").fadeTo("slow",0, () => {
        $(".gallery-wrapper img").attr("src",src)
        setTimeout( function(){
            $(".gallery-wrapper img").fadeTo("slow",1)
        },300)
    })
}

const setButtonsState = () => {
    imgIndex === 0 
        ? $(".backward").attr("disabled", true)
        : $(".backward").attr("disabled", false)

    imgIndex === imgArray.length - 1
        ? ($(".forward").attr("disabled", true), $(".add-slides").removeClass("d-none"))
        : ($(".forward").attr("disabled", false), $(".add-slides").addClass("d-none"))
}

setButtonsState()

const forward = () => {
    imgIndex++
    let src = imgArray[imgIndex]
    setImgSrc(src)
    setButtonsState()
}

const backward = () => {
    imgIndex--
    let src = imgArray[imgIndex]
    setImgSrc(src)
    setButtonsState()
}

const addSlides = amount => {
    for( let i = 0; i < amount; i++ ){
        let randomId = Math.floor(Math.random() * ( 255 - 1) + 1)
        console.log( randomId )
        let url = `https://picsum.photos/id/${randomId}/500/300`
        imgArray.push( url )
    }
    setButtonsState()
}

$(".forward").click( forward )
$(".backward").click( backward )

$(".add-slides").click(() => {
    addSlides(5)
})
