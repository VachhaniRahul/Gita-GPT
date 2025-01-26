import React from 'react';
import { Box , Typography , Card , CardContent } from "@mui/material";
import { Link } from 'react-router-dom';
import flower from "../Assets/flower-svgrepo-com.svg";

const GeetaVerse = ({ verses }) => {
    console.log(verses);
  return (
    <Box pb={6}>
        <Box sx={{
            width : "100%",
            height : ".5px",
            backgroundColor :"#FFF",
            marginTop : "40px",
            display : "flex",
            alignItems : "center",
            justifyContent : "center"
        }}
        >
            <img src={flower} alt="" width={30}/>
            <img src={flower} alt="" width={30}/>
            <img src={flower} alt="" width={30}/>
            <img src={flower} alt="" width={30}/>
            <img src={flower} alt="" width={30}/>

        </Box>
    <Typography variant='body1' color="#FFF" fontSize={20} display="flex" pt={1.5} fontWeight={600} >
            {verses.length} Verse
        </Typography>
        <Box sx={{
            width : "100%",
            height : ".5px",
            backgroundColor :"#FFF",
            marginTop : "30px"
        }}
        ></Box>
        <Box  
        sx={{
            
        }}
        >
            {
                verses.map((versestext)=>(
                <Link to={`/singlegeetaverse/${versestext.verse_number}`} style={{textDecoration : 'none'}}>
                    <Card key={versestext.id} 
                    sx={{
                       minHeight : "100px",
                       backgroundColor : "transparent",
                       marginTop : "20px",
                       cursor : "pointer",
                       transition : "ease-in-out .2s",
                       ":hover": {
                        backgroundColor : "#252525"
                       }
                    }}>
                        <CardContent>
                            <Box sx={{display : "flex" , gap : "50px" , alignItems : "center" , justifyContent : "center"}}>
                                <Typography color="#f57903" fontSize={17} fontWeight={500}>
                                    VERSE {versestext.verse_number}
                                </Typography>
                                <Typography color="#FFF" width={900}>
                                    { versestext.translations[4].description}
                                </Typography>
                            </Box>

                        </CardContent>

                    </Card>
                    </Link>
                ))
            }
        </Box>
    </Box>
  )
}

export default GeetaVerse