function validarForm(){
    const nombrevalido=true;
    const passvalido= validar_largo(document.form1.text1.value,5);
    /*El document solo está para ligarlo al texto emergente*/ 


    const resultado=nombrevalido && passvalido;

    if(resultado){
        alert("es valido");
    } else{
        alert("No es valido");

    }
}

function validar_largo(texto, largo_requerido){
    return texto.length >= largo_requerido
}