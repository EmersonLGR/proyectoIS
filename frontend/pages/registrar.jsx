import { Container, FormControl, FormLabel, Input, Select, option, Heading, Stack, Button, Center } from "@chakra-ui/react";
import { useState } from "react"
import { createPersona } from '../data/personas'

const registrar = () => {

    const [persona, setPersona] = useState({
        nombre: '',
        role: 'user',
        correo: ''
    })

    const handleChange = (e) => {
        setPersona({
            ...persona,
            [e.target.name]: e.target.value
        })
    }

    const submitPersona = (e) => {
        e.preventDefault()
        createPersona(persona).then(res => {
            console.log(res.data.nombre)
        })
    }

    return(
        <Container size="md" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Registro</Heading>
            <Stack spacing={4} mt={10}>
                <FormControl id="name" isRequired>
                    <FormLabel>Nombre</FormLabel>
                    <Input name="nombre" type="text" placeholder="Francisco" onChange={handleChange}/>
                </FormControl>
                <FormControl id="role" isRequired>
                    <FormLabel>Rol</FormLabel>
                    <Select name="role" onChange={handleChange} placeholder='Rol'>
                        <option>user</option>
                        <option>directiva</option>
                    </Select>
                </FormControl>
                <FormControl id="correo" isRequired>
                    <FormLabel>Correo Electronico</FormLabel>
                    <Input name="correo" type={"email"} placeholder={"correo@ejemplo.com"} onChange={handleChange}/>
                </FormControl>
            </Stack>
            <Center>
                <Button colorScheme={"telegram"} mt={10} mb={10} onClick={submitPersona}>Registrar</Button>
            </Center>
        </Container>
    )
}

export default registrar;