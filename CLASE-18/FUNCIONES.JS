//SINTAXIS BASICAS DE FUNCIONES


//function saludar(){
//console.log('Hola mundo')}

//saludar()

//function saludarReturn(){
//return 'hola mundo'}

//let mensaje= saludarReturn()

//console.log(mensaje)

//function sumar(a,b){
//return a+b;}

//let suma=sumar(2,3)
//console.log(suma+9)



//variable y su alcance

/*let variableglobal= "soy global"; //variable global
function miFuncion(){
    let variablelocal= "soy una variable local "
console.log(variableglobal)
console.log(variablelocal)
}
miFuncion()
console.log(variableglobal)//no se ve nada porque estan fuera de la funcio
console.log(variablelocal)//no se ve nada porque estan fuera de la funcio
*/


//funciones Flecha(ARROW FUNCTIONS)

/*const SUMAR =(A,B) => A + B
const SUMA =SUMAR(5,2)
console.log(SUMA)


const RESTAR=(A,B)=> {
    return A-B
}
const RESTA=(9,3)
console.LOG(RESTA)*/


//Callbacks(funcion que se pasa como argumento a otra funcion)
/*
const concatenarMensaje = (a,b) => `${a},${b}`
const concatenarMensaje2 = (a,b) => `${a}---${b}`
function funcionPrincipal (arr , funcion){
    let resultado = funcion (arr[0],arr[1])
    return resultado.toUpperCase()
}

const nombres = ['Luis','Carlos']
const mensaje = funcionPrincipal(nombres,concatenarMensaje)
console.log (mensaje)
*/




//hoisting

//primera forma de escribirlo donde se puede declaran una funcion despues  de donjde se esta realizando la invocacion

/*let suma=sumar(2,3)
console.log(suma)//

function sumar(a,b){
return a+b;}//


//segunda forma 
const restar=(a,b)=> a-b
let resta =restar(6,2)
console.log(resta)*/

//ejercicio
/*let numeros= [1,2,3]
function calcularPromedio(nums){
    const suma=nums.reduce((total,num)=>total + num,0)
    return suma / nums.length
}
console.log(calcularPromedio(numeros))*/


const arrLetras =[];
const arrNums =[];

function menu(funcion,mostrarData){
    let valor;
do{
    valor= prompt('introduzca un valor (0 para terminar):')
    if(valor ==='0')mostrarData()
        funcion(valor)
}
while(valor !=='0');
}
function calificarValor(valor){
    if(inNaN(valor))
        {
            arrLetras.push(valor)
        }
        else{arrNums.push(Number(valor))}
}

function mostrarDatos(){
    console.log('se finalizo el programa')
    console.log(arrLetras)
    console.log(arrNums)
}
menu(calificarValor,mostarDatos)