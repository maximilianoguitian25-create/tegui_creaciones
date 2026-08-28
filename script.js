document.addEventListener("DOMContentLoaded", () => {
    
    const formulario = document.querySelector("form");

    if (formulario) {
        
        // Evento de envío del formulario
        formulario.addEventListener("submit", (e) => {
            e.preventDefault(); 

            // Lectura de inputs del HTML
            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email") ? document.getElementById("email").value.trim() : "";
            const telefono = document.getElementById("telefono").value.trim();
            const producto = document.getElementById("producto-interes").value;
            const mensaje = document.getElementById("mensaje").value.trim();

            // Validación de campos obligatorios
            if (!nombre || !mensaje) {
                alert("Por favor, completa los campos obligatorios (Nombre y Mensaje).");
                return;
            }

            // Cambiar el texto del botón mientras envía
            const btnSubmit = formulario.querySelector("button[type='submit']");
            if (btnSubmit) btnSubmit.innerText = "Enviando...";

            // Parámetros que coinciden con las variables de la plantilla {{nombre}}, {{email}}, etc.
            const templateParams = {
                nombre: nombre,
                email: email || "No especificado",
                telefono: telefono || "Sin teléfono",
                producto: producto,
                mensaje: mensaje
            };

            // IMPORTANTE: Reemplazá 'service_xxxxxx' y 'template_xxxxxx' por tus IDs de EmailJS
            emailjs.send("service_xxxxxx", "template_xxxxxx", templateParams)
                .then(() => {
                    alert("¡Correo enviado con éxito!");
                    formulario.reset(); 
                })
                .catch((error) => {
                    console.error("Error al enviar el correo:", error);
                    // Muestra el motivo exacto que devuelve la API (ej: "The public key is required" o "The Service ID is invalid")
                    alert("Error al enviar: " + (error.text || error.status || JSON.stringify(error)));
                })
                .finally(() => {
                    if (btnSubmit) btnSubmit.innerText = "Enviar Consulta";
                });
        });
    }

    console.log("TEGUI Creaciones: JS con EmailJS cargado correctamente.");
});
