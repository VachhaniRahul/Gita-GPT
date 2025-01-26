import React from 'react'
import { Box, Typography, } from "@mui/material";

const Hero = () => {
  return (
    <Box 
    px={12}
    >
        <div className='hero-image'>
            <Typography variant='h2' color="#fff" fontWeight={700} fontSize={72} style={{position:"relative"}}>
            Experience the Gita <br/>
            <Typography variant='h2' color="#fedf89" fontWeight={700} fontSize={72}  style={{position:"relative"}} >
            Anywhere, Anytime
            </Typography>
            </Typography>  
        </div>
    </Box>
  )
}

export default Hero