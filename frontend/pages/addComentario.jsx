import { useState } from "react";
import { FormControl, FormLabel, FormHelperText, Input, Container, Heading, RadioGroup, HStack, Radio, Stack, Button, Textarea, Box, Flex } from '@chakra-ui/react'
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
        <Box
        h='100vh'
        bg='gray'
        bgSize='cover'
        > 
        <Flex
        direction='column'
        alignItems='center'
        justify='center'
        h='100%'
        bg='rgb(0 0 0 / 50%)'
        p={['0 10%', null, '0 20%']}
        > 
           
            <Heading 
            color='white'
            textTransform='uppercase'
            textAlign="center"
            fontWeight='light'
            letterSpacing='5px'
            >Crear comentario</Heading>
             <Stack direction={{base: 'column', md: 'row'}}
      spacing='40px'
      mt='30px'
      w={['100%', null, 'auto']}>
            <TextareaInput label="Descripción" handleChange={handleChange} name='description'/>
            </Stack>
            <HStack>
            <Button colorScheme={"green"} onClick={submitComentario}>Aceptar</Button>
            <Button colorScheme={"red"} onClick={()=>router.push('./comentarios')}>Cancelar</Button>
            </HStack>
            </Flex>
        </Box>
    )
}

export default addComentario;