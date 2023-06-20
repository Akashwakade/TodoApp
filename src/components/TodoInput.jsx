import { Box, Button, CardHeader, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

export const TodoInput = () => {
    const[todo,setTodo]=useState("")

 const handleClick=()=>{
    console.log(todo)
 }
  return (
    <Box display={'flex'} justifyContent={'center'} margin={'50px'}>
       
       <Input onChange={(e)=>setTodo(e.target.value)} width={'400px'} type='text'></Input>
       <Button onClick={handleClick}>Add Todo</Button>

    </Box>
  )
}
