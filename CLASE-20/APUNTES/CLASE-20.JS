//const links = document.querySelector('ul#links')
//console.log(links)

const image = document.querySelector('nav>img')
image.alt ='icono'//cambio el id de la imagen

const links1 = document.querySelector('#links1')
console.log(links1)

//modificamos o retornamos el texto contenido en un elemento

link1.innerText='Home'
//incluimos una etiqueta en el links

link1.innerHTML ='<a href="/">home</a>'

//cambiar estilos del elemento con la propiedad 'style
link1.style.color='red'



//agregamos un elemento mas al contenedor lista
const list = document.querySelector('#link')
console.log(list)

//creamos el elemento
const li  = document.createElement('li')
//agregamos texto o atributos
li.innerText='about'
li.setAttribute('id', 'ultimoLink')
//agregamos el elemento al contenedor padre
list.append(li)


const seccionProductos = document.querySelector('.productos')
console.log(seccionProductos.classList)

seccionProductos.classList.add('fondo-verde')//añade una clase al elemento
//seccionProductos.classList.remove('fondo-verde')//elimina una clase al elemento
//seccionProductos.classList.toggle('fondo-verde')
console.log(seccionProductos.classList.contains('fondo-verde'))



const header=document.querySelector('header')//contenedor(elemento padre)
const boton= document.createElement('button')//elemento hijo
boton.innerText= 'menu'//contenido del boton

//asociacion del boton al contenedor

header.append(boton)//se crea el boton

boton.addEventListener('click',()=>{
    console.log('Boton presionado') 
})


