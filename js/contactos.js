const btnEnviar = document.getElementById('enviarEmail');

btnEnviar.addEventListener('click', function(e){
    e.preventDefault();
    SendMail();
    setTimeout(function(){
        location.reload()
    }, 3000)
})

function SendMail(){
    let nombre = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    
    Email.send({
        SecureToken: "d9afeb1f-9fa4-480a-8ca6-536386657557",
        To: "angelo-mjz7@hotmail.com",
        From: "nutrimixsec@gmail.com",
        Subject: subject,
        Body: `Nombre: ${nombre}\nTeléfono: ${phone}\nEmail: ${email}\nMensaje: ${message}`
    }).then(
        Swal.fire({
            icon: 'success',
            title:  'Mensaje enviado!',
            text: 'Su mensaje fue enviado correctamente\nPronto nos contactaremos con Ud.',
            timer: 2500  
        })
    );
}