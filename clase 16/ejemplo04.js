const parrafo= document.getElementById('parrafo');
const menos= document.getElementById('menos');
const medio= document.getElementById('medio');
const mas= document.getElementById('mas');

menos.addEventListener('click', function(){

    parrafo.style.fontSize='10px'
})

mas.addEventListener('click', function(){

    parrafo.style.fontSize='30px'
})

medio.addEventListener('click', function(){

    parrafo.style.fontSize='20px'
})