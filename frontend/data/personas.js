import axios from 'axios'

const createPersona = (persona) => {
    const response = axios.post(`${process.env.SERVIDOR}/persona`, persona);
    return response
}

const getPersonas = async () =>{
    const response = await axios.get(`${process.env.SERVIDOR}/personas`)
    return response
}

const getPersona = async (id) => {
    const response = await axios.get(`${process.env.SERVIDOR}/persona/search/${id}`)
    return response
}

const updatePersona = (id, persona) => {
    const response = axios.put(`${process.env.SERVIDOR}/persona/update/${id}`, persona);
    return response
}

const deletePersona = (id) => {
    const response = axios.get(`${process.env.SERVIDOR}/persona/delete/${id}`, persona);
    return response
}

const login = (correo) => {
    const response = axios.post(`${process.env.SERVIDOR}/login`, correo);
    return response
}

module.exports = {
    getPersonas,
    getPersona,
    createPersona,
    updatePersona,
    deletePersona,
    login
}