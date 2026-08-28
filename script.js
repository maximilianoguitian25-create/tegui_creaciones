document.addEventListener("DOMContentLoaded", () => {
    
    const formulario = document.getElementById("formulario-contacto");

    if (formulario) {
        
        formulario.addEventListener("submit", (e) => {
            e.preventDefault(); 

            // Lectura de los datos con los IDs exactos de tu HTML
            const nombre = document.getElementById("nombre").value.trim();
            const telefono = document.getElementById("telefono").value.trim();
            const email = document.getElementById("email").value.trim();
            const productoSelect = document.getElementById("producto-interes");
            const producto = productoSelect.options[productoSelect.selectedIndex].text;
            const mensaje = document.getElementById("mensaje").value.trim();

            // Cambiar el texto del botón mientras envía
            const btnSubmit = formulario.querySelector("button[type='submit']");
            if (btnSubmit) btnSubmit.innerText = "Enviando...";

            // Objeto con las variables para tu plantilla de EmailJS
            const templateParams = {
                nombre: nombre,
                telefono: telefono,
                email: email,
                producto: producto,
                mensaje: mensaje || "Sin detalles adicionales"
            };

            // Tus identificadores de EmailJS
            const serviceID = "service_z1o6u3y"; 
            const templateID = "AQUÍ_TU_TEMPLATE_ID"; // Reemplazá este texto por tu ID (el que empieza con template_)

            emailjs.send(serviceID, templateID, templateParams)
                .then(() => {
                    alert("¡Consulta enviada con éxito!");
                    formulario.reset(); 
                })
                .catch((error) => {
                    console.error("Error al enviar el correo:", error);
                    alert("Error de EmailJS: " + (error.text || error.status || JSON.stringify(error)));
                })
                .finally(() => {
                    if (btnSubmit) btnSubmit.innerText = "Enviar Consulta";
                });
        });
    }

    console.log("TEGUI Creaciones: JS cargado y listo.");
});
