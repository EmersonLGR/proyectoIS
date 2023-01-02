import { useState } from "react";
import { FormControl, FormLabel, FormHelperText, Input, Container, Heading, RadioGroup, HStack, Radio, Stack, Button, Textarea } from '@chakra-ui/react'
import { createComentario } from '../data/comentarios'
import TextareaInput from "../components/TextareaInput"
import {useRouter} from 'next/router'


const addComentario = () => {

    const [comentario, setComentario] = useState({
        descrition: '',
    })

    const handleChange = (e) => {
        setComentario({
            ...comentario,
            [e.target.name]: e.target.value
        })
    }
    const router = useRouter()

    const submitComentario = (e) => {
        e.preventDefault()
        createComentario(comentario).then(res => {})
    }

    return(
        <Container maxW="container.xl" mt={10}>
            <Stack spacing={4} mt={10}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Crear comentario</Heading>
            <TextareaInput label="Descripción" handleChange={handleChange} name='description'/>
            </Stack>
            <HStack>
            <Button colorScheme={"green"} onClick={submitComentario}>Aceptar</Button>
            <Button colorScheme={"red"} onClick={()=>router.push('./comentarios')}>Cancelar</Button>
            </HStack>
        </Container>
    )
}

export default addComentario;