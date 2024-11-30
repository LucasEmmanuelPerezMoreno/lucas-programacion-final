/*const formulario={
    nombre:'Luis',
    email:'emailexample.com',
    edad:'36',
    mensaje:'lorem ipsum dolor sit amet ,consectet'
}*/
const nombrePrompt = prompt('ingrese el nombre')
const emailPrompt = prompt('ingrese el email')
const edadPrompt = prompt('ingrese la edad')
const mensaje = prompt('ingrese el mensaje')

const formulario={}

if(nombrePrompt.length >0 )
    formulario.nombre= nombrePromptPrompt


//if(emailPrompt.length >0 )
   // formulario.email= emailPrompt


//if(mensajePrompt.length >0 )
    //formulario.mensaje= mensajePrompt


function checkString(str , propiedad){
   if(str.length >0){
    formulario[propiedad] =str
   } 
else{console.log(`el prompt ${propiedad} vino vacio`)}
}

checkString(nombrePrompt,"nombre")
checkString(emailPromptPrompt,"email")
checkString(mensajePrompt,"mensaje")

function isNumber(valor){
    return !isNaN(valor)
}

console.log(isNumber(edadPrompt))
/*const formulario={
    nombre:'nombrePrompt',
    email:'emailPrompt',
    edad:'edadPrompt',
    mensaje:'mensajePrompt'}
    */

    console.log(formulario)