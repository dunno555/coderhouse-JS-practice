let password = prompt('Enter your password');

for (let i = 3; i > 0;) {
    if (password.toLowerCase() == 'esfera') {
        alert('Acceso concedido');
        i = -1;
    } else {
        i--;

        if (i > 0) {
            alert(`Acceso denegado. Pruebe de nuevo. Le quedan ${i} intento(s)`);
            password = prompt('Enter your password');
        };

        if (i == 0) {
            alert(`Cuenta bloqueada. Por favor, contacte a une administradore para revisar su cuenta`);
        };
    };
};