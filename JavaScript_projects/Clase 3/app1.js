let password = prompt('Enter your password');

for (let i = 2; i >= 0; i--) {
    if (password.toLowerCase() == 'esfera') {
        alert('Access granted');
        break;
    };

    if (i == 0) {
        alert(`Your account has been blocked. Please, contact an administrator to review your current access`);
        break;
    };

    alert(`Access denied. Please, try again. You have ${i} remaining access attempt(s)`);
    password = prompt('Enter your password');
};