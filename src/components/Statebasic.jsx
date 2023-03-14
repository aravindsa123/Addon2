import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasic = () => {
    var [fname,setfname] =useState("Aravind")
   const changeName=()=>{
    setfname("Anson")
   }
  return (
    <div>
      <Typography variant='h6'>Welcome {fname}</Typography>
      <Button variant='contained' color='success' onClick={changeName}>Change name</Button>
      <br/>
      <br/>
      <Button variant='contained' color='inherit'>Gallery</Button>
      <br/>
      <br/>
      <Button variant='contained' color='error'>Form</Button>
      <br/>
      <br/>
      <Button variant='contained' color='primary'>Contact</Button>

    </div>
  )
}

export default Statebasic
