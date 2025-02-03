let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerText = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        	return generarNumeroSecreto();
    }else {
        listaNumerosSorteados.push(numeroGenerado);
        return(numeroGenerado);
    }
}

console.log(numeroSecreto);


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero ${intentos} en ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if (numeroDeUsuario < numeroSecreto){
        asignarTextoElemento('p', ' El numero secreto es mayor');   
    }else if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', ' El numero secreto es menor'); 
    }
    intentos++;
    limpiarCaja();

    if (numeroDeUsuario != numeroSecreto && intentos == 4 ) {
        asignarTextoElemento('p', 'Jugaste el maximo de intentos, presiona "F5"');
    }

        

    
    return;
}


function limpiarCaja() {
   // Limpiamos la caja del valor usuario
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', 'Indica un numero del 1 - 10:');
numeroSecreto = generarNumeroSecreto();
intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero Aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();