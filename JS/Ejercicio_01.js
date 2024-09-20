//Comentarios de una sola linea 

/*
Comentario multi linea
*/

// Ejercicio 01: Declaración de Variables

// a) var 

var miNombre="Karen Lizbeth"
var misApellidos;
var miEdad=18;

// El objeto de console nos permite enviar datos a la terminal y poder visualizar el valor de una variable o resultado de una funcion o metodo 
console.warn("--- Declaración de variables usando VAR");
console.log("Intentando leer las variables: ",miNombre,misApellidos);

misApellidos="Negrete Hernández"
console.log("Ya que ambas fueron inicializadas vuelvo a intentar leerlas:",miNombre,misApellidos);

// una variable puede cambiar de valor en el proceso de ejecución del programa

//b) Const 
console.warn("--- Declaración de variables del tipo constante usando: CONST")
const miUniversidad="UT Xicotepec";
const miMatricula=230570

console.log("Hola",miNombre," ",misApellidos," se que estudias actualmente en: ",miUniversidad," asignaron la matricula ",miMatricula," y tienes una edad de: ",miEdad,"años.");
// Para saber el tipo de dato que tiene una variable o constante podemos utilizar la funcion typeOf()

console.log("Analizando los datos puedo deducir que: ")
console.log("miNombre es del tipo:", typeof(miNombre))
console.log("misApellidos es del tipo: ", typeof(misApellidos))
console.log("miUniversidad es del tipo: ", typeof(miUniversidad))
console.log("miMatricula es del tipo: ", typeof(miMatricula))
console.log("miEdad es del tipo: ", typeof(miEdad))

// c) LET

let miFechaNacimiento="2005-10-06";
let miColorFavorito;

console.warn("--- Declaración de variables locales usando : LET")
console.log("Genial, te voy conociendo mejor, ahora se que tu naciste el: ", miFechaNacimiento," y tu color favorito es: mmmmmmmm dejame pensar....")
miColorFavorito="Azul";
console.log(`creo que es ${miColorFavorito}, le atine`)

console.log("Analizando los datos puedo deducir que: ")
console.log("miColorFavorito es del tipo: ", typeof(miColorFavorito))
console.log("miFechaNacimiento es el tipo: ", typeof(miFechaNacimiento))