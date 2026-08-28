document.addEventListener("DOMContentLoaded", () => {
    
    const formulario = document.querySelector("form");

    if (formulario) {
        
        // Envio
        formulario.addEventListener("submit", (e) => {
            e.preventDefault(); // Evitamos que la página se recargue por defecto

            // Lee
            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const telefono = document.getElementById("telefono").value.trim();
            const producto = document.getElementById("producto-interes").value;
            const mensaje = document.getElementById("mensaje").value.trim();

            // Validacion
            if (!nombre || !email || !mensaje) {
                alert("Por favor, completa los campos obligatorios (Nombre, Correo y Mensaje).");
                return;
            }

            // enciando 
            const btnSubmit = formulario.querySelector("button[type='submit']");
            if (btnSubmit) btnSubmit.innerText = "Enviando...";

            // Creamos el objeto con los nombres de variables exactos asignados en la plantilla EmailJS
            const templateParams = {
                nombre: nombre,
                email: email,
                telefono: telefono || "Sin telefono",
                producto: producto,
                mensaje: mensaje
            };

            emailjs.send("service_xxxxxx", "template_xxxxxx", templateParams)
                .then(() => {
                    alert("¡Correo enviado con éxito!");
                    formulario.reset(); // Limpieza
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
