const btnEnviar = document.getElementById('enviarEmail');

function SendMail(){
    let nombre = document.getElementById("name").value;
    let phone = document.getElementById("phone".value);
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
        console.log('Hola')
    );
}