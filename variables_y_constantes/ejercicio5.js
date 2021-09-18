/* El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que
determina la cantidad de grasa de una persona.
El BMI se calcula con la siguiente formula:
peso / altura^2 = peso / altura al cuadrado
Escribe un programa que le pida al usuario su peso y su altura para calcular su IMC e
imprima la frase "Tu IMC es X". */

let peso = prompt(" Ingrese su peso");
let altura = prompt("ingrese su altura");
let resulatdo = parseFloat(peso) / parseFloat(altura ** 2);
let mensaje = " Tu IMC es:";
let final = mensaje + " " + resulatdo;
console.log(final);
document.write(final);
