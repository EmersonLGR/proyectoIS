import { useState } from "react";
import { getAsamblea} from '../../../data/asambleas'
import { FormControl, FormLabel, Input, Container, Heading, Select, Stack, Button, Textarea, HStack } from '@chakra-ui/react'
import { useRouter } from "next/router";
import ShowInfo from "../../../components/ShowInfo";

export const getServerSideProps = async (context) => {
    try {
        const response = await getAsamblea(context.query.asamblea)
        if (response.status === 200){
            return {
                props: {
                data: response.data
                }
            }
        }else{
            return {
                redirect: {
                    destination: "/"
                }
            }
        }
    } catch (error) {
        return {
            redirect: {
                destination: "/"
            }
        }
    }
}

const editar = ({data}) => {

    const [asamblea] = useState(data)
    const router= useRouter()



    return(
        <Container maxW="container.xl" mt={10}>
                <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Ver Asamblea</Heading>
                <Stack my={10} >
                <ShowInfo value={asamblea.date} color0={"blue.500"} tag={"Fecha"} />
                <ShowInfo value={asamblea.type} color0={"blue.500"} tag={"Tipo"} />
                <HStack>
                <ShowInfo value={asamblea.description} color0={"blue.500"} tag={"Descripción"} />
                </HStack>
            </Stack>
            <Button variant='outline'
        size='lg'
        textTransform='uppercase'
        fontWeight='light'
        borderRadius='0'
        color='white'
        letterSpacing='1px'
        _hover={{
          color:'black',
          bg:'white'
        }}
        onClick={()=>router.push('/comentarios')}
        >Comentarios</Button>
        </Container>
    )
}

export default editar;