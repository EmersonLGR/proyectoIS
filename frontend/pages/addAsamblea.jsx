import { useState } from "react"
import { FormControl, FormLabel, Input, Container, Heading, Select, Stack, Button, Textarea } from '@chakra-ui/react'
import { createAsamblea } from '../data/asambleas'
import { useRouter } from "next/router"

const addAsamblea = () => {

    const [asamblea, setAsamblea] = useState({
        date:'',
        descrition: '',
        type: ''
    })

    const router = useRouter()

    const handleChange = (e) => {
        setAsamblea({
            ...asamblea,
            [e.target.name]: e.target.value
        })
    }

    const submitAsamblea = (e) => {
        e.preventDefault()
        createAsamblea(asamblea).then(res => {
            console.log(res.data.fecha)
        })
    }

    return(
        <Container maxW="container.xl" mt={10}>
            <Stack spacing={4} mt={10}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Crear Asamblea</Heading>
                <FormControl id="date" isRequired>
                    <FormLabel>Fecha</FormLabel>
                        <Input type='date' name={"date"} onChange={handleChange}/>
                </FormControl>
                <FormControl id="type" isRequired>
                    <FormLabel>Tipo</FormLabel>
                    <Select name="tipo" onChange={handleChange} placeholder='Tipo'>
                        <option>Informativa</option>
                        <option>Extraordinaria</option>
                    </Select>
                </FormControl>
                <FormControl id="description" isRequired>
                    <FormLabel>Descripción</FormLabel>
                    <Textarea name={"description"} onChange={handleChange}></Textarea>
                </FormControl>
            </Stack>
            <Button colorScheme={"teal"} onClick={submitAsamblea}>Agregar</Button>
            <Button colorScheme={"red"} onClick={()=>router.push('./asambleas')}>Cancelar</Button>
        </Container>
    )
}

export default addAsamblea;