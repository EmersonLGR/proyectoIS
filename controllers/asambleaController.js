const Asamblea = require('../models/asambleaModel');
const Persona = require('../controllers/personaController')
const Correo = require('../emailer')

const createAsamblea = (req, res) =>{
    const {usuario, fecha, description, tipo} = req.body;
    const newAsamblea = new Asamblea({
        usuario,
        fecha,
        description,
        tipo
    });
    try {
        user = Persona.getSpecificPersona(usuario)
        if (user.role == directiva) {
            newAsamblea.save((err, asamblea) => {
                if(err){
                    return res.status(400)
                }else{
                    Correo.sendMail(fecha, tipo)
                    return res.status(200).send(asamblea)
                }
            })
        }
    } catch (error) {
        return res.status(401)
    }
}

const getAsambleas = (req, res) => {
    Asamblea.find({}, (err, asamblea) => {
        if(err){
            return res.status(400)
        }
        return res.status(200).send(asamblea)
    })
}

const getSpecificAsamblea = (req, res) => {
    const {id} = req.params;

    Asamblea.findById(id).populate({ path: 'usuario'}).exec((err, asamblea) => {
        if(err){
            return res.status(400).send({ message: "Error al obtener la asamblea"})
        }
        if (!asamblea){
            return res.status(404).send({message: "asamblea no encontrada"})
        }
        return res.status(200).send(asamblea)
    })
}

const updateAsamblea = (req, res) => {
    const {id} = req.params;

    Asamblea.findByIdAndUpdate(id, req.body, (err, asamblea) => {
        if(err){
            return res.status(400)
        }
        return res.status(200).send(asamblea)
    })
}

const deleteAsamblea = (req, res) => {
    const {id} = req.params;

    Asamblea.findByIdAndDelete(id, (err, asamblea) => {
        if(err){
            return res.status(400)
        }
        return res.status(200).send(asamblea)
    })
}

module.exports = {
    createAsamblea,
    getAsambleas,
    getSpecificAsamblea,
    updateAsamblea,
    deleteAsamblea
}