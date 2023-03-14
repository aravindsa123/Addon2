import { CardMedia } from '@mui/material'
import { width } from '@mui/system'
import React from 'react'

const Card = () => {
  return (
    <div>
        <Card sx={{maxwidth :345}}/>
     <CardMedia component="img" height="200" image="C:\Users\User\Pictures\Camera Roll\p1.jpg" alt="Sky High"/>
    </div>
  )
}

export default Card
