const Persona = require('../models/personaModel');

const createPersona = (req, res) =>{
    const {nombre,role,correo} = req.body;
    const newPersona = new Persona({
        nombre,
        role,
        correo
    });
    newPersona.save((err, persona) => {
        if(err){
            return res.status(400)
        }
        return res.status(200).send(persona)
    })
}

const getPersonas = (req, res) => {
    Persona.find({}, (err, persona) => {
        if(err){
            return res.status(400)
        }
        return res.status(200).send(persona)
    })
}

const getSpecificPersona = (req, res) => {
    const {id} = req.params;
    Persona.findById(id, (err, persona) => {
        if(err){
            return res.status(400)
        }
        if (!persona){
            return res.status(404).send({message: "Persona no encontrada"})
        }
        return res.status(200).send(persona)
    })
}

const updatePersona = (req, res) => {
    const {id} = req.params;
    Persona.findByIdAndUpdate(id, req.body, (err, persona) => {
        if(err){
            return res.status(400)
        }
        return res.status(200).send(persona)
    })
}

const deletePersona = (req, res) => {
    const {id} = req.params
    Persona.findByIdAndDelete(id, (err, persona) => {
        if(err){
            return res.status(400)
        }
        return res.status(200).send(persona)
    })
}

module.exports = {
    createPersona,
    getPersonas,
    getCorreos,
    getSpecificPersona,
    updatePersona,
    deletePersona
}