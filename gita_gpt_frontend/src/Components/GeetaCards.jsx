// import React, { useEffect, useState } from "react";
// import { Box, Typography, Card, CardContent } from "@mui/material";
// import DensityMediumIcon from "@mui/icons-material/DensityMedium";
// import { Link } from "react-router-dom";
// // import { BASE_URL } from "../Services/Url";

// const GeetaCards = () => {
//   const [geetaCardData, setGeetaCardData] = useState([]);

//   const options = {
//     method: "GET",
//     url: "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/",
//     params: { limit: "18" },
//     headers: {
//       "X-RapidAPI-Key": "ec64071271mshd0777f7b8c18e33p15d129jsn563f0650c1d3",
//       "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
//     },
//   };

//   const geetaCards = async () => {
//     try {
//       const response = await fetch(options.url, {
//         method: options.method,
//         headers: options.headers,
//       });
//       const data = await response.json();
//       console.log(data);
//       if (data.length > 0) {
//         setGeetaCardData(data);
//       } else {
//         // alert("No data Found");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(()=>{
//     geetaCards();
//   },[]);



//   return (
//     <Box pb={5}>
//     <Box px={15} pb={6} >

//       <Typography
//         variant="h4"
//         fontWeight={600}
//         color="#FFF"
//         fontSize={40}
//         mb={3}
//       >
//         Chapters
//       </Typography>

//     <Box  
//     sx={{
//       display : "flex",
//       gap : "30px",
//       flexWrap : "wrap"
//     }}>
//       {
//         geetaCardData.map((item)=>(
//         <Link to={`/sloka/${item.chapter_number}`} style={{textDecoration : "none"}} >
//           <Card
//           key={item.id}
//         sx={{
//           width: "660px",
//           minHeight: "250px",
//           backgroundColor: "#252525",
//           borderRadius: "9px",
//           border: ".2px solid #ccc",

//           ":hover": {
//             backgroundColor: "#1a1a1a",
//           },
//           cursor : "pointer"
//         }}
//       >
//         <CardContent
//           sx={{
//             padding: "35px 35px",
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <Typography
//               color="#f57903"
//               variant="caption"
//               fontWeight={500}
//               fontSize={15}
//             >
//               CHAPTER {item.chapter_number}
//             </Typography>
//             <Typography color="#fff" variant="h6" fontWeight={600} mt={-0.2}>
//               {item.name_translated || item.name_transliterated || item.name}
//             </Typography>
//           </Box>

//           <Typography color="#FFF" variant="body1" fontSize={16.5} mt={1}>
//             {item.chapter_summary.slice(0,278)}...
//           </Typography>

//           <Box
//             sx={{ display: "flex", alignItems: "center", gap: "10px" }}
//             mt={2}
//           >
//             <DensityMediumIcon sx={{ color: "#FFF" }} fontSize="23px" />
//             <Typography color="#FFF" variant="body1" fontSize={15}>
//               {item.verses_count} Verses
//             </Typography>
//           </Box>
//         </CardContent>
//       </Card>
//       </Link>
//         ))
//       }
//       </Box>

//     </Box>
//     <div style={{
//       width : "100%",
//       height : "1px",
//       backgroundColor : "#FFF",
//       marginTop : "-20px",
//       marginBottom : "40px"
    
//     }}></div>
//     </Box>
//   );
// };

// export default GeetaCards;

import React, { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { Link } from "react-router-dom";

const GeetaCards = () => {
  const [geetaCardData, setGeetaCardData] = useState([]);

  const options = {
    method: "GET",
    url: "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/",
    params: { limit: "18" },
    headers: {
      "X-RapidAPI-Key": "ec64071271mshd0777f7b8c18e33p15d129jsn563f0650c1d3",
      "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
    },
  };

  const geetaCards = async () => {
    try {
      const response = await fetch(options.url, {
        method: options.method,
        headers: options.headers,
      });
      const data = await response.json();
      console.log(data);
      if (data.length > 0) {
        setGeetaCardData(data);
      } else {
        // alert("No data Found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    geetaCards();
  },[]);

  return (
    <Box pb={5} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box px={15} pb={6} textAlign="center">
        <Typography
          variant="h4"
          fontWeight={600}
          color="#FFF"
          fontSize={40}
          mb={3}
        >
          Chapters
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {geetaCardData.map((item) => (
            <Link to={`/sloka/${item.chapter_number}`} style={{ textDecoration: "none" }} key={item.id}>
              <Card
                sx={{
                  width: "660px",
                  minHeight: "250px",
                  backgroundColor: "#252525",
                  borderRadius: "9px",
                  border: ".2px solid #ccc",
                  ":hover": {
                    backgroundColor: "#1a1a1a",
                  },
                  cursor: "pointer"
                }}
              >
                <CardContent
                  sx={{
                    padding: "35px 35px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      color="#f57903"
                      variant="caption"
                      fontWeight={500}
                      fontSize={15}
                    >
                      CHAPTER {item.chapter_number}
                    </Typography>
                    <Typography color="#fff" variant="h6" fontWeight={600} mt={-0.2}>
                      {item.name_translated || item.name_transliterated || item.name}
                    </Typography>
                  </Box>

                  <Typography color="#FFF" variant="body1" fontSize={16.5} mt={1}>
                    {item.chapter_summary.slice(0, 278)}...
                  </Typography>

                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                    mt={2}
                  >
                    <DensityMediumIcon sx={{ color: "#FFF" }} fontSize="23px" />
                    <Typography color="#FFF" variant="body1" fontSize={15}>
                      {item.verses_count} Verses
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Box>
      </Box>
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#FFF",
          marginTop: "-20px",
        }}
      ></div>
    </Box>
  );
};

export default GeetaCards;
