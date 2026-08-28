document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario-contacto');

    if (!formulario) return;

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const serviceID = 'service_z1o6u3y';
        const templateID = 'template_frf2lkk';

        emailjs.sendForm(serviceID, templateID, this)
            .then(function() {
                alert('¡Mensaje enviado con éxito!');
                formulario.reset();
            })
            .catch(function(error) {
                alert('Error al enviar el mensaje. Por favor, intentalo de nuevo.');
                console.error('Error EmailJS:', error);
            });
    });
});
