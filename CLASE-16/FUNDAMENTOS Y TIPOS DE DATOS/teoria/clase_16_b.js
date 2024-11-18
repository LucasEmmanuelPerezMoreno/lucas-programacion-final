//alert ('hola desde Js')//devuelve mensajes

//let nombre = prompt('Ingrese un nombre')//recibe mensajes(le estamos diciendo que ingrese un nombre en la ventanita)
//alert ('Hola ' + nombre)
//console.log('Montrando mensaje en consola')//con console.log muestra el mensaje en la consola
//console.log('Hola desde la consola ' + nombre)

let nombre = prompt ('ingrese su nombre: ')
let apellido = prompt ('ingrese su apellido: ')
let edad = prompt('ingrese su edad: ')

let mensaje = 'Hola que tal soy  ' + nombre + ' y mi apellido es  ' +  apellido +  ' y mi edad es de  ' + edad + ' años'
let mensaje2 =`Hola que tal soy ${nombre} , mi apellido es ${apellido}, y mi edad es de ${edad}`

//como colocar comillas invertidas
//se aprieta dos veces la tecla que esta al lado derecho de la letra P
console.log(mensaje)