//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(199,20,199,1) 0%, rgba(20,30,150,1) 50%, rgba(180,2,240,1) 86%)";
const style_console =`background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`
 
//Personalización de las salidas de consola
console.warn("Practixca 06: Arreglos en Java Script");

// Repaso de Arreglos

//DECLARACIÓN DE UN OBJETO
//Para declarar un arreglo (array) de datos de JavaScript basta con agregar [], y dentro los datos que contendra el arreglo.
const mesesAnio = ["enero","Febrero", "Marzo",  "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",]


console.log("%c1.- Declaración de un arreglo ", style_console);
console.log(mesesAnio);
console.table(mesesAnio);
 
// Accede a los valores de u arreglo de datos para acceder al valor solo basta enviar la posición del dato que queremos dentro de los limites establecidos. Siendo el lite inferior 0 y el superior tamaño -1

console.log("%c2.- Leer o recuperar los datos de un arreglo ", style_console);
console.log(`El primer mes del año es: ${mesesAnio[0]}`)
console.log(`El último mes del año es: ${mesesAnio[mesesAnio.length -1]}`)

// No se pueden acceder a elementos con posiciones negativas o posiciones superiores al tamaño definido

console.log(`El mes  del año en la posicion -1 es: ${mesesAnio[-1]}`)
console.log(`El treceavo mes del año en la posicion es : ${mesesAnio[12]}`)
console.log(`¿Que tipo de dato es un arreglo?: ${typeof(mesesAnio)}`)

//Al ser JavaScript un lenguaje débilmente tipado podremos crear arreglos mixtos de tipos de datos

console.log(`Declaramos un arreglo mixto`);
const saludar= function(nombre){return `Hola, ${nombre}`}

let arregloMixto= ["String", 10, 25.30, -502, -.2523, Symbol("MARCH"), "K", true, BigInt(213212131213213231321321321321321321), false, {latitud: "23° 18' 0\" N", longitud: "10° 20' 00\" O", altitud:600}]

//Mostramos 
console.log(arregloMixto)
console.table(arregloMixto)
console.log(typeof(arregloMixto))

console.log(`Verificamos los tipos de datos de los elementos del arreglo: `)

console.log(`El dato en la posicion [0] = ${arregloMixto[0]} y es del tipo ${typeof(arregloMixto[0])}`)
console.log(`El dato en la posicion [0] = ${arregloMixto[1]} y es del tipo ${typeof(arregloMixto[1])}`)
console.log(`El dato en la posicion [0] = ${arregloMixto[2]} y es del tipo ${typeof(arregloMixto[2])}`)
console.log(`El dato en la posicion [0] = ${arregloMixto[3]} y es del tipo ${typeof(arregloMixto[3])}`)
console.log(`El dato en la posicion [0] = ${arregloMixto[4]} y es del tipo ${typeof(arregloMixto[4])}`)
console.log(`El dato en la posicion [0] = ${arregloMixto[5].toString} y es del tipo ${typeof(arregloMixto[5])}`)
console.log(`El dato en la posicion [0] = ${arregloMixto[6]} y es del tipo ${typeof(arregloMixto[6])}`)
console.log(`El dato en la posicion [0] = ${arregloMixto[7]} y es del tipo ${typeof(arregloMixto[7])}`)
console.log(`El dato en la posicion [0] = ${arregloMixto[8]} y es del tipo ${typeof(arregloMixto[8])}`)
console.log(`El dato en la posicion [0] = ${arregloMixto[9]} y es del tipo ${typeof(arregloMixto[9])}`)
console.log(`El dato en la posicion [0] = ${arregloMixto[10]} y es del tipo ${typeof(arregloMixto[10])}`)
console.log(`El dato en la posicion [0] = ${arregloMixto[11]} y es del tipo ${typeof(arregloMixto[11])}`)
console.log(`El dato en la posicion [0] = ${arregloMixto[12]} y es del tipo ${typeof(arregloMixto[12])}`)

console.log("%c3.- Arreglos Multidimensionales (Matrices) ", style_console);

console.log("Declarando una matriz regular")
// Una matriz es una estructura de datos multidimensional (tabla) de n columnas o m filas

let matriz =[[1,2,3,4],[`a`,`b`,`c`,`d`]]
// Esta es una matriz regular de  4 x 4

console.log(matriz)
console.table(matriz)

console.log ("Declarando una matriz irregular.")

const matrizirregular = [ [`Juan`,`Mario`,`Karen`,`uriel`],[true,false,null],[9.2]]

console.log(matrizirregular)
console.table(matrizirregular)

// Acediendo a los valores de una matriz

console.log("Leyendo las propiedades de una Matriz Regular")
console.log(`Elemento en la posicion [0][0]: ${matriz[0][0]}`)
console.log(`Elemento en la posicion [1][2]: ${matriz[1][2]}`)

//Accediendo a los valore de una matriz irregular

console.log("Leyendo las propiedades de una Matriz irregular")
console.log(`Elemento en la posicion [0][0]: ${matrizirregular[0][0]}`)
console.log(`Elemento en la posicion [2][0]: (Promedio Juan)${matrizirregular[2][0]}`)
console.log(`Elemento en la posicion [1][2]: (¿Es Karen mayor de edad?)${matrizirregular[1][2]}`)

//Funciones y Métodos de Arreglos
//Los arreglos de un objeto siempre son invocados usando un . y al termino se delimitan los prametros entre (), en caso de que no lleve (), no es un método sino una propiedad

console.log("%c4.- Funciones o Métodos de los Arreglos (Array Methos or Array Functions)", style_console);

console.log("¿Como saber cual es el tamaño de un arreglo?")
console.log(` meses es un arreglo de tamaño: ${mesesAnio.length}`)
console.log(`arregloMixto es un arreglo de tamaño: ${arregloMixto.length}`)
console.log(`¿Que pasa con los multidimensionales?`)
console.log(`matriz es u arreglo de tamaño: ${matriz.length}`)
console.log(`mmm, eso me da el tamaño de numero de filas, pero como saber el numero de columnas`)
console.log(`matriz es un arreglo de tamaño de numero de columnas de: ${matriz[0].length}`)
console.log("¿Y para las irregulares?")
//Para saber  la dimensión de una matriz irregular podemos hacer el uso del ciclo

let numeroFilas=matrizirregular.length
for(let i=0;i<numeroFilas;i++)
console.log(`La longitud de la fila ${[i]} es = ${matrizirregular[i].length}`)

console.log("%c5.- Agregar un nuevo elemento a un arreglo (PUSH) ", style_console);

let estudiantes =["Angel Rufino", "Idai Vargas", "Uriel Medina", "Karen Lizbeth", "Matias Mejia"]
console.log("Los estudiantes actuales del arreglo son: ")
console.table(estudiantes);
console.log("Arregamos a un nuevo estudiante llamado: Abril Guzman")
estudiantes.push("Abril Guzman")
console.log("Despues de arregarla los elementos del arreglo son: ")
console.table(estudiantes)

console.log("¿Que pasa con los Mixtos?")
console.log("El arregloMixto actualmente tiene los siguentes elementos:")
console.table(arregloMixto);
console.log("Arregamos la palabra: \"Hola\", como nuevo elemento")
arregloMixto.push("Hola");
console.log("Y tambien agregamos el numero -3128817875487448, siendo este un BigInt")
arregloMixto.push(BigInt(3128817875487448));
console.log("Despues de esta dos operaciones el arreglo queda con los siguentes elementos: ")
console.table(arregloMixto);

console.log("%c6.- Agregar un nuevo elemento a un arreglo (UNSHIFT) en la posicion inicial", style_console);
console.table(estudiantes);
console.log("Ahora  agregaremos a abishai Flores, al comienzo del arreglo.")
estudiantes.unshift("Abishai Flores")
console.log("La lista actual es: ")
console.table(estudiantes);

console.log("%c7.- Eliminar elementos de un arreglo en la ultima posicion (POP)", style_console);

console.log("El arreglo tiene los siguientes elementos: ")
console.table(estudiantes)
console.log("Para este caso eliminar el elemento el arreglo quedo con de la siguente manera: ")
estudiantes.pop();
console.log("Despues de eliminar el arreglo quedo con de la siguente manera:")
console.table(estudiantes);

console.log("%c8.- Eliminar elementos de un arreglo en la primera posicion (SHIFT)", style_console);

console.log("El arreglo tiene los siguientes elementos: ")
console.table(estudiantes)
console.log("Para este caso eliminaremos a Abishai Flores, en la primera posicion  ")
estudiantes.shift();
console.log("Despues de eliminar el arreglo quedo con de la siguente manera:")
console.table(estudiantes);

console.log("%c9.- Dividir un arreglo en un arreglo nuevo con posiciones definidas (SPLICE)", style_console);
console.log("El arreglo original tiene los elementos: ")
console.table(estudiantes)
console.log("Dividir el arreglo en uno nuevo eliminando ciertos elementos en base a su posicion")
// cuando la fusión de splice recibe un solo parametro eliminara los elementosde esta posicion en adelante
estudiantes.splice(2)
console.table(estudiantes);
// Cuando la funcion splice recibe 2 parametros elimina todos los elementos que no esten en ese rango

estudiantes.push("Tania Ibarra");
estudiantes.push("Juvenal Viveros ");
estudiantes.push("Derek Sesni");
estudiantes.push("Brisa Garcia");
estudiantes.push("Ciclalli Perez");

console.log("Se han  agregado 5 nuevos estudiantes, por lo que el arreglo es:")
console.table(estudiantes);
console.log("Ahora ya tenemos los elementos suficientes para aplicar el metodo Splice con dos parametros que sera 3,5")
estudiantes.splice(3,5)
console.log("Resultado en: ")
console.table(estudiantes)

// Splice sirve tambien para insertar elemento en posiciones especificas, ahora necesitamos insertar a: Obed Guzman 
console.log("Ahora vamos a insertar a \"Obed Guzman\" en los elementos de la posicion 0,1")
estudiantes.splice(1,0,"Obed Guzman")
console.log("Resultado en: ")
console.table(estudiantes);

console.log("Ahora vamos a remplazar al elemento \"Angel Rufino\" en los elementos de la posicion 0,1 por \"Brandon Leon\"")
estudiantes.splice(0,1,"Brandon Leon")
console.log("Resultado en: ")
console.table(estudiantes);

console.log("%c10.- Metodos para la manipulacion de arreglo INMUTABLES", style_console);

let signoZodiacales=["Aries","Tauro","Geminis","Cancer","Leo","Virgo","Libra","Escorpio","Sagitario","Capricornio","Acuario","Piscis"]
let [signo1,,signo3,,,,signo7,,,,,] = signoZodiacales;
console.log(`El primer signo Zodical es: ${signo1}`)
console.log(`El tercer signo Zodical es: ${signo3}`)
//console.log(`El cuarto signo Zodical es: ${signo4}`)
console.log(`El septimo signo Zodical es: ${signo7}`)

// Congelamos el arreglo volviendo INMUTABLE;
Object.freeze(signoZodiacales);