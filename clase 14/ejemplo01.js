mes= parseInt(prompt("ingrese el mes en números", ''));

if (mes==1 || mes ==2 || mes == 3){
    document.write("corresponde al primer trimestre del año")
} else if (mes ==4 || mes==5 || mes==6){
    document.write("corresponde al segundo trimestre del año")
} else if (mes ==7 || mes==8 || mes==9){
    document.write("corresponde al tercer trimestre del año")
} else{
    document.write("corresponde al cuarto trimestre del año")
}