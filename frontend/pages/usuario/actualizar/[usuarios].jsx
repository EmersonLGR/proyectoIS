import { useState } from "react";
import { getPersona, updatePersona } from '../../../data/personas'
import { FormControl,Box, Flex, FormLabel, Input, Container, Heading, Select, Stack, Button, Textarea } from '@chakra-ui/react'
import { useRouter } from "next/router";
import Swal from 'sweetalert2'

import TextareaInput from "../../../components/TextareaInput"

export const getServerSideProps = async (context) => {
    
        const response = await getPersona(context.query.usuarios)
    
            return {
                props: {
                data: response.data
          
        }
    }
}

const editar = ({ data }) => {

    const [persona, setPersona] = useState(data)
    const router = useRouter()
    const{ usuarios }=router.query
   
    const handleChange = (e) => {
        setPersona({
            ...persona,
            [e.target.name]: e.target.value
        })
    }

    const submitPersona = async  (e) => {
        console.log(persona)
        e.preventDefault()
        const response =  await updatePersona(usuarios,persona)
        if(response.status === 200){
            Swal.fire({
                icon: 'success',
                title: 'Persona actualizada',
                showCloseButton: true,
                text: 'La persona se actualizó correctamente'
            }).then (() => {
                router.push('../../usuarios')
            })
        }else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                showConfirmButton: true,
                text:'Ocurrió un error al actualizar la persona'
            })
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
            <Stack spacing={4} mt={10}>
            <Heading
            color='white'
            textTransform='uppercase'
            textAlign="center"
            fontWeight='light'
            letterSpacing='5px'
           >Editar:{persona.nombre} </Heading>
            <FormControl id="name" isRequired>
                    <FormLabel
                     spacing='40px'
                     mt='30px'
                     color='white'
                    >Nombre</FormLabel>
                    <Input name="nombre" color='white' type="text" placeholder="Francisco" onChange={handleChange} value={persona.nombre} />
                </FormControl>
                <FormControl id="role" isRequired>
                    <FormLabel
                     spacing='40px'
                     mt='30px'
                     color='white'
                     >Rol</FormLabel>
                    <Select name="role" color='white' onChange={handleChange} placeholder='Rol' value={persona.role}>
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
                    <Input name="correo" type={"email"} color='white'placeholder={"correo@ejemplo.com"} onChange={handleChange} value={persona.correo} />
                    
                </FormControl>
                <Button colorScheme={"telegram"} onClick={submitPersona}>Guardar Cambios</Button>
            <Button colorScheme={"red"} onClick={()=> router.push('./../../usuarios')}>Cancelar</Button>
            </Stack>
            </Flex>
            </Box>
    )
}


export default editar;