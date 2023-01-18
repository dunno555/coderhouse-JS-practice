let num = parseInt(prompt('Ingrese un número entre 1 y 4'));

if (num < 1 || num > 4 || isNaN(num)) {
    alert('El valor ingresado es inválido. Cargue la página de nuevo y vuelva a intentar');
}

switch (num) {
    case 1:
        alert('Elegiste a Homero');
        break;
    case 2:
        alert('Elegiste a Marge');
        break;
    case 3:
        alert('Elegiste a Bart');
        break;
    case 4:
        alert('Elegiste a Lisa');
        break;

    default:
        break;
};