import { Button, Center, Container, FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react";
import React from "react";

const iniciarSesion = () => {

    const handleChange = (e) =>{

    }

    return(
        <Container maxW="md" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Identificación</Heading>
            <Stack spacing={4} mt={10}>
                <FormControl id="correo">
                    <FormLabel>Correo Electronico</FormLabel>
                    <Input type="email" placeholder="example@email.com" onChange={handleChange}/>
                </FormControl>
            </Stack>
            <Center>
            <Button colorScheme={"telegram"} mt={10} mb={10}>Verificar Identidad</Button>
            </Center>
        </Container>
    )
}

export default iniciarSesion;