const num1= parseInt(prompt("Ingrese un número:", ''));
const num2= parseInt(prompt("Ingrese un número:", ''));
const num3= parseInt(prompt("Ingrese un número:", ''));

if (num1>num2 && num1>num3){

    console.log(`el mayor es ${num1}`)
}else if (num2> num3) {
    console.log(`el mayor es el ${num2}`)
}else{
    console.log(`el mayor es el ${num3}`)
}
