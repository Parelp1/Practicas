const datos_usuarios=[
    {nombre:'josefina',
    edad: 4
    },
    {nombre:'josefa',
    edad: 3
    },
    {nombre:'josefina',
    edad: 7
    },
    {nombre:'joaquina',
    edad: 9
    },
    {nombre:'juliana',
    edad: 12
    },
    {nombre:'lucia',
    edad: 5
    },
    {nombre:'paula',
    edad: 11
    }
]

//Filter para conseguir datos específicos
const mayores= datos_usuarios.filter(datos_usuarios => datos_usuarios.edad >7)

console.log(mayores)

for (let i=0; i<mayores.length; i++){
    document.write(`<li> Niño: ${mayores[i].nombre}, con ${mayores[i].edad}  </li> `)
}