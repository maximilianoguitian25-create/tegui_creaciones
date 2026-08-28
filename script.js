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

            // Objeto con las variables que coinciden con tu plantilla de EmailJS
            const templateParams = {
                nombre: nombre,
                telefono: telefono,
                email: email,
                producto: producto,
                mensaje: mensaje || "Sin detalles adicionales"
            };

            // IDs de EmailJS configurados
            const serviceID = "service_z1o6u3y"; 
            const templateID = "TU_TEMPLATE_ID"; // Reemplazar por tu Template ID (ejemplo: template_xxxxx)

            emailjs.send(serviceID, templateID, templateParams)
                .then(() => {
                    alert("¡Correo enviado con éxito!");
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
