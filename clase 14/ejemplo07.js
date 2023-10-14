let x=1;
const cuantos =5;
let suma=0;

while (x<=cuantos){
    const valor= parseInt(prompt(`igrese el valor ${x} de ${cuantos}`, ''));
    suma += valor;
    x++
}
console.log(`la suma de loa valores es ${suma}`);