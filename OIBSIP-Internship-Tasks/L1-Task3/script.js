

let celciusInput = document.querySelector('#celcius > input')
let farhenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

celciusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celciusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.35
    
    farhenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)

})

farhenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(farhenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp - 32) * (5/9) + 273.35
    
    celciusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)

})

kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let fTemp = kTemp - 273.15
    let cTemp = (kTemp - 273.35) * (9/5) + 32
    
    farhenheitInput.value = roundNumber(fTemp)
    celciusInput.value = roundNumber(cTemp)

})