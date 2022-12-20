import { Container, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import inputForm from "../components/inputFormComponent";

function identificacion(params) {
    <>
        <Container maxW="container.xl">
            <Stack spacing={3} my={40} justify="center">
                <Heading as="h1" size="2xl">Identificate</Heading>
                {inputForm}
            </Stack>
        </Container>
    </>
}

export default identificacion;