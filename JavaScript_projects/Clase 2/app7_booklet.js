let num = parseInt(prompt('Ingrese un número'));

if (num < 0 || isNaN(num)) {
    alert('El valor ingresado es inválido. Cargue la página de nuevo y vuelva a intentar');
}

if (num >= 0 && num <= 1000) {
    alert('Presupuesto bajo');
} else if (num >= 1001 && num <= 3000) {
    alert('Presupuesto medio')
} else if (num >= 3001) {
    alert('Presupuesto alto')
};