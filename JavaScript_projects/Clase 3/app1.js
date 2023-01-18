let password = prompt('Enter your password');

for (let i = 3; i > 0;) {
    if (password.toLowerCase() == 'esfera') {
        alert('Access granted');
        i = -1; // Esto me parece horrible. Pienso que debe haber alguna mejor manera para solucionarlo
    } else {
        i--;
        
        // Sospecho lo mismo acá, que debe haber alguna mejor manera de expresarlo

        if (i > 0) {
            alert(`Access denied. Please, try again. You have ${i} remaining access attempt(s)`);
            password = prompt('Enter your password');
        };

        if (i == 0) {
            alert(`Your account has been blocked. Please, contact an administrator to review your current access`);
        };
    };
};