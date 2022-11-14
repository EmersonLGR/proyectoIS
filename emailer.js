const nodemailer = require('nodemailer')

const createTrans = () => {
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "00a20a9fd860fc",
          pass: "5ca35ccf7208a9"
        }
    });
    return transport;
}

const sendMail = async(correos, asamblea) => {
    const transporter = createTrans()
    const info = await transporter.sendMail({
        from: '',
        to: correos,
        subject: 'Se ha registrados una nueva asamblea a realizar el dia ${asamblea.fecha}',
        html: ""
    });
    console.log("Message sent: %s", info.messageId);

    return
}

exports.sendMail = (correos, asamblea) => sendMail(correos, asamblea);