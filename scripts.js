
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
document.head.appendChild(script);

document.addEventListener('DOMContentLoaded', () => {
    const stars = createSubtleRain(50);
    document.body.appendChild(stars);

    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                Swal.fire({
                    title: '¡Mensaje Enviado! 🚀',
                    text: 'Gracias por contactarme. Te responderé pronto.',
                    icon: 'success',
                    background: '#0a0a23',
                    color: '#fff',
                    confirmButtonColor: '#6b6bff'
                });
                form.reset();
            } else {
                Swal.fire({
                    title: 'Oops... 😕',
                    text: 'Hubo un problema al enviar el mensaje.',
                    icon: 'error',
                    background: '#0a0a23',
                    color: '#fff',
                    confirmButtonColor: '#6b6bff'
                });
            }
        })
        .catch(() => {
            Swal.fire({
                title: 'Error de Red 🌌',
                text: 'Inténtalo de nuevo más tarde.',
                icon: 'warning',
                background: '#0a0a23',
                color: '#fff',
                confirmButtonColor: '#6b6bff'
            });
        });
    });
});

// Función para crear un efecto de lluvia sutil que cubra toda la página
function createSubtleRain(count) {
    const container = document.createElement('div');
    container.style.position = 'fixed';  // Cambiado de 'absolute' a 'fixed'
    container.style.top = 0;
    container.style.left = 0;
    container.style.width = '100%';
    container.style.height = '100vh'; // Solo cubre la ventana visible
    container.style.pointerEvents = 'none';
    container.style.overflow = 'hidden';
    container.style.zIndex = '9999';  // Para asegurarse de que esté sobre otros elementos

    for (let i = 0; i < count; i++) {
        const drop = document.createElement('div');
        drop.style.position = 'absolute';
        drop.style.width = Math.random() * 1.5 + 0.5 + 'px';
        drop.style.height = Math.random() * 15 + 10 + 'px';
        drop.style.backgroundColor = '#87CEEB';
        drop.style.opacity = Math.random() * 0.4 + 0.3;
        drop.style.top = Math.random() * -200 + 'px';
        drop.style.left = Math.random() * 100 + '%';
        drop.style.animation = 'subtleRainFall 5s linear infinite';
        drop.style.animationDelay = Math.random() * 5 + 's';

        container.appendChild(drop);
    }

    document.body.appendChild(container);
    return container;
}
// Función para crear lluvia normal que cubra toda la página
function createNormalRain(count) {
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = 0;
    container.style.left = 0;
    container.style.width = '100%';
    container.style.height = document.body.scrollHeight + 'px'; // Ajuste para cubrir toda la página
    container.style.pointerEvents = 'none';
    container.style.overflow = 'hidden';

    for (let i = 0; i < count; i++) {
        const drop = document.createElement('div');
        drop.style.position = 'absolute';
        drop.style.width = Math.random() * 2 + 1 + 'px';
        drop.style.height = Math.random() * 20 + 10 + 'px';
        drop.style.backgroundColor = '#a3c9f9';
        drop.style.opacity = Math.random() * 0.5 + 0.5;
        drop.style.top = Math.random() * -100 + 'px';
        drop.style.left = Math.random() * 100 + '%';
        drop.style.animation = 'rainFall 1.5s linear infinite';
        drop.style.animationDelay = Math.random() * 2 + 's';

        container.appendChild(drop);
    }

    return container;
}

// Función para crear lluvia neón que cubra toda la página
function createNeonRain(count) {
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = 0;
    container.style.left = 0;
    container.style.width = '100%';
    container.style.height = document.body.scrollHeight + 'px'; // Ajuste para cubrir toda la página
    container.style.pointerEvents = 'none';
    container.style.overflow = 'hidden';

    for (let i = 0; i < count; i++) {
        const drop = document.createElement('div');
        drop.style.position = 'absolute';
        drop.style.width = Math.random() * 3 + 2 + 'px';
        drop.style.height = Math.random() * 30 + 20 + 'px';
        drop.style.backgroundColor = Math.random() > 0.5 ? '#00ffff' : '#ff00ff';
        drop.style.opacity = Math.random() * 0.7 + 0.3;
        drop.style.top = Math.random() * -100 + 'px';
        drop.style.left = Math.random() * 100 + '%';
        drop.style.animation = 'neonRainFall 2s linear infinite';
        drop.style.animationDelay = Math.random() * 2 + 's';

        container.appendChild(drop);
    }

    return container;
}
