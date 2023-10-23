const items= document.getElementsByClassName('item');

function cambiar_visibilidad(){
    const item= items[1];

    if(item.style.visibility==''){
        item.style.visibility= 'hidden'
    } else{
        item.style.visibility= ''
    }

}

setInterval(cambiar_visibilidad, 1000);
//milisegundos igual que en Ard

//setInterval = Cambia visibilidad en medio segundo