let product1 = prompt('Ingrese el primer producto');
let product2 = prompt('Ingrese el segundo producto');
let product3 = prompt('Ingrese el tercer producto');
let product4 = prompt('Ingrese el cuarto producto');

let arr = new Array();
arr.push(product1, product2, product3, product4);

function capitalize(str) {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
};

if (arr.includes('')) {
    alert('Error: es necesario cargar todos los productos. Cargue la página de nuevo e intente otra vez')
} else {
    alert(`Estos fueron los productos ingresados:\n
       Producto 1: ${capitalize(product1)}\n
       Producto 2: ${capitalize(product2)}\n
       Producto 3: ${capitalize(product3)}\n
       Producto 4: ${capitalize(product4)}`);
};