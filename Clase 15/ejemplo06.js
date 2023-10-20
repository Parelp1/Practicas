const item = document.getElementsByClassName('item');

/*Seleccionamos el item 1 porque el índice va de 0 a 4*/

function cambiar_visibilidad(numitem) {
    const item = item[numitem];
    if (item.style.visibility == '') {
        item.style.visibility = 'hidden'

    } else {
        item.style.visibility = '';
    }
}

function cambiar_display(numitem) {
    const item = item[numitem];
    if (item.style.display == '') {
        item.style.display = 'none'

    } else {
        item.style.display = '';
    }
}


