import { Box, Button, Center, Container, Flex, FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState} from "react";
import {login} from '../data/personas'

const IniciarSesion = () => {

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
            <Heading 
              color='white'
              textTransform='uppercase'
              textAlign="center"
              fontWeight='light'
              letterSpacing='5px'
            >Identificación</Heading>
            <Stack
            direction={{base: 'column', md: 'column'}}
            spacing='40px'
             mt='30px'
            w={['100%', null, 'auto']}
            >
                <FormControl id="correo" isRequired>
                    <FormLabel spacing='40px'
                     mt='30px' color='white' >Correo Electronico</FormLabel>
                    <Input  color='white' placeholder="example@email.com" onChange={handleChange}/>
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
            bg:'white'}}
            onClick={onSubmit}> Identidad
            </Button>
            </Stack>
            <Center>
          
            </Center>
            </Flex>
            </Box>
    )
}

export default IniciarSesion;