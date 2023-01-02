import { Button, Center, Container, FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState} from "react";
import {login} from '../data/personas'

const iniciarSesion = () => {

    const [correo, setCorreo] = useState('')
    const router = useRouter()

    const handleChange = (e) =>{
        setCorreo(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const response = await login(correo)
        if(response.status === 200){
            localStorage.setItem('token', correo)
            router.push('./asambleas')
        }
    }

    return(
        <Container maxW="md" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Identificación</Heading>
            <Stack spacing={4} mt={10}>
                <FormControl id="correo" isRequired>
                    <FormLabel>Correo Electronico</FormLabel>
                    <Input type="email" placeholder="example@email.com" onChange={handleChange}/>
                </FormControl>
            </Stack>
            <Center>
            <Button colorScheme={"telegram"} mt={10} mb={10} onClick={onSubmit}>Verificar Identidad</Button>
            </Center>
        </Container>
    )
}

export default iniciarSesion;