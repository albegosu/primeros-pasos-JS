//Función para crear un párrafo con cada valor que tomen las variables.
function createParagraph(value) {
    let paragraph = document.createElement("p");
    let text = document.createTextNode(value); 
    paragraph.appendChild(text); 
    let newMain = document.getElementById("main");
    newMain.appendChild(paragraph); 
  };
//Función para crear un párrafo Y UN CONSOLE LOG con cada valor que tomen las variables.
function createParClg(value) {
    let paragraph = document.createElement("p");
    let text = document.createTextNode(value); 
    paragraph.appendChild(text); 
    let newMain = document.getElementById("main");
    newMain.appendChild(paragraph); 
    console.log(value);
  };

function createH2(value) {
    let header = document.createElement("h2");
    let text = document.createTextNode(value); 
    header.appendChild(text); 
    let newHeader = document.getElementById("main");
    newHeader.appendChild(header); 
};

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

createH2("Variables");

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
createH2("Funciones");

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
createH2("Objetos");

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
createH2("Arrays")

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
let oddArray = [];
function lessEven (nameArray) {
    for (let i=0; i<nameArray.length; i++) {
        if (nameArray[i] % 2 !== 0){
            oddArray.push(nameArray[i]);
        }
    }
};

createParClg('Este es el Array antes del filtrado ' + newArray);
lessEven(newArray);
createParClg('Este es el Array después del filtrado ' + oddArray);

// ● Crear una función que devuelva el número mayor de un array.
createParClg('El mayor número del Array es ' + Math.max(...newArray));

// ● Crear una función que devuelva el número menor de un array.
createParClg('El menor número del Array es ' + Math.min(...newArray));

// ● Crear un función que convierta en minúsculas todas las letras de un texto.
const lettersArray = ['BEGOÑA', 'MAriA', 'maNUeLa', 'kori', 'Alberto'];
let lowerArray = [];

function letsLower(nameArray, newLowArray) {
    for (i=0; i < nameArray.length; i++){
        newLowArray.push(nameArray[i].toLowerCase());
    }
};

createParClg('Este es el Array de super nombres ' + lettersArray);
letsLower(lettersArray, lowerArray);
createParClg('Este es el Array en minúsculas ' + lowerArray);

// ● Crear una función que convierta en mayúsculas todas las letras de un texto.
const lettersUpArray = ['BEGOÑA', 'MAriA', 'maNUeLa', 'kori', 'Alberto'];
let upperArray = [];

function letsUpper(nameArray, newUpperArray) {
    for (i=0; i < nameArray.length; i++ ){
        newUpperArray.push(nameArray[i].toUpperCase());
    }
};

createParClg('Este es el Array de super nombres ' + lettersUpArray);
letsUpper(lettersUpArray, upperArray);
createParClg('Este es el Array en minúsculas ' + upperArray);

// ● Crear una función que reciba un array de nombres y que convierta la primera letra de cada nombre en mayúscula.
const beautifulNames = ['BEGOÑA', 'MAriA', 'maNUeLa', 'kori', 'Alberto'];
let allLower = [];
let mostBeautiful = [];

letsLower(beautifulNames, allLower);
createParClg(allLower);

function upperFirstLetter (nameArray, cleanNames) {
    nameArray.map(function(element) {
        cleanNames.push(element.charAt(0).toUpperCase() + element.slice(1));
     })
};

upperFirstLetter(allLower, mostBeautiful);
createParClg(mostBeautiful);


// MANIPULACIÓN DEL DOM
  function createHeader(value) {
    let header = document.createElement("h2");
    let text = document.createTextNode(value); 
    header.appendChild(text); 
    let newContainer = document.getElementById("container");
    newContainer.appendChild(header); 
    console.log(value);
};

// ● Crear un botón en HTML y usar JavaScript para mostrar un mensaje cuando se hace clic.
function createContainer() {
    let message = prompt("Hello, escribe algo: ");
    document.getElementById("txtBox").innerHTML = message;
    console.log(message);
  };

    let btn = document.getElementById("btn");
    btn.addEventListener("click", createContainer);

// ● Cambiar el contenido de un elemento HTML mediante JavaScript.
const message = ["Te cambié", "Tremendo cambio", "No te lo esperabas...", "Bueno, pues adiós", "CHORPRECHAAAAA!"];

function printRandomMessage() {
    const paragraph = document.getElementById('lorem');
    const randomNumber = Math.floor(Math.random() * message.length);
    const randomMessage = message[randomNumber];
    paragraph.textContent = randomMessage;
};

const btnChange = document.getElementById("btnChange");
btnChange.addEventListener("click", printRandomMessage);

// ● Crear un array de 10 nombres.
const names = ['Rocio', 'Pedro', 'Juan', 'María', 'Dario', 'Susana', 'Antonio', 'Patricia', 'Daniel', 'Lucia'];

// ● Crear una función que imprima en pantalla una lista con los nombres del array de nombres.
function namesUl(nombres) {
    const lista = document.createElement('ul');
    nombres.forEach((nombre) => {
      const item = document.createElement('li');
      item.textContent = nombre;
      lista.appendChild(item);
    });
    return lista;
  }

  const namesList = namesUl(names);
  const container = document.getElementById('names-list');
  container.appendChild(namesList);

// ● Crear un array de números.
const numbers = [1, 23, 4, 2121, 12, 32, 21, 124, 142131, 12, 1277, 864, 3]

// ● Crear una función que pinte en pantalla cuántos números tiene el array de números.
function createParRight(value) {
    let paragraph = document.createElement("p");
    let text = document.createTextNode(value); 
    paragraph.appendChild(text); 
    let newContainer = document.getElementById("container");
    newContainer.appendChild(paragraph); 
    console.log(value);
  };

createHeader('Array de números:');
createParRight('El array de números contiene ' + numbers.length + ' números.');

// ● Crea los nodos necesarios para imprimir un formulario.
function printForm() {
    const form = document.createElement('form');
    form.setAttribute('id', 'miFormulario');
  
    const labelNombre = document.createElement('label');
    labelNombre.textContent = 'Nombre:';
    const inputNombre = document.createElement('input');
    inputNombre.setAttribute('type', 'text');
    inputNombre.setAttribute('name', 'nombre');
  
    const labelEmail = document.createElement('label');
    labelEmail.textContent = 'Apellido:';
    const inputEmail = document.createElement('input');
    inputEmail.setAttribute('type', 'text');
    inputEmail.setAttribute('name', 'apellido');
  
    const botonEnviar = document.createElement('button');
    botonEnviar.setAttribute('type', 'submit');
    botonEnviar.textContent = 'Enviar';
  
    form.appendChild(labelNombre);
    form.appendChild(inputNombre);
    form.appendChild(labelEmail);
    form.appendChild(inputEmail);
    form.appendChild(botonEnviar);
  
    const contenedor = document.getElementById('container');
    contenedor.appendChild(form);
  }
  
  createHeader("Form creado en JS");
  printForm();
  
// ● Crea los nodos necesarios para imprimir una tabla.
function printChart() {
    const chartData = [
      { nombre: 'Kenzo', edad: 6, raza: 'Border' },
      { nombre: 'Kora', edad: 4, raza: 'Border' },
      { nombre: 'Thor', edad: 7, raza: 'Golden' },
      { nombre: 'Gizmo', edad: 3, raza: 'Pastos' }
    ];
  
    const chart = document.createElement('table');
    const titleChart = document.createElement('thead');
    const bodyChart = document.createElement('tbody');
  
    const rowTitle = document.createElement('tr');
    const columnTitle = document.createElement('th');
    columnTitle.textContent = 'Nombre';
    const edadTitle = document.createElement('th');
    edadTitle.textContent = 'Edad';
    const razaTitle = document.createElement('th');
    razaTitle.textContent = 'Raza';
  
    rowTitle.appendChild(columnTitle);
    rowTitle.appendChild(edadTitle);
    rowTitle.appendChild(razaTitle);
    titleChart.appendChild(rowTitle);
    chart.appendChild(titleChart);
  
    chartData.forEach((dato) => {
      const row = document.createElement('tr');
      const nombreCell = document.createElement('td');
      nombreCell.textContent = dato.nombre;
      const edadCell = document.createElement('td');
      edadCell.textContent = dato.edad;
      const razaCell = document.createElement('td');
      razaCell.textContent = dato.raza;
  
      row.appendChild(nombreCell);
      row.appendChild(edadCell);
      row.appendChild(razaCell);
      bodyChart.appendChild(row);
    });
  
    chart.appendChild(bodyChart);
  
    const contenedor = document.getElementById('container');
    contenedor.appendChild(chart);
  }
  
  createHeader('Tabla creada en JS')
  printChart();

// ● Crea array de objetos 10 objetos con su respectivos key:value. Cada objeto deberá tener las siguientes keys: id, name, status, species, type, gender El value de cada key lo asignas tú
const arrayObjects = [
    { id: 1, name: "Rocio", status: true, species: "Human", type: "user", gender: "Female" },
    { id: 2, name: "Pedro", status: true, species: "Human", type: "user", gender: "Male" },
    { id: 3, name: "Juan", status: false, species: "Human", type: "user", gender: "Male" },
    { id: 4, name: "Maria", status: false, species: "Human", type: "administrator", gender: "Female" },
    { id: 5, name: "Dario", status: true, species: "Human", type: "user", gender: "Male" },
    { id: 6, name: "Susana", status: false, species: "Human", type: "user", gender: "Female" },
    { id: 7, name: "Antonio", status: false, species: "Human", type: "user", gender: "Male" },
    { id: 8, name: "Patricia", status: true, species: "Human", type: "user", gender: "Female" },
    { id: 9, name: "Daniel", status: true, species: "Human", type: "user", gender: "Male" },
    { id: 10, name: "Lucia", status: true, species: "Human", type: "user", gender: "Female" }
  ];

// ● Imprime cada elemento del objeto dentro de la tabla que creaste anteriormente.
function printObjects(array) {
    const container = document.getElementById('container');
    const list = document.createElement('ul');
  
    array.forEach(users => {
      const item = document.createElement('li');
      const properties = Object.entries(users);
  
      properties.forEach(([key, value]) => {
        const property = document.createElement('span');
        property.textContent = `${key}: ${value}`;
        item.appendChild(property);
      });
  
      list.appendChild(item);
    });
  
    container.appendChild(list);
  }

  createHeader('Objetos de un Array')
  printObjects(arrayObjects);