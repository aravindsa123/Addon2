import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Trial = () => {
    var [pagename,setpagename] =useState("Home Page");
    const homepage =()=>{
        setpagename("Home Page")
    }
    const gallerypage =()=>{
        setpagename("Gallery Page")
    }
    const contactpage =()=>{
        setpagename("Contact Page")
    }
  return (
    <div>
      <Button variant='contained' color='primary' onClick={homepage}>Home page</Button>
      <Button variant='contained' color='success' onClick={gallerypage}>Gallery Page</Button>
      <Button variant='contained' color='error' onClick={contactpage}>Contact Page</Button>
      <Typography variant='h6'>Welocome to {pagename}</Typography>
    </div>
  )
}

export default Trial
