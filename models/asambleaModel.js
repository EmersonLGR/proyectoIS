const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AsambleaSchema = new Schema({
    usuario:{
        type: Schema.ObjectId,
        ref: 'persona'
    },
    fecha: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tipo:{
        enum:[
            'Informativa',
            'Extraordinaria'
        ]
    }
});

module.exports = mongoose.model('asamblea', AsambleaSchema);