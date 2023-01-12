import { useState } from "react";
import { getAsamblea, updateAsamblea } from '../../../data/asambleas'
import { FormControl, FormLabel, Input, Container, Heading, Select, Stack, Button, Textarea } from '@chakra-ui/react'
import { useRouter } from "next/router";
import Swal from 'sweetalert2'

import TextareaInput from "../../../components/TextareaInput"

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
    const{asambleaa}=router.query
   
    const handleChange = (e) => {
        setAsamblea({
            ...asamblea,
            [e.target.name]: e.target.value
        })
    }

    const submitAsamblea = async  (e) => {
        e.preventDefault()
        const response =  await updateAsamblea(asambleaa,asamblea)
        if(response.status === 200){
            Swal.fire({
                icon: 'success',
                title: 'Asamblea actualizada',
                showCloseButton: true,
                text: 'La asamblea se actualizó correctamente'
            }).then (() => {
                router.push('/asambleas')
            })
        }else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                showConfirmButton: true,
                text:'Ocurrió un error al actualizar el producto'
            })
        }
    }

    return(
        <Container maxW="container.xl" mt={10}>
            <Stack spacing={4} mt={10}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Editar</Heading>
                <TextareaInput label="Fecha" handleChange={handleChange} name="date"  value={asamblea.date} />
               <TextareaInput label="Tipo" handleChange={handleChange} name="type"  value={asamblea.type} />
               <TextareaInput label="Información" handleChange={handleChange} name="description"  value={asamblea.description} />
            </Stack>
            <Button colorScheme={"telegram"} onClick={submitAsamblea}>Guardar Cambios</Button>
            <Button colorScheme={"red"} onClick={()=> router.push('/asambleas')}>Cancelar</Button>
        </Container>
    )
}


export default editar;