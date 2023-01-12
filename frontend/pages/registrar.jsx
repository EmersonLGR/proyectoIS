import { Container, FormControl, FormLabel, Input, Select, option, Heading, Stack, Button, Center, Box, Flex } from "@chakra-ui/react";
import { useState } from "react"
import { createPersona } from '../data/personas'
import TextareaInput from "../components/TextareaInput"

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
        <Box
        h='100vh'
         bg='gray'
         bgSize='cover'> 
          
           <Flex
             direction='column'
             alignItems='center'
             justify='center'
             h='100%'
             bg='rgb(0 0 0 / 50%)'
             p={['0 10%', null, '0 20%']}
           > 
            <Stack direction={{base: 'column', md: 'column'}}
             spacing='40px'
              mt='30px'
                w={['100%', null, 'auto']}>
                      <Heading
            color='white'
            textTransform='uppercase'
            textAlign="center"
            fontWeight='light'
            letterSpacing='5px'
           >Registro</Heading>
                <FormControl id="name" isRequired>
                    <FormLabel
                     spacing='40px'
                     mt='30px'
                     color='white'
                    >Nombre</FormLabel>
                    <Input name="nombre" type="text" placeholder="Francisco" onChange={handleChange} value={persona.nombre} />
                </FormControl>
                <FormControl id="role" isRequired>
                    <FormLabel
                     spacing='40px'
                     mt='30px'
                     color='white'
                     >Rol</FormLabel>
                    <Select name="role" onChange={handleChange} placeholder='Rol' value={persona.role}>
                        <option>user</option>
                        <option>directiva</option>
                    </Select>
                </FormControl>
                <FormControl borderRadius='0' id="correo" isRequired>
                    <FormLabel
                     spacing='40px'
                     mt='30px'
                     color='white'
                     >Correo Electronico</FormLabel>
                    <Input name="correo" type={"email"} color='white' placeholder={"correo@ejemplo.com"} onChange={handleChange} value={persona.correo} />
                    
                </FormControl>
                <Button 
                variant='outline'
                size='lg'
                textTransform='uppercase'
                fontWeight='light'
                borderRadius='0'
                color='white'
                letterSpacing='1px'
                _hover={{
                color:'black',
                bg:'white'
        }} onClick={submitPersona}>Registrar</Button>
            </Stack>
            <Center>
             
            </Center>
            </Flex>
            </Box>
    )
}

export default registrar;
