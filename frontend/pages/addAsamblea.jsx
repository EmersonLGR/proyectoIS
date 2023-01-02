import { useState } from "react"
import { FormControl, FormLabel, FormHelperText, Input, Container, Heading, RadioGroup, HStack, Radio, Stack, Button, Textarea } from '@chakra-ui/react'
import { createAsamblea } from '../data/asambleas'

const addAsamblea = () => {

    const [asamblea, setAsamblea] = useState({
        date:'',
        descrition: '',
        type: ''
    })

    const handleChange = (e) => {
        setAsamblea({
            ...asamblea,
            [e.target.name]: e.target.value
        })
    }

    const submitAsamblea = (e) => {
        e.preventDefault()
        createAsamblea(asamblea).then(res => {})
    }

    return(
        <Container maxW="container.xl" mt={10}>
            <Stack spacing={4} mt={10}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Crear Asamblea</Heading>
                <FormControl id="date">
                    <FormLabel>Fecha</FormLabel>
                        <Input type='date' name={"date"} onChange={handleChange}/>
                </FormControl>
                <FormControl id="type">
                    <FormLabel>Tipo</FormLabel>
                    <RadioGroup defaultValue='Informativa' name={"type"} onChange={handleChange}>
                        <HStack spacing='24px'>
                            <Radio value='Informativa'>Informativa</Radio>
                            <Radio value='Extraordinaria'>Extraordinaria</Radio>
                        </HStack>
                    </RadioGroup>
                </FormControl>
                <FormControl id="description">
                    <FormLabel>Descripción</FormLabel>
                    <Textarea name={"description"} onChange={handleChange}></Textarea>
                </FormControl>
            </Stack>
            <Button onClick={submitAsamblea}>Agregar</Button>
        </Container>
    )
}

export default addAsamblea;