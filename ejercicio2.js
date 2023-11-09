// Declaro las variables para poder jugar en cualquier momento con otro valor
let sumar = 5;
let multiplicar = 7;
let dividir = 9;

// Con un bucle for recorremos desde 0 hasta 10 y vamos mostrando directamente el resultado sumado
document.write("Tabla de Sumar del " + sumar + ":<br><br>");
for(let i = 0; i < 11; i++){
    document.write(sumar + " + " + i + " = " + (sumar + i) + "<br>");
}

// Igual que la tabla de sumar pero realizando multiplicacion
document.write("<br>Tabla de Multiplicar del " + multiplicar + ":<br><br>");
for(let i = 0; i < 11; i++){
    document.write(multiplicar + " x " + i + " = " + (multiplicar * i) + "<br>");
}

// En este caso la operacion se hace de manera inversa, es el dividendo el que lleva la operacion de multiplicacion para mostrar como resultado el valor del bucle
document.write("<br>Tabla de Dividir del " + dividir + ":<br><br>");
for(let i = 0; i < 11; i++){
    document.write((i * dividir) + " / " + dividir + " = " + i + "<br>");
}