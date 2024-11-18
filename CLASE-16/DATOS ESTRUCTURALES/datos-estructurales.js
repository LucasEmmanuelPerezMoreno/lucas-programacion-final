let letras = ['a','b','c','d','e','f','g','h','i'];
console.log(letras,length)//para saber la cantidad de elementos
console.log(letras[2])//le estoy pidiendo la letra que esta en el lugar 2
console.log(letras[letras.length - 1])//con este mostramos el ultimo elemento


letras.pop()//elimina el ultimo elemento de la lista
console.log('usamos pop()')
console.log(letras)


console.log('usamos push()')//añade elementos al final 
letras.push('j')
console.log(letras)

console.log('usamos shift()')//añade elementos al inicio
letras.shift()
console.log(letras)

console.log('usamos unshift()')//añade elementos al inicio
letras.unshift('w')
console.log(letras)

console.log('usando splice')//se paro en el elemento dos y elimino 3 elementos 
letras.splice(2, 3)
console.log(letras)

console.log('usando join')//une todos los elementos y los devuelve
let str = letras.join('')
console.log(str)

console.log('usando reverse')//invierte el orden de los elementos
letras.reverse()
console.log(letras)

//objetos

let libro ={
    titulo: 'Rayuela',
    autor: 'Julio Cortaza',
    anio:1963
}

//notacion de puntos 
console.log(libro)

//si no existe la key , en este caso , la agrega
libro.paginas= 500 //como agregar  una nueva clave o propiedad a mi 
console.log(libro)

//si existe la key , modifica su valor
libro.anio = 1953
console.log (libro)

//para eliminar una key usamos la palabra delete
delete libro.titulo
console.log(libro)

//notacion de corchertes 
libro["anio"]=1983
console.log(libro)
libro["edicion"]= 2
console.log(libro)
delete libro["paginas"]
console.log(libro)

//array y objetos combinados
let libros = [ 
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anio: 1967 },
    { titulo: "El Aleph", autor: "Jorge Luis Borges", anio: 1949 }, 
    { titulo: "La invención de Morel", autor: "Adolfo Bioy Casares", anio: 1940 } ]; 
    console.log(libros)

    //añade un libro a la lista al final

    let nuevoLibro={
        titulo:'rayuela',
        autor:'Julio Cortazar',
        anio: 1963
    }
    libros.push(nuevoLibro)
    console.log(libros)


    let motorVT52={
        cilindrada:3000
        combustible: "nafta",
        fabricante: "FIAT",
        anioFabricacion: "2020",
        modelo:"VT-52"

    }

    let auto={
        marca:"FIAT",
        modelo:"argo",
        color:"blanco",
        puertas:5,
        transmision:"manual",
        motor: motorVT52
        versiones:["GL"."XLI","SPORT","XS","FUL"]
    }
    console.log(auto)

    //Arrays de arrays
    let matriz=[
        [1,2,3]
        [4,5,6]
        [7,8,9]
    ]
    console.log(matriz[0])