const body= document.querySelector("body")
const fInput = document.querySelector("#f-input") 
const sInput =document.querySelector("#s-input")
const h1 = document.querySelector("h1")
const lightBtn = document.querySelector(".light")
const darkBtn = document.querySelector(".dark")

function x () {
    body.style.background =`linear-graient (to right , ${fInput.Value} , ${sInput.Value} )`;
}


function changingtolightmode (){
    body.style.background = '#fff'
    h1.style.color = '#2d2d2d'
} 

function changingtodarkmode (){
    body.style.background = '#2d2d2d'  
    h1.style.color = '#fff'
} 

lightBtn.addEventListener('click' , changingtolightmode)
darkBtn.addEventListener('click' , changingtodarkmode)

fInput.addEventListener('input', x );
sInput.addEventListener('input', x );
