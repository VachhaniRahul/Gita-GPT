import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";

const Quotes = () => {

  const quotes= [
    "Yoga is the journey of the self, through the self, to the self.",
    "It is better to perform one's own duties imperfectly than to master the duties of another. By fulfilling the obligations he is born with, a person never comes to grief.",
    "Perform your obligatory duty, because action is indeed better than inaction.",
    "One who sees inaction in action, and action in inaction, is intelligent among men.",
    "The mind is restless and difficult to restrain, but it is subdued by practice.",
    "The soul is neither born, nor does it ever die; nor having once existed, does it ever cease to be. The soul is without birth, eternal, immortal, and ageless. It is not destroyed when the body is destroyed.",
    "The self-controlled soul, who moves amongst sense objects, free from either attachment or repulsion, he wins eternal peace.",
    "On this path effort never goes to waste, and there is no failure. Even a little effort towards spiritual awareness will protect you from the greatest fear.",
    "Those who are motivated only by desire for the fruits of action are miserable, for they are constantly anxious about the results of what they do.",
    "He alone sees truly who sees the Lord the same in every creature...seeing the same Lord everywhere, he does not harm himself or others.",
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const handleNextQuotes = () => {
    const nextIndex = (currentQuoteIndex + 1) % quotes.length;
    setCurrentQuoteIndex(nextIndex);
  };



  return (
    <Box mt={9} pb={6} >
      <Card
        sx={{
          width: "85%",
          margin: "auto",
          backgroundColor: "#1a1a1a",
          minHeight: "185px",
          padding : "20px",
          borderRadius : "10px"
        }}

        
      >
        <CardContent  
        sx={{
            display : "flex",
            flexDirection : "column",
            gap : "12px"
        }}
        >
          <Box sx={{ display: "flex", gap: "7px", alignItems: "center" }}>
            <Typography variant="body1" fontWeight={420} color="#f57903" fontSize={16}>
              Verse of the day - BG 2.27
            </Typography>
            <div
              style={{
                width: "80%",
                height: "2px",
                backgroundColor: "#fff",
              }}
            ></div>
          </Box>
          <Typography color="#9ca3af" fontSize={18} fontWeight={500} >
           {quotes[currentQuoteIndex]}
          </Typography>
          <Button sx={{color : "#FFF" , width : "100px" , padding : "10px 0px"}} onClick={handleNextQuotes}>
            See More
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Quotes;
