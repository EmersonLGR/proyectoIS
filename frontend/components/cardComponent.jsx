import { Card, CardBody, CardFooter, Divider } from "@chakra-ui/react";
import React from "react";

const card = (fechaAsamblea, tema, tipoCaracter) => {
  return(
    <Card>
      <CardBody>
        <Stack mt='6' spacing='3'>
            <Heading size='md'>{fechaAsamblea}</Heading>
                <Text>
                    {tema}
                </Text>
            <Text color='blue.600' fontSize='2xl'>
                {tipoCaracter}
            </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        
      </CardFooter>
    </Card>
  )
}

export default card;