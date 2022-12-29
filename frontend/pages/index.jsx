import {React, useEffect, useState} from "react";
import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Heading, Button, Center } from "@chakra-ui/react"
import axios from 'axios'

const index = () => {

  const [asambleas, setAsamblea] = useState([{
    id: '',
    user: '',
    date: '',
    description: '',
    type:''
  }])

  const getAsambleas = async () =>{
    const response = await axios.get(`${process.env.SERVIDOR}/asamblea`)
    setAsamblea(response.data)
  }

  const contentTable = () => {
    return asambleas.map(asamblea =>{
      return(
        <Tr key={asamblea._id}>
          <Td>{asamblea.date}</Td>
          <Td>{asamblea.description}</Td>
          <Td>{asamblea.type}</Td>
        </Tr>
      )
    })
  }

  useEffect(() => {
    getAsambleas()
  }, [])

  return(
    <>
    <Center>
      <Heading>Asambleas Realizadas</Heading>
    </Center>
    <TableContainer>
      <Table variant='simple'>
        <TableCaption>Asambleas Realizadas</TableCaption>
          <Thead>
            <Tr>
              <Th>Fecha</Th>
              <Th>Descripción</Th>
              <Th>Tipo</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              {contentTable()}
            </Tr>
          </Tbody>
      </Table>
    </TableContainer>
    </>
  )
}

export default index;