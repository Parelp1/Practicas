const nombre= prompt("ingrese su nombre", '')
const nota= parseInt(prompt("Ingrese su nota", ''))

if (Number.isNaN(nota)){
    document.write("La nota ingresada no es valida")    
} else if (nota >=4&& nota <=10){
    document.write(` ${nombre} estas aprobado con un ${nota} `)
} else if (nota <=4){
    document.write(` ${nombre} estas desaprobado con un ${nota} `)
} else  if(nota>10){  
    document.write("La nota ingresada no es válida")
}
