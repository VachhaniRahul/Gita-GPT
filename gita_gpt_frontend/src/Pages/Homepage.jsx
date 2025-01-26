import React from 'react';
import { Box } from "@mui/material";
import Hero from '../Components/Hero';
import Quotes from '../Components/Quotes';
// import NewsLetter from '../Components/NewsLetter';
import GeetaCards from '../Components/GeetaCards';
import Footer from '../Components/Footer';
// import AlertDialog from '../Components/AlertDialog';




const Homepage = () => {
  return (
    <Box>
        <Hero/>
        <Quotes/>
        {/* <NewsLetter/> */}
        <GeetaCards/>
        <Footer/>
        {/* <AlertDialog/> */}
     
    </Box>
  )
}

export default Homepage