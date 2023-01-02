import {React, useEffect, useState} from "react";
import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Heading, Button, Flex, Spacer, Container, Stack } from "@chakra-ui/react"
import {useRouter} from 'next/router'
import axios from "axios";
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
    </TableContainer>
    </Container>
  )
}

export default comentarios;