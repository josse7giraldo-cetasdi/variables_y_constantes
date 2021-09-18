// Escribe un programa que le pida al usuario su nombre, año actual y año de nacimiento//

/*El programa debe imprimir su nombre y edad actual en la consola con la frase "Hola
Sergio, Tienes X años". Por ejemplo, asumiendo que el año actual es 2021 y el
usuario ingresa 2000, el programa debe imprimir en la consola */
let nombre = prompt("digite su nombre");
let añoActual = prompt("digite el año actual");
let añoNacimiento = prompt("digite el año de nacimiento");
let edad = parseInt(añoActual) - parseInt(añoNacimiento);
let imprimir = "hola," + " " + nombre + " tienes" + edad + "años";
document.write(imprimir);
