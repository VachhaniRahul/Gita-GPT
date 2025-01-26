// import React, { useEffect, useState } from 'react';
// import { Box , Typography } from "@mui/material";
// import { useParams } from 'react-router-dom';
// import flower from "../Assets/flower-svgrepo-com.svg";
// import flower2 from "../Assets/flower2.svg";
 
// const SingleGeetaVerse = () => {
//     const { verse_number } = useParams();
//     const[singleVerse , setSingleVerse] = useState(null);
//     console.log(verse_number);
//     const options = {
//         method: 'GET',
//         url: `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/verses/${verse_number}/`,
//         headers: {
//           'X-RapidAPI-Key': 'ec64071271mshd0777f7b8c18e33p15d129jsn563f0650c1d3',
//           'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
//         }
//       };
//     const handleSingleVerse = async()=>{
//         try {
//             const response = await fetch(options.url, {
//                 method: options.method,
//                 headers: options.headers,});
    
//             const data = await response.json();
//             console.log(data);
//             if(data){
//                 setSingleVerse(data);
//             }else{
//                 return;
//             }
            
//         } catch (error) {
//             console.log(error);     
//         } 
//     };

//     useEffect(()=>{
//         handleSingleVerse();
//     },[verse_number]);


//   return (
//     <Box 
//     sx={{
//         width : "70%",
//         margin : "auto",
//         marginTop : "80px"
        
//     }}
//     >
//         <Box sx={{
//             display : "flex",
//             alignItems : "center", 
//             justifyContent : "center",
//             flexDirection : "column",
//             gap : "20px"

//         }}
//         >
//         <Typography variant='h5' color="#f57903" fontWeight={500} width={490} fontSize={30} letterSpacing={1} textAlign="center">
//             {singleVerse?.text}
//         </Typography>
//         <Typography color="#FFF" fontSize={20} width={440} textAlign="center" mt={2} letterSpacing={.2}>
//             {singleVerse?.transliteration}
//         </Typography>

//         <Typography color="#FFF" fontSize={17} width={800} textAlign="center" mt={3}>
//             {singleVerse?.word_meanings}
//         </Typography>
//         </Box>

//         <Box sx={{
//             width : "100%",
//             height : ".5px",
//             backgroundColor :"#FFF",
//             marginTop : "60px",
//             display : "flex",
//             alignItems : "center",
//             justifyContent : "center"
//         }}
//         >
//             <img src={flower} alt="" width={30}/>
//             <img src={flower} alt="" width={30}/>
//             <img src={flower} alt="" width={30}/>
//             <img src={flower} alt="" width={30}/>
//             <img src={flower} alt="" width={30}/>
//         </Box>

//         <Box 
//         sx={{
//             display : "flex",
//             alignItems : "center",
//             justifyContent : "center",
//             flexDirection : "column",
//             gap: "20px",
//             marginTop : "20px"
//         }}
//         >
//             <Typography color="#FFF" fontSize={35} fontWeight="bold">
//                 Translation
//             </Typography>
//             <Typography color="#FFF" fontSize={19} textAlign="center" >
//                 {singleVerse?.translations[2].author_name === "Swami Sivananda" ? singleVerse?.translations[2]?.description : "Nothing"}
//             </Typography>
//         </Box>

//         <Box sx={{
//             width : "100%",
//             height : ".5px",
//             backgroundColor :"#FFF",
//             marginTop : "60px",
//             display : "flex",
//             alignItems : "center",
//             justifyContent : "center"
//         }}
//         >
//             <img src={flower2} alt='' width={30}/>
//             <img src={flower2} alt='' width={30}/>
//             <img src={flower2} alt='' width={30}/>
//             <img src={flower2} alt='' width={30}/>
//             <img src={flower2} alt='' width={30}/>


//         </Box>

//         <Box 
//          sx={{
//             display : "flex",
//             alignItems : "center",
//             justifyContent : "center",
//             flexDirection : "column",
//             gap: "20px",
//             marginTop : "20px",
//             pb : "40px"

//         }}
//         >
//             <Typography color="#FFF" fontSize={35} fontWeight="bold">
//               Commentary
//             </Typography>
//             <Typography color="#FFF" textAlign="center" fontSize={18}>
//                 {singleVerse?.commentaries[15].description}
//             </Typography>
//         </Box>

//     </Box>
//   )
// }

// export default SingleGeetaVerse

import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton } from "@mui/material";
import { useParams } from 'react-router-dom';
import flower from "../Assets/flower-svgrepo-com.svg";
import flower2 from "../Assets/flower2.svg";
import { VolumeUp } from '@mui/icons-material'; // Material UI icon for sound

const SingleGeetaVerse = () => {
    const { verse_number } = useParams();
    const [singleVerse, setSingleVerse] = useState(null);

    console.log(verse_number);
    const options = {
        method: 'GET',
        url: `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/verses/${verse_number}/`,
        headers: {
            'X-RapidAPI-Key': 'ec64071271mshd0777f7b8c18e33p15d129jsn563f0650c1d3',
            'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
        }
    };

    const handleSingleVerse = async () => {
        try {
            const response = await fetch(options.url, {
                method: options.method,
                headers: options.headers,
            });

            const data = await response.json();
            console.log(data);
            if (data) {
                setSingleVerse(data);
            } else {
                return;
            }

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleSingleVerse();
    }, [verse_number]);

    // Function to speak only the translation text
    const speakTranslation = () => {
        if (singleVerse?.translations && singleVerse.translations[2]) {
            const translationText = singleVerse.translations[2]?.description;
            if (translationText) {
                const utterance = new SpeechSynthesisUtterance(translationText);
                utterance.lang = 'en-US';  // Set the language
                utterance.rate = 0.8;        // Set speech rate (1 is the normal speed)
                utterance.pitch = 1;       // Set pitch (1 is the default, 0 is low, 2 is high)
                utterance.volume = 1; 
                window.speechSynthesis.speak(utterance);
            }
        }
    };

    return (
        <Box sx={{
            width: "70%",
            margin: "auto",
            marginTop: "80px"
        }}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "20px"
            }}>
                <Typography variant='h5' color="#f57903" fontWeight={500} width={490} fontSize={30} letterSpacing={1} textAlign="center">
                    {singleVerse?.text}
                </Typography>
                <Typography color="#FFF" fontSize={20} width={440} textAlign="center" mt={2} letterSpacing={.2}>
                    {singleVerse?.transliteration}
                </Typography>

                <Typography color="#FFF" fontSize={17} width={800} textAlign="center" mt={3}>
                    {singleVerse?.word_meanings}
                </Typography>
            </Box>

            <Box sx={{
                width: "100%",
                height: ".5px",
                backgroundColor: "#FFF",
                marginTop: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <img src={flower} alt="" width={30} />
                <img src={flower} alt="" width={30} />
                <img src={flower} alt="" width={30} />
                <img src={flower} alt="" width={30} />
                <img src={flower} alt="" width={30} />
            </Box>

            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "20px",
                marginTop: "20px"
            }}>
                <Typography color="#FFF" fontSize={35} fontWeight="bold">
                    Translation
                </Typography>
                <Typography color="#FFF" fontSize={19} textAlign="center">
                    {singleVerse?.translations[2].author_name === "Swami Sivananda" ? singleVerse?.translations[2]?.description : "Nothing"}
                </Typography>

                {/* Add Listen Button for Translation */}
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "15px"
                }}>
                    <IconButton onClick={speakTranslation} color="primary">
                        <VolumeUp fontSize="large" /> {/* Sound Icon */}
                    </IconButton>
                </Box>
            </Box>

            <Box sx={{
                width: "100%",
                height: ".5px",
                backgroundColor: "#FFF",
                marginTop: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <img src={flower2} alt='' width={30} />
                <img src={flower2} alt='' width={30} />
                <img src={flower2} alt='' width={30} />
                <img src={flower2} alt='' width={30} />
                <img src={flower2} alt='' width={30} />
            </Box>

            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "20px",
                marginTop: "20px",
                pb: "40px"
            }}>
                <Typography color="#FFF" fontSize={35} fontWeight="bold">
                    Commentary
                </Typography>
                <Typography color="#FFF" textAlign="center" fontSize={18}>
                    {singleVerse?.commentaries[15].description}
                </Typography>
            </Box>
        </Box>
    );
};

export default SingleGeetaVerse;
