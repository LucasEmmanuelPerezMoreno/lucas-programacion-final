/*const boton = document.querySelector(`#miBoton`);
const parrafo = document.querySelector('p')

boton.addEventListener('click', function() {
parrafo.classList.toggle('fondo-verde')
})*/

const formulario=document.querySelector('form')

formulario.addEventListener('submit', function (event){
event.preventDefault()
const datos= Object.fromEntries(nem FormData(Event.Target))
console.log(datos)
})