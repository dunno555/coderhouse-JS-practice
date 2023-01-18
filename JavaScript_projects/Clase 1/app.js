let nombreDeAcceso = prompt('CÓDIGO');

function verificacion(codigo) {
    if (codigo == 'casita') {
        alert('INGRESO OTORGADO');
    } else {
        alert('INGRESO DENEGADO');
    };
};

alert(verificacion(nombreDeAcceso));