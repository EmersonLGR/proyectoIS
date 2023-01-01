import axios from 'axios'

const getAsambleas = async () =>{
    const response = await axios.get(`${process.env.SERVIDOR}/asambleas`)
    return response
}

const createAsamblea = (asamblea) => {
    const response = axios.post(`${process.env.SERVIDOR}/asamblea`, asamblea);
    return response
}

module.exports = {
    getAsambleas,
    createAsamblea
}