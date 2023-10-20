const formulario=document.getElementById('formulario')

/*Si la el formulario está vacio da una alerta */
formulario.addEventListener('submit', function(e){
    e.preventDefault();

    if(e.currentTarget.nombre.value==''){
        alert('nombre requerido');
        return;
    }

    if(e.currentTarget.fecha.value==''){
        alert('fecha requerido');
        return;
    }

   alert(`Gracias ${e.currentTarget.nombre.value} por completar el formulario`)
})