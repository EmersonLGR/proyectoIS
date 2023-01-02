import { useState } from "react";
import { getAsamblea, updateAsamblea } from '../../data/asambleas'
import { FormControl, FormLabel, Input, Container, Heading, Select, Stack, Button, Textarea } from '@chakra-ui/react'
import { useRouter } from "next/router";

export const getServerSideProps = async (context) => {

    const response = await getAsamblea(context.query.asamblea)
    return {
        props: {
            data: response.data
        }
    }
}

const editar = ({data}) => {

    const [asamblea, setAsamblea] = useState(data)
    const router = useRouter()
    const {asamble} = router.query

    const handleChange = (e) => {
        setAsamblea({
            ...asamblea,
            [e.target.name]: e.target.value
        })
    }

    const submitAsamblea = (e) => {
        e.preventDefault()
        updateAsamblea(asamble, asamblea).then(res => {
            console.log("Asamblea actualizada", res.data.fecha)
        })
    }

    return(
        <Container maxW="container.xl" mt={10}>
            <Stack spacing={4} mt={10}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Editar</Heading>
                <FormControl id="date">
                    <FormLabel>Fecha</FormLabel>
                        <Input type='date' name={"date"} onChange={handleChange}/>
                </FormControl>
                <FormControl id="type">
                    <FormLabel>Tipo</FormLabel>
                    <Select name="tipo" onChange={handleChange} placeholder='Tipo'>
                        <option>Informativa</option>
                        <option>Extraordinaria</option>
                    </Select>
                </FormControl>
                <FormControl id="description">
                    <FormLabel>Descripción</FormLabel>
                    <Textarea name={"description"} onChange={handleChange}></Textarea>
                </FormControl>
            </Stack>
            <Button colorScheme={"telegram"} onClick={submitAsamblea}>Guardar Cambios</Button>
            <Button colorScheme={"red"} onClick={()=> router.push('/')}>Cancelar</Button>
        </Container>
    )
}

export default editar