import { Flex, Box, Heading, Spacer, ButtonGroup, Button } from "@chakra-ui/react";
import { React } from "react"

const nav = () => {
    return(
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
              <Heading size='md'>Asambleas Web</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
              <Button colorScheme={"telegram"}>Registrarse</Button>
              <Button colorScheme={"telegram"}>Identificarse</Button>
            </ButtonGroup>
        </Flex>
    )
}

export default nav;