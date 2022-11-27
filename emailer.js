const nodemailer = require('nodemailer')
const usuario = require('./controllers/personaController')

const createTrans = () => {
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.email,
          pass: process.env.email_password
        }
    });
    return transport;
}

const sendMail = async(fechaAsamblea, tipo) => {
    const transporter = createTrans()
    const correo = usuario.getCorreos

    const info = await transporter.sendMail({
        from: 'notificacion asamblea',
        to: correo,
        subject: "Notificación Asamblea",
        text: "Se cita asamblea el dia " + fechaAsamblea + ", de tipo " + tipo +
        "se pide puntualidad"
    });
    console.log("Message sent: %s", info.messageId);

    return
}

exports.sendMail = (fechaAsamblea, tipo) => sendMail(fechaAsamblea, tipo);