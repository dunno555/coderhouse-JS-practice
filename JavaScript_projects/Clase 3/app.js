let numeroIngresado = parseInt(prompt('Ingrese un número para mostrar la tabla de multiplicar'));
let tablaDeMultiplicar = `Esta es la tabla de multiplicar del ${numeroIngresado}:\n`;

for (let i = 1; i <= 10; i++) {
    let resultado = numeroIngresado * i;
    tablaDeMultiplicar = tablaDeMultiplicar.concat(`${numeroIngresado} X ${i} = ${resultado}\n`);
};

alert(tablaDeMultiplicar);