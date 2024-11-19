//condicionales if , else,  else if

/*let resultado =50 < 10// 
if(resultado)//el bloque de codigo se ejecuta si la condicion es veradera
    {
console.log('verdadero')
}
else{
    console.log('falso') //el bloque de codigo se ejecuta si la condicion es falsa
}
*/


/*
let edad = 10 
//siempre ejecuta uno solo

//si if (edad) es mayor a 18 se va a poner que es mayor de edad
if(edad >18){
    console.log('es mayor de edad')

}
else if (edad > 12){console.log('es un adolecente')}//si edad es mayor a 12 es adolecente

else{
    console.log('aun es un niño')// sino aun es un niño
}
    */




/*
//switch
let dia = 'sabado'
switch (dia) {
    case 'Lunes':
        console.log('es lunes')
        break;

        case 'martes':
        console.log('es martes')
        break;

        case 'miercoles':
        console.log('es miercoles')
        break;


        case 'jueves':
            console.log('es jueves')
            break;


         case 'viernes':
                console.log('es viernes')
                break;

    default://en el caso de que en los anteriores iten no encuentre un verdadero se ejecuta este
        console.log('es fin de semana')
        break;
}

*/


//for

/*
let iterador=10
for(let i = 0; i < iterador ; i++ ){
    console.log(i)
}
    */


//operadores de  incremento y decremento
/*
let variable1 = 0
console.log(variable1)
//console.log(variable1++)// muestra primero la variable y despues suma
console.log(++variable1)//suma en uno la variable y luego mostralo
*/



//For of  (verifica cuantos elementos hay y los integra)
/*
let lista =['manzana','pera', 'banana','frutilla']

for (fruta of lista){ 
    console.log(fruta)

}

//for in 
const persona= {
    edad:15,
    nombre: 'lucas',
    apellido: 'perez',
    mayorEdad: false,
}*/
/*for (let clave in persona){ 
    console.log(`${clave} => ${persona[clave]}`)

}*/


//while(bucle infinito mientras se cumpla la condicion)

/*let contador=0
while(contador <10){
    console.log(contador)
    contador++
}

let entrada; 
do { 
entrada = prompt("Introduce una palabra (escribe 'stop' para detener):"); // Solicita la entrada del usuario 
console.log("Has introducido:", entrada); // Muestra lo que se introdujo
 } while (entrada.toLowerCase() !== "stop"); // Comprueba si la entrada es "stop" 
  */

 let valor = prompt('cuantas copias necesitas: ')
 let impresiones=1
  while(impresiones <= valor )
    {
console.log(`imprimiendo copia ${impresiones}`)
impresiones++
  }