import {React, useEffect, useState} from "react";
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Heading, Button, Spacer, Container, Box, Flex } from "@chakra-ui/react"
import {useRouter} from 'next/router'
import { getComentarios } from "../data/comentarios"
const comentarios = () => {

  const [comentarios, setComentario] = useState([{
    _id: '',
    user: '',
    description: ''
  }])

  const router = useRouter()

  const contentTable = () => {
    return comentarios.map(comentario =>{
      return(
        <Tr key={comentario._id}>
          <Td>{comentario.description}</Td>
        </Tr>
      )
    })
  }

  useEffect(() => {
    getComentarios().then(res => {setComentario(res.data)})
  }, [])

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
      >Comentarios</Heading>
 


    <TableContainer>
      <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Descripción</Th>
            </Tr>
          </Thead>
          <Tbody>
              {contentTable()}
          </Tbody>
      </Table>
      <Spacer />
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
                 bg:'blue'
         }}
      onClick={()=>router.push('./addComentario')}>Comentar</Button>
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
      colorScheme={"red"} onClick={()=>router.push('./asambleas')}>Cancelar</Button>
    </TableContainer>
    </Flex>
    </Box>
  )
}

export default comentarios;
