import { useState } from "react"
import { FormControl, FormLabel, Input, Container, Heading, Select, Stack, Button, Textarea, Box, Flex } from '@chakra-ui/react'
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
            colorScheme={"red"} onClick={()=>router.push('./asambleas')}>Cancelar
            </Button>
            </Flex>
            </Box>
    )
}

export default addAsamblea;
