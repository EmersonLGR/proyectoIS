const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AsambleaRealizadaSchema = new Schema({
    asamblea:{
        type: Schema.ObjectId,
        ref: 'asamblea',
        match: /[A-Za-z0-9]+/
    },
    acta:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('asamblearealizada', AsambleaRealizadaSchema);