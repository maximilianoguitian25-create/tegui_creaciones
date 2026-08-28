document.addEventListener("DOMContentLoaded", () => {
    
    const formulario = document.querySelector("form");

    if (formulario) {
        
        // Evento de envío del formulario
        formulario.addEventListener("submit", (e) => {
            e.preventDefault(); 

            // Lectura de inputs
            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email") ? document.getElementById("email").value.trim() : "";
            const telefono = document.getElementById("telefono").value.trim();
            const producto = document.getElementById("producto-interes").value;
            const mensaje = document.getElementById("mensaje").value.trim();

            // Validación de campos requeridos
            if (!nombre || !mensaje) {
                alert("Por favor, completa los campos obligatorios (Nombre y Mensaje).");
                return;
            }

            // Cambiar estado del botón
            const btnSubmit = formulario.querySelector("button[type='submit']");
            if (btnSubmit) btnSubmit.innerText = "Enviando...";

            // Parámetros que se envían a la plantilla
            const templateParams = {
                nombre: nombre,
                email: email || "No especificado",
                telefono: telefono || "Sin teléfono",
                producto: producto,
                mensaje: mensaje
            };

            // ATENCIÓN: Reemplazá "service_xxxxxx" y "template_xxxxxx" con tus IDs reales de EmailJS
            emailjs.send("service_xxxxxx", "template_xxxxxx", templateParams)
                .then(() => {
                    alert("¡Correo enviado con éxito!");
                    formulario.reset(); 
                })
                .catch((error) => {
                    console.error("Error al enviar el correo:", error);
                    alert("Error de EmailJS: " + (error.text || JSON.stringify(error)));
                })
                .finally(() => {
                    if (btnSubmit) btnSubmit.innerText = "Enviar Consulta";
                });
        });
    }

    console.log("TEGUI Creaciones: JS con EmailJS cargado correctamente.");
});
