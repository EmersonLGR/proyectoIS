const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AsambleaSchema = new Schema({
    usuario:{
        type: Schema.ObjectId,
        ref: 'persona',
        required: true
    },
    fecha: {
        type: String,
        required: true,
        match: /[0-9]{4}-[0-9]{2}-[0-9]{2}/
    },
    description: {
        type: String,
        required: true,
        match: /[A-Za-z0-9]+/
    },
    tipo:{
        type: String,
        enum:[
            'Informativa',
            'Extraordinaria'
        ],
        default: 'Informativa'
    }
});

module.exports = mongoose.model('asamblea', AsambleaSchema);