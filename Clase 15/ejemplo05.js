function todos_los_parrafos(){
    const allparrafos =document.getElementsByTagName('p');

    //console.log(allparrafos)

    const num= allparrafos.length;

    //console.log(num)

    alert(`hay ${num}elementos <p> en el docmuento`)
}

todos_los_parrafos()


function caja1_parrafos(){
    const caja1= document.getElementById('caja1');

    const caja1p= caja1.getElementsByTagName('p')

    const num = caja1p.length;

    alert (`hay ${num} parrafos en la caja 1`)
}

function fuera_de_caja(){
    const parrafos_2= document.getElementById('caja2')
    const caja_2= parrafos_2.getElementsByTagName('p')

    const num=caja_2.length;

    alert (`hay ${num} parrafos en la caja 2`)

}