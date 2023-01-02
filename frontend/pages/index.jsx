import { Button, Container, Heading, Stack } from "@chakra-ui/react";
import { React } from "react"
import { useRouter } from 'next/router'


const index = () => {

  const router = useRouter()

  return(
    <Container size={"md"} mt={10}>
      <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Asamblea Web</Heading>
      <Stack spacing={4} mt={10} direction='column'>
        <Button colorScheme={"telegram"} onClick={()=>router.push('./identificar')}>Ingresar</Button>
        <Button colorScheme={"telegram"} onClick={()=>router.push('./registrar')}>Registrar</Button>
      </Stack>
    </Container>
  )
}

export default index;