// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declarar la variable de tipo array para almacenar los nombres de los amigos
let amigos = [];

// Función para validar la entrada y convertir a mayúsculas
function validarEntrada() {
    const input = document.getElementById('amigo');
    const soloLetras = /^[a-zA-Z\s]*$/;

    // Eliminar caracteres no permitidos
    if (!soloLetras.test(input.value)) {
        input.value = input.value.replace(/[^a-zA-Z\s]/g, '');
    }

    // Convertir a mayúsculas
    input.value = input.value.toUpperCase();
}

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById('amigo');
    const nombreAmigo = input.value.trim();

    // Validar la entrada
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar que el nombre tenga al menos 5 caracteres
    if (nombreAmigo.length < 5) {
        alert("El nombre debe tener al menos 5 caracteres.");
        return;
    }

    // Validar que el nombre solo contenga letras
    const soloLetras = /^[a-zA-Z\s]+$/;
    if (!soloLetras.test(nombreAmigo)) {
        alert("El nombre solo puede contener letras.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    input.value = "";

    // Actualizar la lista de amigos en el HTML
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo y agregar elementos a la lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    // Validar que haya al menos 4 amigos disponibles
    if (amigos.length < 4) {
        alert("Debe ingresar al menos 4 nombres para realizar el sorteo.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;

    // Lanzar confeti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Mostrar el botón de reinicio
    document.getElementById('resetButton').style.display = 'block';
}

// Función para reiniciar el sorteo
function reiniciarSorteo() {
    // Limpiar el array de amigos
    amigos = [];

    // Limpiar la lista de amigos en el HTML
    actualizarListaAmigos();

    // Limpiar el resultado
    document.getElementById('resultado').innerHTML = "";

    // Ocultar el botón de reinicio
    document.getElementById('resetButton').style.display = 'none';
}