function prepararPedido(com) {
    let mensaje = '';
    let precio = 0;

    switch (com) {
        case 1:
            mensaje = 'tu menu1';
            precio = 10
            break;
        case 2:
            mensaje = 'tu menu2';
            precio = 15
            break;
        case 3:
            mensaje = 'tu menu3';
            precio = 23
            break;
        default:
            break;
    }
    alert(mensaje);
}



const tomarPedido = () => {
    const comida = Number(prompt(`que te gustaría pedir
    1- menu1
    2- menu2
    3- menu3`));

    prepararPedido(comida);
}