import { Button, TextField } from '@mui/material'
import React from 'react'
const Login = () => {
  return (
    <div>
         <h1>Aravind</h1>
      {/* <input placeholder='Username'/> */}
      <br/>
      <TextField label="Username" variant='outlined'/>
      <br/>
      {/* <input type={'password'} placeholder='Password'/> */}
      <br/>
      <TextField label="Password" variant='filled'/>
      <br/>
      <TextField  label="Email" variant='standard'/>
      <br/>
      <Button variant='contained' color='success'>Login</Button>
    </div>
  )
}

export default Login