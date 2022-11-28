const nodemailer = require('nodemailer')
const Persona = require('./models/personaModel')
require('dotenv').config();

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

    Persona.find({}, (err, correo) =>{
        if(err){
            return res.status(400)
        }
        const correos = correo
        return res.status(200).send(correo)
    })

    const info = await transporter.sendMail({
        from: 'notificacion asamblea',
        to: correos,
        subject: "Notificación Asamblea",
        text: "Se cita asamblea el dia " + fechaAsamblea + ", de tipo " + tipo +
        "se pide puntualidad"
    });
    console.log("Message sent: %s", info.messageId);

    return
}

exports.sendMail = (fechaAsamblea, tipo) => sendMail(fechaAsamblea, tipo);