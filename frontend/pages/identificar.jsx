import { Button, Container, FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react";
import React from "react";

const iniciarSesion = () => {

    const handleChange = (e) =>{

    }

    return(
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Identificar</Heading>
            <Stack spacing={4} mt={10}>
                <FormControl id="correo">
                    <FormLabel>Correo Electronico</FormLabel>
                    <Input type="email" placeholder="example@email.com" onChange={handleChange}/>
                </FormControl>
            </Stack>
            <Button mt={10} mb={10}>Verificar Identidad</Button>
        </Container>
    )
}

export default iniciarSesion;