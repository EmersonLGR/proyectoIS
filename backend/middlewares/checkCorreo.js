const Persona = require('../models/personaModel');

const check = (req, res) => {
    Persona.findOne({correo: req.body.correo}, (err, persona) => {
        if (err) {
            return res.status(400).send({message: "Error al obtener el usuario"})
        }
        if (!persona) {
            return res.status(404).send({message: "Usuario no encontrado"})
        }
        return res.status(200).send({message: "Usuario logeado correctamente", persona})
    })
}

module.exports = check;