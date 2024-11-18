console.log('Mi Primer JS')

/* este es un comentario multilinea*/


//console.log que este nos va a servir para mostrar variables o datos en la consola del navegadior

console.info('estoy informando')
console.error('estoy informando un error')
console.warn('NO LLEGA A SER UN ERROR , MAS BIEN ,UNA ADVERTENCIA')
//CONSOLE.TABLE()´

//mostrar informacion en la consola

//Tipos de datos primitivos
const constante= 3.14 //number
let edad= 36 //number
const nombre= 'luis'//string
let casado = true //booleano

//tipos de datos que ayudan a manejar algunos eerores
let indefinido = undefined
let nulo = null

//entrada de datos 
let input = prompt('ingrese algun dato')
console.log(input)
console.log(50)

//operaciones con diferentes datos
let num1= prompt('ingrese un numero')
let num2 = prompt('ingrese otro numero')
console.log(`num1: ${num1}y num2: ${num2}` )
let suma = Number(num1) + Number (num2)
let resto = Number (num1) / Number (num2)
