import { Container, FormControl, FormLabel, Input, RadioGroup, HStack, Radio, Heading, Stack, Button, Center } from "@chakra-ui/react";
import { React } from "react"

const registrar = () => {
    return(
        <Container size="md" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Registro</Heading>
            <Stack spacing={4} mt={10}>
                <FormControl id="name">
                    <FormLabel>Nombre</FormLabel>
                    <Input type="text" placeholder="Francisco"/>
                </FormControl>
                <FormControl id="role">
                    <FormLabel>Rol</FormLabel>
                    <RadioGroup defaultValue='Usuario'>
                        <HStack spacing='24px'>
                            <Radio value='Usuario'>Usuario</Radio>
                            <Radio value='Directiva'>Directiva</Radio>
                        </HStack>
                    </RadioGroup>
                </FormControl>
                <FormControl>
                    <FormLabel>Correo Electronico</FormLabel>
                    <Input type={"email"} placeholder={"correo@ejemplo.com"} />
                </FormControl>
            </Stack>
            <Center>
                <Button colorScheme={"telegram"} mt={10} mb={10}>Registrar</Button>
            </Center>
        </Container>
    )
}

export default registrar;