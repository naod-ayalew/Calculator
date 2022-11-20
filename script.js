digits = document.querySelectorAll('.digits')
let first = ''

const printScreen = function(num) {
    document.getElementById('screen').innerHTML = num
}

const storage = function(e) {
    first += e.target.value;
    printScreen(first)
    console.log( first)
}
digits.forEach(function(dig){
     
    dig.addEventListener('click', storage)
})

