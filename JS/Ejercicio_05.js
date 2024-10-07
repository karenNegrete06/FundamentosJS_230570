const bg = "linear-gradient(11deg, rgba(199,20,199,1) 0%, rgba(20,30,150,1) 50%, rgba(180,2,240,1) 86%)";
const style_console =`background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

console.warn("Practica 07: Arreglos en Java Script")
console.log("%c1.- Si/Entonces ... (IF)",style_console);
//Le indica al programa que hacer o que no en vase a una falso

let fechaActual=new Date();
console.log(`Hola, la fecha de hoy es: ${fechaActual.toString()}`)

//y si la necesitamos en fotrmato local?

const fechaLocalMX=fechaActual.toLocaleString('es-MX',
    {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false

    }
)

console.log(`En formato local (Mexico): ${fechaLocalMX}`);

//Si es antes de las doce saluda con un buenos dias

if(fechaActual.getHours()<12)
    console.log(`Buenos dias, hoy es: ${fechaLocalMX} `);
//Existe un extensor de la sentencia if(SI) que es else (en caso contrario)

if(fechaActual.getMonth()<=6)
    console.log(`Estas en la primera mitad del año.`);
else
    console.log(`Estas en la segunda mitad del año.`)

//Que pasa si la validacion tiene varias operaciones 

const anio=fechaActual.getFullYear();
let inicioPrimavera=new Date(anio,2,11);
let inicioVerano=new Date(anio,5,21);

let inicioOtono=new Date(anio,8,23);

let inicioInvierno=new Date(anio,11,21);

/*if(fechaActual>=inicioPrimavera || )*/
