
// Función para inicializar Landbot
function initLandbot() {
    // Evitar múltiples inicializaciones
    if (window.myLandbot) {
        return;
    }

    // Crear el script de Landbot
    var script = document.createElement('script');
    script.type = "module";
    script.async = true;
    script.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs';

    script.addEventListener('load', function () {
        try {
            // Crear la instancia de Landbot
            window.myLandbot = new Landbot.Livechat({
                configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-3113465-FC33DPI8VLEVKUBZ/index.json',
            });

            // Abrir el chat automáticamente después de un delay
            setTimeout(function () {
                if (window.myLandbot && typeof window.myLandbot.open === 'function') {
                    window.myLandbot.open();
                }
            }, 2000);

        } catch (error) {
            console.error('Error al inicializar Landbot:', error);
        }
    });

    script.addEventListener('error', function () {
        console.error('Error al cargar el script de Landbot');
    });

    // Insertar el script en el head
    document.head.appendChild(script);
}

// Intentar inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLandbot);
} else {
    // Si el DOM ya está cargado, inicializar inmediatamente
    initLandbot();
}

// También inicializar cuando la ventana esté completamente cargada
window.addEventListener('load', function () {
    if (!window.myLandbot) {
        initLandbot();
    }
});

// Mantener los eventos originales como respaldo
window.addEventListener('mouseover', function () {
    if (!window.myLandbot) {
        initLandbot();
    }
}, { once: true });

window.addEventListener('touchstart', function () {
    if (!window.myLandbot) {
        initLandbot();
    }
}, { once: true });

