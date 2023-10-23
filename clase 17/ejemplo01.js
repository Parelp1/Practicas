
/*Nombre del DIV*/
const cuadrado= document.getElementsByClassName('cuadrado')[0]

/*Nombre de los ID
 */
const rojo= document.getElementById('rojo');
const borde= document.getElementById('borde');
const reset= document.getElementById('reset');


/*Funciones */
rojo.addEventListener('click', function(){
    cuadrado.classList.add('rojo')
})

borde.addEventListener('click', function(){
    cuadrado.classList.add('borde')
})

reset.addEventListener('click', function(){
    cuadrado.classList.remove('rojo', 'borde')
})