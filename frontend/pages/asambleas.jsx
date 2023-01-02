import {React, useEffect, useState} from "react";
import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Heading, Button, Flex, Spacer, Container, Stack } from "@chakra-ui/react"
import { getAsambleas } from '../data/asambleas'
import {useRouter} from 'next/router'

const asamblea = () => {

  const [asambleas, setAsamblea] = useState([{
    type:'',
    _id: '',
    user: '',
    date: '',
    description: ''
  }])

  const router = useRouter()

  const contentTable = () => {
    return asambleas.map(asamblea =>{
      return(
        <Tr key={asamblea._id}>
            <Td><Button colorScheme={"telegram"} onClick={()=> router.push(`./asamblea/${asamblea._id}`)}>Editar</Button></Td>
            <Td>{asamblea.fecha}</Td>
            <Td>{asamblea.description}</Td>
            <Td>{asamblea.tipo}</Td>
            <Td><Button colorScheme={"telegram"} >Ver</Button></Td>
        </Tr>
      )
    })
  }

  useEffect(() => {
    getAsambleas().then(res => {setAsamblea(res.data)})
  }, [])

  return(
    <Container maxW="container.xl" mt={10}>
      <Flex>
        <Spacer/>
      <Button colorScheme={"telegram"} onClick={()=>router.push('./identificar')}>Identificar</Button>
      </Flex>
      <Heading size={"2xl"} textAlign={"center"}>Asambleas Agendadas</Heading>
      <Spacer/>

    <Spacer/>

    <Button colorScheme={"telegram"} onClick={()=>router.push('./addAsamblea')}>Agregar Asamblea</Button>

    <TableContainer>
      <Table variant='simple'>
        <TableCaption>Asambleas Agendadas</TableCaption>
          <Thead>
            <Tr>
                <Th></Th>
                <Th>Fecha</Th>
                <Th>Descripción</Th>
                <Th>Tipo</Th>
            </Tr>
          </Thead>
          <Tbody>
              {contentTable()}
          </Tbody>
      </Table>
    </TableContainer>
    </Container>
  )
}

export default asamblea;