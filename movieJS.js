let carousel = document.querySelector('main section:last-child > div:last-child > div:nth-child(2)')
let slides = Array.from(carousel.children)
let icons = document.querySelectorAll('main section:last-child > div:last-child > div:nth-child(2) > div > div > div:last-child')
let icon = Array.from(icons)

const slideWidth = slides[1].getBoundingClientRect().width
slides.forEach((slide, i) => slide.style.left = slideWidth * i + 'px')

let i = 0;
let slider
carousel.addEventListener('mouseenter', function(){
    clearInterval(slider)
})
carousel.addEventListener('mouseleave', function(){
    slider = setInterval(sliderF, 4000)
})
window.addEventListener('load', function(){
    slider = setInterval(sliderF, 4000)
})
function sliderF(){

    if (i%2 === 0){

        slides[1].style.zIndex = '1'
        slides[0].style.zIndex = '0'
        icon[0].style.zIndex = '0'
        setTimeout(function(){
            slides[1].style.left = `0px`
        }, 250)
        setTimeout(function(){
            slides[0].style.left = `${slideWidth}px`
        },1250)
        
    } else {
        
        slides[0].style.zIndex = '1'
        slides[1].style.zIndex = '0'
        icon[1].style.zIndex = '0'
        setTimeout(function(){
            slides[0].style.left = `0px`
        }, 250)
        setTimeout(function(){
            slides[1].style.left = `${slideWidth}px`
        },1250)
        
    }
    i++

}