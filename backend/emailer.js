const nodemailer = require('nodemailer')
const Persona = require('./models/personaModel')
require('dotenv').config();

const createTrans = () => {
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
          user: process.env.email,
          pass: process.env.email_password
        }
    });
    return transport;
}

const sendMail = async(fechaAsamblea, tipo) => {
    const transporter = createTrans()
    let correo = []

    Persona.find({}, (err, persona) => {
        if(err){
            console.log(400);
        }
        persona.forEach(objeto => correo.push(objeto.correo));
    })

    console.log(correo);

    const info = await transporter.sendMail({
        from: 'notificacion asamblea',
        to: correo,
        subject: "Notificación Asamblea",
        text: "Se cita asamblea el dia " + fechaAsamblea + ", de tipo " + tipo +
        ", se pide puntualidad."
    });
    console.log("Message sent: %s", info.messageId);

    return
}

exports.sendMail = (fechaAsamblea, tipo) => sendMail(fechaAsamblea, tipo);