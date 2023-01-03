import {React, useEffect, useState} from "react";
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Heading, Button, Spacer, Container } from "@chakra-ui/react"
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
    <Container maxW="container.xl" mt={10}>
      <Heading size={"2xl"} textAlign={"center"}>Comentarios</Heading>
      <Spacer/>

    <Spacer/>


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
      <Button colorScheme={"telegram"} onClick={()=>router.push('./addComentario')}>Comentar</Button>
      <Button colorScheme={"red"} onClick={()=>router.push('./asambleas')}>Cancelar</Button>
    </TableContainer>
    </Container>
  )
}

export default comentarios;