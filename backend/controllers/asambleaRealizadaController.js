const AsambleaRealizada = require('../models/asambleaRealizadaModel');

const createAsambleaRealizada = (req, res) =>{
    const {asamblea, acta} = req.body;
    const newAsambleaRealizada = new AsambleaRealizada({
        asamblea,
        acta
    });
    newAsambleaRealizada.save((err, asamblea_realizada) => {
        if(err){
            return res.status(400)
        }
        return res.status(200).send(asamblea_realizada)
    })
}

const getAsambleasRealizadas = (req, res) => {
    AsambleaRealizada.find({}, (err, asamblea_realizada) => {
        if(err){
            return res.status(400)
        }
        return res.status(200).send(asamblea_realizada)
    })
}

const getSpecificAsambleaRealizada = (req, res) => {
    const {id} = req.params;

    AsambleaRealizada.findById(id, (err, asamblea_realizada) => {
        if(err){
            return res.status(400).send({ message: "Error al obtener la asamblea"})
        }
        if (!asamblea_realizada){
            return res.status(404).send({message: "asamblea no encontrada"})
        }
        return res.status(200).send(asamblea_realizada)
    })
}

const updateAsambleaRealizada = (req, res) => {
    const {id} = req.params;

    AsambleaRealizada.findByIdAndUpdate(id, req.body, (err, asamblea_realizada) => {
        if(err){
            return res.status(400)
        }
        return res.status(200).send(asamblea_realizada)
    })
}

const deleteAsambleaRealizada = (req, res) => {
    const {id} = req.params;

    AsambleaRealizada.findByIdAndDelete(id, (err, asamblea_realizada) => {
        if(err){
            return res.status(400)
        }
        return res.status(200).send(asamblea_realizada)
    })
}

module.exports = {
    createAsambleaRealizada,
    getAsambleasRealizadas,
    getSpecificAsambleaRealizada,
    updateAsambleaRealizada,
    deleteAsambleaRealizada
}