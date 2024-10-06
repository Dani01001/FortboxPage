function abrirVentanaEmergente(url) {
    const ancho = 800; // Ancho de la ventana
    const alto = 900;  // Alto de la ventana

    // Obtener dimensiones de la pantalla
    const left = (window.innerWidth - ancho) / 2;
    const top = (window.innerHeight - alto) / 2;

    // Crear la ventana emergente centrada
    window.open(url, 'VentanaEmergente', `width=${ancho},height=${alto},top=${top},left=${left}`);
}

function enviarSolicitud() {
    // Aquí puedes manejar la lógica para enviar la solicitud (por ejemplo, validaciones, enviar datos, etc.)
    alert("Solicitud enviada."); // Mensaje de confirmación (puedes personalizarlo)

    // Cerrar el modal
    cerrarModal();
}


// Evento de clic en el menú hamburguesa
document.querySelector('.menu-alternativo').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    const menuImg = document.getElementById('menuImg');
    
    // Alternar la clase show para abrir/cerrar el menú
    menu.classList.toggle('show');
    
    // Cambiar la imagen según el estado del menú
    if (menu.classList.contains('show')) {
        menuImg.src = "close.png";  // Imagen de cerrar (cuando el menú está abierto)
    } else {
        menuImg.src = "menu.png";  // Imagen de menú hamburguesa (cuando el menú está cerrado)
    }
});
  
// Agregar evento de clic a los elementos del menú
document.querySelectorAll('.menu-item a').forEach(function(element) {
    element.addEventListener('click', function() {
        // Cerrar el menú cuando se selecciona un elemento
        document.querySelector('.menu').classList.remove('show');
        
        // Cambiar la imagen a menú hamburguesa
        document.getElementById('menuImg').src = "menu.png";
    });
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("menuImg").src = "close.png";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("menuImg").src = "menu.png";
}
