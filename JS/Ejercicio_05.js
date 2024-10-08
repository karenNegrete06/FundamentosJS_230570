const bg = "linear-gradient(11deg, rgba(199,20,199,1) 0%, rgba(20,30,150,1) 50%, rgba(180,2,240,1) 86%)";
const style_console =`background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

console.warn("Practica 07: Arreglos en Java Script")
console.log("%c1.- Si/Entonces ... (IF)",style_console);
//Le indica al programa que hacer o que no en vase a una falso

let fechaActual=new Date();
/*let fechaActual=new Date(2024,1,6);//invierno */
/*let fechaActual=new Date(2024,3,25);//Primavera */
/* let fechaActual=new Date(2024,7,6);//Verano */
/*let fechaActual=new Date(("2024/05/06")); Con formato fecha*/
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
let inicioPrimavera=new Date(anio,3,21);
let inicioVerano=new Date(anio,5,21);
let inicioOtono=new Date(anio,8,23);
let inicioInvierno=new Date(anio,11,21);
let estacion;
let horarioVerano=false;


if(fechaActual>=inicioPrimavera && fechaActual<= inicioVerano)
{
    console.log("Estamos en PRIMAVERA...")
    console.log("Inicia la Floración de muchas plantas....")
    console.log("Los dias son mas largos y las noches más cortas...")
    console.log("Muchos animales despiertan en la hinbernación....")
    estacion="Primavera"
    horarioVerano=true;
    

}
else if(fechaActual>= inicioVerano && fechaActual<inicioOtono)
{
    console.log("Estamos en Verano...")
    console.log("En esta temporada los abundan los dias soleados y calurosos....")
    console.log("En esta temporada el indice de turismo vacacional sube....")
    console.log("Mucha gente busca realizar actividades al aire....")
    estacion="Verano"
    horarioVerano=true;

}
else if(fechaActual>= inicioOtono && fechaActual<inicioInvierno)
    {
        console.log("Estamos en OTOÑO...")
        console.log("Los arboles suelen cambiar de follaje....")
        console.log("Se registaran temperaturas mas templadas....")
        console.log("Los animales comienza con la recoleccion de alimento y preparan sus espacios para la hibernacion, incluso algunas aves migran.")
        estacion="Otoño"
        horarioVerano=false;
    
    }
else{
    console.log("Estamos en INVIERNO...")
    console.log("En esta temporada los dias son mas cortos y las noches mas largas....")
    console.log("En algunas regiones suele nevar....")
    console.log("Dado a las bajas temperaturas ....")
    estacion="Invierno"
    horarioVerano=true;
}

console.log("%c2.- Operador Ternario (validación?cumple:no_cumple)",style_console);
// En java Script exista un operador simplicada que valida si una condicion se cumple o no, y que hacer en cada caso

const edadPersona=18;
const mayoriaEdadMX=18;
const mayoriaEdadUS=21;

let evaluarMayorEdad=(edad)=>edad>18 ? "Eres mayor de edad." : "No eres mayor de edad."
console.log("Evaluando la mayoria de edad de una persona...")
console.log(evaluarMayorEdad(edadPersona));

// sin embargo tenemos que considerar que la mayoria de edad varia en cada pais por cuestiones legales, por lo que debemos considerar un segundo parametro en la evaluacion

evaluarMayorEdad= (edad,pais) => 
    (edad>=18 && pais==="MX")? `En ${pais} eres mayor de edad`: `En ${pais} NO eres mayor de edad `; 

console.log("Evaluando la mayoria de edad de una persona en Mexico...")
console.log(evaluarMayorEdad(edadPersona, "MX"));

console.log("Evaluando la mayoria de edad de una persona en Estados Unidos...")
console.log(evaluarMayorEdad(edadPersona,"US"));

console.log("%c3.- SwITCH - CASE (Eleccion por valor definido)",style_console);

//calcular tu generación en base a tu edad 
let anioNacimiento=2005;

let asignaGenracion=(anioNacimiento)=>{


switch(true)
{
  case (anioNacimiento<1968):
    //console.log("Generacion Baby Boomers")
    return "Baby Boomers";
  case(anioNacimiento>1968 && anioNacimiento<=1980):
    return "Generacion X";
  case(anioNacimiento>1980 && anioNacimiento<=1993):
     return "Generacion Millennials";
  case(anioNacimiento>1994 && anioNacimiento<=2010):
    return "Generacion centenials";
  case(anioNacimiento>2010 && anioNacimiento<=2024):
    return "Generacion de Krystal";
}
}

console.log(`Dado que nacio en el año 2005 soy de la generacion: ${asignaGenracion(2005)}`);