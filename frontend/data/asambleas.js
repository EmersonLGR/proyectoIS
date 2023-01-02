import axios from 'axios'

const createAsamblea = (asamblea) => {
    const response = axios.post(`${process.env.SERVIDOR}/asamblea`, asamblea);
    return response
}

const getAsambleas = async () =>{
    const response = await axios.get(`${process.env.SERVIDOR}/asambleas`)
    return response
}

const getAsamblea = async (id) => {
    const response = await axios.get(`${process.env.SERVIDOR}/asamblea/search/${id}`)
    return response
}

const updateAsamblea = (id, asamblea) => {
    const response = axios.put(`${process.env.SERVIDOR}/asamblea/update/${id}`, asamblea);
    return response
}

const deleteAsamblea = (id) => {
    const response = axios.get(`${process.env.SERVIDOR}/asamblea/delete/${id}`, asamblea);
    return response
}

module.exports = {
    getAsambleas,
    getAsamblea,
    createAsamblea,
    updateAsamblea,
    deleteAsamblea
}