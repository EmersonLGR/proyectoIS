import {React, useEffect, useState} from "react";
import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Heading, Button, Flex, Spacer, Container, Stack, Box } from "@chakra-ui/react"
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
            <Td><Button
            variant='outline'
            size='lg'
            textTransform='uppercase'
            fontWeight='light'
            borderRadius='0'
            colorScheme='teal'
            letterSpacing='1px'
               _hover={{
               color:'black',
               bg:'white'
       }}
              onClick={()=> router.push(`./asamblea/${asamblea._id}`)}>Editar</Button></Td>
            <Td>{asamblea.fecha}</Td>
            <Td>{asamblea.description}</Td>
            <Td>{asamblea.tipo}</Td>
            <Td><Button 
             variant='outline'
             size='lg'
             textTransform='uppercase'
             fontWeight='light'
             borderRadius='0'
             colorScheme='teal'
             letterSpacing='1px'
                _hover={{
                color:'black',
                bg:'white'
        }}
             >Ver</Button></Td>
        </Tr>
      )
    })
  }

  useEffect(() => {
    getAsambleas().then(res => {setAsamblea(res.data)})
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
      >Asambleas Agendadas</Heading>

    <Flex>

      <Button
       variant='outline'
       size='lg'
       textTransform='uppercase'
       fontWeight='light'
       borderRadius='0'
       colorScheme='teal'
       letterSpacing='1px'
                _hover={{
                color:'black',
                bg:'white'
        }}
       onClick={()=>router.push('./addAsamblea')}>Agregar Asamblea</Button>
    </Flex>

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
    </Flex>
    </Box>
  )
}

export default asamblea;
