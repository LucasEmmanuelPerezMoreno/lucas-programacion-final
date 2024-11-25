/*const numeros =[5 , 9, -10 ,3]
console.log(numeros)
console.log(numeros.sort().reverse())


const divRojo = document.querySelector('.rojo')

if(divRojo.classList.contains('rojo')){
    divRojo.style.backgrounColor ='red'
    divRojo.innerText='texto rojo'
}else{
    divRojo.innerText='este div no contine la clase indicada'}
*/


//estructuras condicionales

/*let edad = 10
if (edad >18){
    console.log('es mayor de edad')
}else{console.log('no es mayor de edad')}*/

//operaciones logicas
//and
//es de noche y esta lloviendo --> true (salta)
//es de noche y esta lloviendo --> false (mexico)
//tiene 8 años y es el mayor de sus hermanos ---> false(juan , 12años)
//console.log((2>3)&& (20===16))


//or
//es de noche o esta despejado-->true
//es de noche o esta despejado
//console.log((2>3)||(20<16))

//NOT (negacion)
//console.log(!(2<3))

//practica
/*let edad= prompt('ingrese su edad')
edad=Number(edad)
console.log(`es mayo de edad : ${edad}`)
if (edad >18){console.log('es mayor de edad')}
else{console.log('no es mayor de edad')}*/


//switch
let dia= prompt('indica un dia de la semana')
switch (dia){
case 'lunes':
    console.log('mondey')
    break

case 'martes':
    console.log('tuesday')
    break
 case 'miercoles':
        console.log('wednsday')
        break
 case 'jueves':
            console.log('thursday')
            break
 case 'viernes':
                console.log('friday')
                break
case 'sabado':
                    console.log('saturday')
                    break
 case 'domingo':
                        console.log('sunday')
                        break
default: 
console.log('no indicaste un dia valido')

}

for(let i=0 ; i <10 ; i++){console.log('el valor de i es : ${i}')}