document.addEventListener("DOMContentLoaded", () => {
    
    // Capturamos el formulario del DOM
    const formulario = document.querySelector("form");

    if (formulario) {
        
        // Escuchamos el evento de envío del formulario
        formulario.addEventListener("submit", (e) => {
            e.preventDefault(); // Evitamos que la página se recargue por defecto

            // Leemos los valores del formulario
            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const telefono = document.getElementById("telefono").value.trim();
            const producto = document.getElementById("producto-interes").value;
            const mensaje = document.getElementById("mensaje").value.trim();

            // Validamos los campos requeridos
            if (!nombre || !email || !mensaje) {
                alert("Por favor, completa los campos obligatorios (Nombre, Correo y Mensaje).");
                return;
            }

            // Cambiamos el texto del botón durante el envío
            const btnSubmit = formulario.querySelector("button[type='submit']");
            if (btnSubmit) btnSubmit.innerText = "Enviando...";

            // Creamos el objeto con los nombres de variables exactos asignados en la plantilla EmailJS
            const templateParams = {
                nombre: nombre,
                email: email,
                telefono: telefono || "No especificado",
                producto: producto,
                mensaje: mensaje
            };

            // Reemplazá 'TU_SERVICE_ID' y 'TU_TEMPLATE_ID' con los identificadores de tu panel de EmailJS
            emailjs.send("TU_SERVICE_ID", "TU_TEMPLATE_ID", templateParams)
                .then(() => {
                    alert("¡Correo enviado con éxito!");
                    formulario.reset(); // Limpiamos el formulario tras un envío correcto
                })
                .catch((error) => {
                    console.error("Error al enviar el correo:", error);
                    alert("Ocurrió un error al enviar el mensaje. Inténtalo de nuevo más tarde.");
                })
                .finally(() => {
                    if (btnSubmit) btnSubmit.innerText = "Enviar Consulta";
                });
        });
    }

    console.log("TEGUI Creaciones: JS con EmailJS cargado correctamente.");
});