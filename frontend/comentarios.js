import axios from 'axios'

const getComentarios= async () =>{
    const response = await axios.get(`${process.env.SERVIDOR}/comentarios`)
    return response
}

const createComentario = async (comentario) => {
    const response = await axios.post(`${process.env.SERVIDOR}/comentario`, comentario);
    return response
}
const getSpecificComentario = async(id) =>{
    const response = await axios.get(`${process.env.SERVIDOR}/comentario/search/${id}`);
    return response
}


module.exports = {
    getComentarios,
    createComentario,
    getSpecificComentario
}