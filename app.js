//Función para crear un párrafo con cada valor que tomen las variables.
function createParagraph(value) {
    let paragraph = document.createElement("p");
    let text = document.createTextNode(value); 
    paragraph.appendChild(text); 
    document.body.appendChild(paragraph); 
  }

// VARIABLES

// ● Crear variables de diferentes tipos de datos: número, cadena de texto, booleano e imprimir su valor por la pantalla del navegador y la consola.
let num = 1;
let num1 = 78;
let num2 = 35.5;
let string = 'hola';
let string2 = 'adios';
let string3 = '¿qué tal?';
let bool = true;
let bool1 = false;

console.log('El valor de num es ' + num);
createParagraph('El valor de num es ' + num);

console.log('El valor de string es ' + string);
createParagraph('El valor de string es ' + string);

console.log('El valor de bool es ' + bool);
createParagraph('El valor de bool es ' + bool);

// alert(num);
// alert(string);
// alert(bool);

// ● De las variables declaradas anteriormente, identifica las que son de tipo integer y realiza operaciones matemáticas básicas con las variables creadas anteriormente (suma, resta, multiplicación, división). Deberás imprimir el resultado por la pantalla del navegador y la consola.
console.log('Num contiene un valor de tipo ' + typeof num);
createParagraph('Num contiene un valor de tipo ' + typeof num);

console.log('¿El valor de num es un número entero? ' + Number.isInteger(num));
createParagraph('¿El valor de num es un número entero? ' + Number.isInteger(num));

console.log(typeof string);
console.log(typeof bool)
console.log('La suma de num y string es igual a ' + num + string);
console.log('La multiplicación de num y bool es igual a ' + num*bool);

createParagraph(num2);

num2 = num/2;
console.log(num2);
createParagraph(num2);

console.log('¿El valor de num2 es un número entero? ' + Number.isInteger(num2));
createParagraph('¿El valor de num2 es un número entero? ' + Number.isInteger(num2));

// ● De las variables declaradas anteriormente, identifica las que son de tipo texto y concatena dichas cadenas de texto.Deberás imprimir el resultado por la pantalla del navegador y la consola.

console.log('String es de tipo ' + typeof string);
console.log('String es de tipo ' + typeof bool1);
let array = [string, string2, string3];
console.log(array);
createParagraph(array);


// FUNCIONES

// ● Crear una función que imprima por la pantalla del navegador y la consola el mensaje "Hola, [nombre]" con un parámetro para el nombre.
function helloWorld(nombre) {
    console.log('Hello ' + nombre);
    createParagraph('Hello ' + nombre);
}
helloWorld('Alberto');

// ● Crear función que reciba como parámetros dos números y que devuelva la suma de ellos. Deberás imprimir el resultado por la pantalla del navegador y la consola.
function sumarNum(a, b) {
    console.log('La suma de ' + a + ' y ' + b + ' es ' + (a+b));
    createParagraph('La suma de ' + a + ' y ' + b + ' es ' + (a+b));
}
sumarNum(2, 3);

// ● Crear función que determine si un número es par o impar. Deberás imprimir el resultado por la pantalla del navegador y la consola. T5 PRIMEROS PASOS CON JS


// OBJETOS
// Todo lo que retorne cada función se debe imprimir el resultado por la pantalla del navegador y la consola.
// ● Crear un objeto carro haciendo la abstracción de sus atributos y un objeto anidado.
const carro = {
    brand: "Ford",
    model: "Fiesta",
    color: "Rojo",
    potencia: "110CV",
    puertas: "5",
}

// ● Crear una función que devuelva la marca del carro.
function giveBrand(carroProperties) {
    console.log(carroProperties);
}
giveBrand(carro.brand);
createParagraph(carro.brand);

// ● Crear una función que devuelva la cantidad de puertas que tiene el carro.
giveBrand(carro.puertas);
createParagraph(carro.puertas);

// ● Crear una función que devuelva un atributo del objeto anidado.
giveBrand(carro.color);
createParagraph(carro.color);

// ARRAYS

// ● Crear un array de 10 números
let newArray = [2, 23, 56, 4, 7, 32, 29, 70, 101, 3];

// ● Crear una función que imprima en consola todos los números de un array (Investigar ciclo for)
function allArray(nameArray) {
    for(i = 0; i < nameArray.length; i++) {
        console.log(nameArray[i]);
        createParagraph(nameArray[i]);
    };
};
allArray(newArray);

// ● Crear una función que añada un número al array
function addToArray(nameArray,newData) {
    nameArray.push(newData);
    let lastChild = nameArray.slice(-1);
    console.log(lastChild);
    createParagraph(lastChild);
};
addToArray(newArray,77);

// ● Crear una función que elimine los números pares de ese array.

// ● Crear una función que devuelva el número mayor de un array.
// ● Crear una función que devuelva el número menor de un array.
// ● Crear un función que convierta en minúsculas todas las letras de un texto.
// ● Crear una función que convierta en mayúsculas todas las letras de un texto.
// ● Crear una función que reciba un array de nombres y que convierta la primera letra de cada nombre en mayúscula.


// MANIPULACIÓN DEL DOM
// ● Crear un botón en HTML y usar JavaScript para mostrar un mensaje cuando se hace clic.
// ● Cambiar el contenido de un elemento HTML mediante JavaScript.
// ● Ocultar y mostrar elementos HTML utilizando JavaScript.
// ● Crear un array de 10 nombres.
// ● Crear una función que imprima en pantalla una lista con los nombres del array de nombres.
// ● Crear un array de números.
// ● Crear una función que pinte en pantalla cuántos números tiene el array de números.
// ● Crea los nodos necesarios para imprimir un formulario.
// ● Crea los nodos necesarios para imprimir una tabla.
// ● Crea array de objetos 10 objetos con su respectivos key:value. Cada objeto deberá tener las siguientes keys: id, name, status, species, type, gender El value de cada key lo asignas tú
// ● Imprime cada elemento del objeto dentro de la tabla que creaste anteriormente.