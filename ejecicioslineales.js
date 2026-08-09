

// EJERCICIO 1
// Calcular salario después de descuentos de salud y pensión

let salarioBase = Number(prompt("Digite el salario base"));

let salud = salarioBase * 0.04;
let pension = salarioBase * 0.07;
let salarioTotal = salarioBase - (salud + pension);

alert("El salario total es: " + salarioTotal);
console.log("El salario total es: " + salarioTotal);
document.writeln("<h1>El salario total es: " + salarioTotal + "</h1>");

// EJERCICIO 2
// Calcular el área de un triángulo

let base = Number(prompt("Digite la base del triángulo"));
let altura = Number(prompt("Digite la altura del triángulo"));

let areaTriangulo = (base * altura) / 2;

alert("El área del triángulo es: " + areaTriangulo);
console.log("El área del triángulo es: " + areaTriangulo);
document.writeln("<h1>El área del triángulo es: " + areaTriangulo + "</h1>");

// EJERCICIO 3
// Operaciones matemáticas

let numero1 = Number(prompt("Digite el primer número"));
let numero2 = Number(prompt("Digite el segundo número"));

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let modulo = numero1 % numero2;

alert("Suma: " + suma);
console.log("Suma: " + suma);
document.writeln("<p>Suma: " + suma + "</p>");

alert("Resta: " + resta);
console.log("Resta: " + resta);
document.writeln("<p>Resta: " + resta + "</p>");

alert("Multiplicación: " + multiplicacion);
console.log("Multiplicación: " + multiplicacion);
document.writeln("<p>Multiplicación: " + multiplicacion + "</p>");

alert("División: " + division);
console.log("División: " + division);
document.writeln("<p>División: " + division + "</p>");

alert("Módulo: " + modulo);
console.log("Módulo: " + modulo);
document.writeln("<p>Módulo: " + modulo + "</p>");

// EJERCICIO 4
// Calcular sueldo mensual

let horasNormales = Number(prompt("Digite las horas normales trabajadas"));
let horasExtras = Number(prompt("Digite las horas extras trabajadas"));
let valorHoraNormal = Number(prompt("Digite el valor de la hora normal"));
let valorHoraExtra = Number(prompt("Digite el valor de la hora extra"));

let pagoHorasNormales = horasNormales * valorHoraNormal;
let pagoHorasExtras = horasExtras * valorHoraExtra;
let sueldoMensual = pagoHorasNormales + pagoHorasExtras;

alert("El sueldo mensual es: " + sueldoMensual);
console.log("El sueldo mensual es: " + sueldoMensual);
document.writeln("<h1>El sueldo mensual es: " + sueldoMensual + "</h1>");

// EJERCICIO 6
// Porcentaje de alumnos y alumnas

let hombres = Number(prompt("Digite el número de hombres"));
let mujeres = Number(prompt("Digite el número de mujeres"));

let total = hombres + mujeres;

let porcentajeHombres = (hombres / total) * 100;
let porcentajeMujeres = (mujeres / total) * 100;

alert("Porcentaje de hombres: " + porcentajeHombres + "%");
console.log("Porcentaje de hombres: " + porcentajeHombres + "%");
document.writeln("<p>Porcentaje de hombres: " + porcentajeHombres + "%</p>");

alert("Porcentaje de mujeres: " + porcentajeMujeres + "%");
console.log("Porcentaje de mujeres: " + porcentajeMujeres + "%");
document.writeln("<p>Porcentaje de mujeres: " + porcentajeMujeres + "%</p>");

// EJERCICIO 7
// Calcular promedio de tres notas

let nota1 = Number(prompt("Digite la primera nota"));
let nota2 = Number(prompt("Digite la segunda nota"));
let nota3 = Number(prompt("Digite la tercera nota"));

let promedio = (nota1 + nota2 + nota3) / 3;

alert("El promedio es: " + promedio);
console.log("El promedio es: " + promedio);
document.writeln("<h1>El promedio es: " + promedio + "</h1>");


// EJERCICIO 8
// Calcular salario después de descuentos de salud y pensión

let salarioBase = Number(prompt("Digite el salario base"));

let salud = salarioBase * 0.04;
let pension = salarioBase * 0.07;
let salarioTotal = salarioBase - (salud + pension);

alert("El salario total es: " + salarioTotal);
console.log("El salario total es: " + salarioTotal);
document.writeln("<h1>El salario total es: " + salarioTotal + "</h1>");