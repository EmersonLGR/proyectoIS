import { useState } from "react"
import { FormControl, FormLabel, Input, Container, Heading, Select, Stack, Button, Textarea, Box, Flex, HStack } from '@chakra-ui/react'
import { createAsamblea } from '../data/asambleas'
import { useRouter } from "next/router"
import FormInput from "../components/FormInput"
import TextareaInput from "../components/TextareaInput"

const AddAsamblea = () => {

    const [asamblea, setAsamblea] = useState({
       
        date:'',
        description: '',
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
        const correo = localStorage.getItem('token')
        const response = {
            correo,
            ...asamblea
        }
        createAsamblea(response).then(res => {
            console.log(res.data.date)
        }).catch(error=> console.log(error))
        router.push('/asambleas')
      
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
            <Stack 
             direction={{base: 'column', md: 'column'}}
             spacing='40px'
             mt='30px'
             w={['100%', null, 'auto']}
            >
                <Heading
                   color='white'
                   textTransform='uppercase'
                   textAlign="center"
                   fontWeight='light'
                   letterSpacing='5px'  
                >Crear Asamblea</Heading>
                <TextareaInput label="Fecha" handleChange={handleChange} name="date" placeholder="Fecha debe ser: dd-mm-yyyy" value={asamblea.date} />
                <TextareaInput label="Tipo" handleChange={handleChange} name="type" placeholder="Informativa o Extraordinaria" value={asamblea.type} />
                <TextareaInput label="Información" handleChange={handleChange} name="description" placeholder="Información" value={asamblea.description} />
            
            <HStack>
            <Button
            variant='outline'
            size='lg'
            textTransform='uppercase'
            fontWeight='light'
            borderRadius='0'
            color='white'
            colorScheme='teal'
            letterSpacing='1px'
            _hover={{
            color:'black',
            bg:'green'
            }}
            onClick={submitAsamblea}
            >Agregar</Button>
            <Button
            variant='outline'
            size='lg'
            textTransform='uppercase'
            fontWeight='light'
            borderRadius='0'
            color='white'
            colorScheme='teal'
            letterSpacing='1px'
            _hover={{
            color:'black',
            bg:'red'
            }}
            onClick={()=>router.push('./asambleas')}>Cancelar
            </Button>
            </HStack>
            </Stack>
            </Flex>
            </Box>
    )
}

export default AddAsamblea;