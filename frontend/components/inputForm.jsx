import React from "react";
import { Button, Input} from "@chakra-ui/react"


const inputForm = ( type, placeholder, typeButton) => {
    return(
      <Stack spacing={3}>
        <Input placeholder={placeholder} type={type}/>
        <Button type={typeButton}/>
      </Stack>
    )
  }

  export default inputForm;