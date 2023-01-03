import { FormControl, FormLabel, Textarea } from '@chakra-ui/react'
import React from 'react'


const TextareaInput = ({name,placeholder, handChange, label}) =>{
    return(
        <FormControl id="description">
            <FormLabel>Descripción</FormLabel>
            <Textarea placeholder='Descripción' name={"description"} onChange={handChange}/>
        </FormControl>
    )


}

export default TextareaInput