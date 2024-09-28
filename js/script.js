document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.about__icons');

    // Crear y agregar luces al contenedor
    for (let i = 0; i < 8; i++) {
        const light = document.createElement('article'); // Cambiado de 'article' a 'div'
        light.classList.add('light');
        container.appendChild(light);
    }

    // Posicionar luces alrededor del contenedor
    const lights = document.querySelectorAll('.about__icons');
    lights.forEach((light, index) => {
        const angle = (index / 8) * 2 * Math.PI; // Calcular el ángulo para distribuir las luces uniformemente
        const radius = 200; // Radio de la circunferencia
        const x = Math.cos(angle) * radius; // Calcular posición X
        const y = Math.sin(angle) * radius; // Calcular posición Y

        light.style.left = `calc(50% + ${x}px)`; // Posicionar la luz horizontalmente
        light.style.top = `calc(50% + ${y}px)`; // Posicionar la luz verticalmente
    });

    // Agregar clase para animar el borde
    container.classList.add('animate-border');
});