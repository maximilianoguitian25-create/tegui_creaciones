document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario-contacto');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const serviceID = 'service_z1o6u3y';
        const templateID = 'template_frf2lkk';

        emailjs.sendForm(serviceID, templateID, this)
            .then(function(response) {
                console.log('Éxito:', response.status, response.text);
                alert('¡Mensaje enviado con éxito!');
                formulario.reset();
            })
            .catch(function(error) {
                console.error('Error detallado de EmailJS:', error);
                alert('Error al enviar el mensaje: ' + JSON.stringify(error));
            });
    });
});
