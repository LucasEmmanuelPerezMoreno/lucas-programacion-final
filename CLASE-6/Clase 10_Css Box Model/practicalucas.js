const objeto ={
    NOMBRE:`ALFREDO`,
    APELLIDO :`CASEROS`,
    EDAD:`62`,
}
//el contenedor creado en el html se trae al js
const contenedor = document.querySelector(`.container`);//seleccionamos el container que creamos en el html

const div =document.createElement(`div`);//creamos un div desde js
div.classList.add(`card`);//en el div creamos una clase card
