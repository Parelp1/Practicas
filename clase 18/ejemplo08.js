const datos_usuarios=[

    {nombre:'Juliana',
    password:'asd1234' 
    },

    {nombre:'Lucia',
    password:'a5sc234' 
    },

    {nombre:'Monokai',
    password:'asd51234' 
    },

    {nombre:'Juana',
    password:'as56734' 
    },

    {nombre:'Jazmin',
    password:'a6d1234' 
    },

    {nombre:'Julian',
    password:'a3d1234' 
    }
]


const solo_pass= datos_usuarios.map(function(p){
    return p.password
})
const solo_nom= datos_usuarios.map(function(p){
    return p.nombre
})
console.log(solo_nom)
console.log(solo_pass)