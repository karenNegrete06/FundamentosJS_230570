

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

console.log("%c4.- Manejo de Excepciones (TRY/CATCH)",style_console);

console.log("Intentamos dividir: 0/10, el resultado es: ")
//En algunas ocaciones existian errores que no son culpa del programa, si no del usuario , la red el uso o inclusio de un middleware pero que si duda debemos controlar para evitar las fallas de ejecucion.

try{ //intenta
   let result=0/10; //dividir 0 entre 10
   console.log(result)
}
catch
{
    console.log("ocurrio un error: "+error.message);
}


console.log("Intentamos dividir: 10/0, el resultado es: ")
//En algunas ocaciones existian errores que no son culpa del programa, si no del usuario , la red el uso o inclusio de un middleware pero que si duda debemos controlar para evitar las fallas de ejecucion.

try{ //intenta
   let result=10/0; //dividir 10 entre 0
   console.log(result)
}
catch
{
    console.log("ocurrio un error: "+error.message);
}

console.log("Intentamos dividir: a/0, el resultado es: ")
//En algunas ocaciones existian errores que no son culpa del programa, si no del usuario , la red el uso o inclusio de un middleware pero que si duda debemos controlar para evitar las fallas de ejecucion.

try{ //intenta
   let result="a"/10; //dividir a entre 0
   console.log(result)
}
catch
{
    console.log("ocurrio un error: "+error.message);
}


console.log("Intentamos dividir: a/10, el resultado es: ")
//En algunas ocaciones existian errores que no son culpa del programa, si no del usuario , la red el uso o inclusio de un middleware pero que si duda debemos controlar para evitar las fallas de ejecucion.

try{ //intenta
   let result=a/10; //dividir a entre 0
   console.log(result)
}
catch(error)
{
    console.log("ocurrio un error: "+error.message);
}


console.log("Intentamos dividir: el valor de la variable x/ entre el valor de la variable y, el resultado es: : ")
//En algunas ocaciones existian errores que no son culpa del programa, si no del usuario , la red el uso o inclusio de un middleware pero que si duda debemos controlar para evitar las fallas de ejecucion.

try{ //intenta
   let x=8,y=2,result=x/y; //dividir a entre 0
   console.log(result)
}
catch(error)
{
    console.log("ocurrio un error: "+error.message);
}



console.log("%c5.- Control de Ciclos (BREAK / CONTINUA) ",style_console);

// En algunas ocaciones sera importante detener un ciclo de manera abrupta para controlar casos especiales en un ciclos

console.log("Vamos a contar del 1 al 10...")
for(let num=1; num<=10;num++)
    console.log(num);
//

console.log("Ahora necesitamos que si llegas al 7 pares de contar... suponiendo que solo por hoy es de mala suerte")
for(let num=1; num<=10;num++)
    if(num==8)
        break;
    else

    console.log(num);
//
console.log("Ahora necesitamos que si llegas al 7 te saltes ese numero y continues")
 for(let num=1; num<=10;num++)
        if(num==7)
            continue;
        else
    
        console.log(num);
       
    
    
console.log("%c6.- Ciclo Iterativo - (FOR) ",style_console);

//Recorre de manera iterativa (i), de incremental o decremental

console.log("Los dias de la semana son en orde ascendentes son: ")
let dias=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
for(let i=0; i<dias.length;i++)
   console.log("Ahora vamos a imprimir los meses en orden descendente...")
const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
for(let i=11; i>=0; i--)
    console.log(meses[i])

//
console.log("%c7.- Ciclo Condicionales - (WHILE) ",style_console);
let finSemana=false;
let mensaje=``;
let j=0;
while( j<dias.length )
{
    
    
    switch(j) /// Usamos 'j' para que coincidan con el indice
    {
        case 0:
            finSemana=true;
            mensaje="Mormingoooooooo... ZzZzZzZzZzZz (❁´◡`❁)"
            break;
        case 1:
            finSemana=false;
            mensaje="San lunes a chambiar.... (┬┬﹏┬┬)"
            break;
        case 2:
            finSemana=false;
            mensaje="Segundo dia de chamba a darle...."
            break;
            
        case 3:
            finSemana=false;
            mensaje="Ombligo de chamba a darle..."
            break;
        case 4:
            mensaje="Ya casii ya si juevesito..."
            break;
        case 5:
            finSemana=false;
            mensaje="Es hoy.. es Hoy.....>.><.<  ";
            break;
        case 6:
            finSemana=true;
            
            mensaje="Sabadrink!! ☆*: .｡. o(≧▽≦)o .｡.:*☆ ";
            
            break;
    }
    if(!finSemana)
    {
        console.log(`Dia ${j} ${dias[j]}`)
        console.log(`Mensaje del dia:  ${mensaje} `)
    }
     
    j++;

   
}


console.log("%c8.- Ciclo Condicionales, que se ejecuta al menos una vez  - (DO WHILE) ",style_console);

// Simulamos una lista de episodios de una temporada 

let episodios=[
    "Episodio 1: crepusculo",
    "Episodio 2: luna nueva",
    "Episodio 3: eclipse",
    "Episodio 4: amanecer parte 1",
    "Episodio 5: aanecer parte 2"

];

let indice =0;
let continuarViendo=true;//Esta variable simula la decision del usuario de continuar viendo 

do{
    console.log(`Reproduciendo ${episodios[indice]}`);

    //Simulando la produccion del episodio 
    indice++;
    if(indice<episodios.length){
        continuarViendo=confirm("¿Desea continuar con el siguiente episodio?");

    }else{
        continuarViendo=false;
    }
}while(continuarViendo && indice<episodios.length);

console.log("Fin de la reproduccion.")


//Ciclos para recorrer objetos iterales como arreglos ,cadenas y conjunto de datos
console.log("%c9.- Ciclos para recorrer elementos finitos - (FOR ... OF) ",style_console);

let seriesTrending =[
    {nombre: "The witcher", temporada: 3, totalViewers: "1.5M",totalReprods: "3.0M" },
    {nombre: "Riverdale", temporada: 2, totalViewers: "1.7M",totalReprods: "6.0M" },
    {nombre: "Loki", temporada: 2, totalViewers: "2.5M",totalReprods: "7.0M" },
    {nombre: "WandaVision", temporada: 1, totalViewers: "1.3M",totalReprods: "4.0M" },
    {nombre: "CobraKai", temporada: 5, totalViewers: "1.9M",totalReprods: "2.0M" },
];

for(let serie of seriesTrending){
    console.log(`Serie: ${serie.nombre},Temporada: ${serie.temporada}`)
}
try{
    console.log(`La ultima serie leida fue: ${serie.nombre}`);
    // No va a funcionar por la serie ya no existe ya que su alcance solo es durante el ciclo
}
catch(error)
{
   console.log("Mensaje de error: "+error.message)
}


console.log("%c10.- Ciclos para recuperrar las propiedades de elementos finitas - (FOR ... IN) ",style_console);

for(let i in seriesTrending){
    console.log(`serie ${parseInt(i)+1}:`);
    for(let propiedad in seriesTrending[i]){
        console.log(`${propiedad}: ${seriesTrending[i][propiedad]}`)
    }
    console.log(`--------------------`)
}

console.log("%c11.- Ciclos interrumpidos para cada uno de los elementos del arreglo (FOR ... EACH) ",style_console);

let seriesTrending2=[
    {nombre: "The witcher", temporada: 3, Viewers: 80000000,Reproducciones: 25000000  },
    {nombre: "Riverdale", temporada: 2,  Viewers: 12000000,Reproducciones: 40000000 },
    {nombre: "Loki", temporada: 2,  Viewers: 70000000,Reproducciones: 22000000  },
    {nombre: "WandaVision", temporada: 1,  Viewers: 90000000,Reproducciones: 30000000  },
    {nombre: "CobraKai", temporada: 5,  Viewers: 60000000,Reproducciones: 18000000 },
    {nombre: "The walking Dead", temporada: 16,  Viewers: 16000000,Reproducciones: 36000000 },
];

seriesTrending2.forEach((serie,index)=>{
    let calificacion=(serie.Reproducciones / serie.Viewers).toFixed(2);
    console.log(`serie ${index+1}`);
    console.log(`Nombre: ${serie.nombre}`);
    console.log(`Temporada: ${serie.temporada}`);
    console.log(`Viewers: ${serie.Viewers}`);
    console.log(`Reproducciones: ${serie.Reproducciones}`);
    console.log(`Calificacion: ${calificacion}`);
    console.log(`........................`);
});

//Usando filter  para filtar , y map para tranformar la informacion 
// Lista de series que queremos verificar
let seriesDeseadas=["The walking Dead","Riverdale","Loki"];

// Usando map e includes para filtrar y obtener los nombres de series con 3 temporadas
let seriesConTresTemporadas=seriesTrending2
.filter(serie => serie.temporada <=3)//filtramos las series que tiene3 temporadas
.map(serie => serie.nombre)//Obtenemos solo los nombres de esas series
.filter(nombre => seriesDeseadas.includes(nombre));//filtramos las que estan en la lista de series deseadas

//Mostrar los resultados 

console.log("series con 3 temporadas que estan en la lista deseada :");
console.log(seriesConTresTemporadas);