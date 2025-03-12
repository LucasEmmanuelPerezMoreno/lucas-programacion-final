
const obj= {
    NOMBRE:'ALFREDO',
    APELLIDO:'CASEROS',
    EDAD:'62',
}
const productosTecnologia=[
    {
        nombre:"smartphone x200",
        marca:"TechPlus",
        precio:799.99,
        procesador:"Octa-Core 2.8 GHz",
        pantalla:"6.5 pulgadas AMOLED",
        almacenamiento:"128 GB",
        camara:"64 MP + 12 MP",
    },
    {
        nombre:"Laptop Pro14",
        marca:"NextGen",
        precio:1299.99,
        procesador:"Intel i7 11 Gen",
        pantalla:"14 pulgadas Retina",
        almacenamiento:"512 GB SSD",
        ram:"16 GB DDR4",
        grafica:"NVIDIA RTX 3050",
    },
    
 
    {
        nombre:"smartwatch Active 4",
        marca:"WellFit",
        precio:249.99,
        procesador:"Dual-core 1.2 GHz",
        pantalla:"1.4 pulgadas AMOLED",
        resistencia:"50 m resistente al agua",
        bateria:"Hasta 7 dias",
        sensores:["frecuencia cardiaca","oxigeno en sangre" ]
    },
    {
        nombre:"Auriculares Wireless Max",
        marca:"SoundSphere",
        precio:199.99,
        tipo:"inalanbricos",
        cancelacionRuido:true,
        autonomia:"30 horas",
        conectividad:"Bluetooth 5.3",
        compatibilidad:["iOS","Android","PC"],
    },
    {
        nombre:"camara Mirrorless V500",
        marca:"PhotoCrft",
        precio:899.99,
        sensor:"APS-C 24 MP",
        video: "4K a 60 fps",
        conectivad :"Wifi y bluetooth",
        pantalla:"tactil",
        lenteIncluido:"18-55mm",
    }
]

//contenedor

const container =document.querySelector('.container');//selecciona el contenedor

for(producto of productosTecnologia ){//itera o junta los elemento del productotecnologia
    //creamos una card por cada producto del array productosTecnologicos(son5)
    const div= document.createElement('div');//creea el elemento div
    div.classList.add('card');//añade la clase card al elemento

//titulos para cada card
const title=document.createElement('h2')//crea el titulo 
title.textContent=producto['nombre'].toUpperCase()//toupperCase pone el nombre en mayuscula
div.append(title)
console.log (`Nombre:${producto ['nombre'].toUpperCase()}`)

delete producto['nombre'.toUpperCase()

    for(keysProducto in producto){
        const p =document.createElement('p')
        //console.log(`clave: ${keysProducto}`)
        //console.log(`valor: ${keysProducto}:${smartphone[keysProducto]}`)
       p.textContent=`${keysProducto}: ${producto[keysProducto]}`
       div.append(p)
    }


    
    console.log('-----------------------')

    container.append(div);
}





