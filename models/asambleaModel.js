const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AsambleaSchema = new Schema({
    usuario:{
        type: Schema.ObjectId,
        ref: 'persona',
        match: /[A-Za-z0-9]+/
    },
    fecha: {
        type: String,
        required: true,
        match: /\d\d\/\d\d\/\d\d\d\d/
    },
    description: {
        type: String,
        required: true,
        match: /([A-Za-z0-9]+( [A-Za-z0-9]+)+)/
    },
    tipo:{
        enum:[
            'Informativa',
            'Extraordinaria'
        ]
    }
});

module.exports = mongoose.model('asamblea', AsambleaSchema);