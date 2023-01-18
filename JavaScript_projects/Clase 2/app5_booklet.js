let str = prompt('Ingrese un caracter');

// Two ways of going about it

// Option 1
// if (str == 'y' || str == 'Y') {
//     alert('Correcto');
// } else {
//     alert('Error');
// };

// Option 2
if (str.toLowerCase() == 'y') {
    alert('Correcto');
} else {
    alert('Error');
};