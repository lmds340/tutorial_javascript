// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

/* -- MENU
  -- Comentarios
  -- Declaracion de variables
  -- Tipos de datos
*/

// -- Comentarios

// Comentarios de una linea
/* Comentario 
  Multilinea
*/

// -----------------------------
// -- Declaracion de variables
// -----------------------------

/*
  nota: una variable sin valor recibe undefined
  nota: una variable inicializada a null recibe el valor de 0.
*/

var x=1;  // Declara una variable y le asigna un valor
let y=2;  // Declara una variable tipo bloque (fuera de bloque no tiene valor) y le asigna un valor;
const z=3; // Declara una constante y le asigna un valor. Una constante no se puede modificar.

{
  let varb = 2;
  console.log("Prueba Variable Bloque: ",varb);

}

// console.log("Prueba Variable Bloque: ",varb); // Salida error


// -----------------------------
// -- Tipos de Datos
// -----------------------------

/*
  Boolean: true or false
  null
  undefined
  number -- funciones de parseInt(), parseFloat()
  Object
  string
  Arrays

  nota: La conversion de tipos se realiza automaticamente.
*/

x = 42;
console.log("Tipo de Datos x: ",42+1);
console.log("Tipo de Datos x+Hola: ",x+" Hola");

/*
  El operador + es de concatenacion por lo que no hace conversion de tipos.
*/

console.log("Conversion '37'+1: ",'37'+1 );
console.log("Conversion +'37'+1: ",+'37'+1 ); //Poniendo un + delante convierte


// -- Arrays

x = ['Hola','Adios']

console.log('Array x: ',x);
console.log('Array x: ',x[0]);
console.log('Array x length: ',x.length);

// -- Objetos

x = {nombre : 'Hola', surname:'Adios'};

console.log('Array x: ',x);
console.log('Array x: ',x['nombre']);

y = {persona : {nombre:'Hola',apellido:'Salida'}, surname:'Adios'};
console.log('Array x: ',y.persona.apellido);

// -- Strings

x = 'luismi';
y = 'diaz';

console.log(`salida ${x} nombre ${y}`);

var salida =`Este tipo de lineas
pueden ser multilinea`

console.log(salida);
