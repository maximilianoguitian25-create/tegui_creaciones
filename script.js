document.addEventListener("DOMContentLoaded", () => {
    
    const formulario = document.querySelector("form");

    if (formulario) {
        
        // Envio
        formulario.addEventListener("submit", (e) => {
            e.preventDefault(); 

            // Lectura de inputs
            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email") ? document.getElementById("email").value.trim() : "";
            const telefono = document.getElementById("telefono").value.trim();
            const producto = document.getElementById("producto-interes").value;
            const mensaje = document.getElementById("mensaje").value.trim();

            // Vali
            if (!nombre || !mensaje) {
                alert("Por favor, completa los campos obligatorios (Nombre y Mensaje).");
                return;
            }

            // Cambio boton
            const btnSubmit = formulario.querySelector("button[type='submit']");
            if (btnSubmit) btnSubmit.innerText = "Enviando...";

            // Objeto con los datos para la plantilla
            const templateParams = {
                nombre: nombre,
                email: email || "No especificado",
                telefono: telefono || "Sin teléfono",
                producto: producto,
                mensaje: mensaje
            };

            emailjs.send("service_xxxxxx", "template_xxxxxx", templateParams)
                .then(() => {
                    alert("¡Correo enviado con éxito!");
                    formulario.reset(); // Limp
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
