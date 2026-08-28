document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'service_z1o6u3y'; 
    const templateID = 'template_frf2lkk'; 

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('¡Mensaje enviado con éxito!');
            document.getElementById('formulario-contacto').reset();
        }, (error) => {
            alert('Error al enviar el mensaje. Por favor, intentalo de nuevo.');
            console.error('Error EmailJS:', error);
        });
});
