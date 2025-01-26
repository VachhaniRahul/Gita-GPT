


import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button } from "@mui/material";
import { useParams } from 'react-router-dom';
import GeetaVerse from './GeetaVerse';

const Sloka = () => {
  const { chapter_number } = useParams();
  const [singleData, setGeetaCardData] = useState(null);
  const [geetaverse, setGeetaVerse] = useState([]);
  const [audioUrl, setAudioUrl] = useState(`/audio/chapter${chapter_number}.mp3`); // Default audio URL based on chapter number
  const [isPlaying, setIsPlaying] = useState(false); // Audio play state
  const audioRef = useRef(null); // Reference to the audio element

  // Fetch chapter data
  const options = {
    method: "GET",
    url: `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter_number}/`,
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
      if (data) {
        setGeetaCardData(data);
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    geetaCards();
  }, [chapter_number]);

  // Fetch verses
  const options2 = {
    method: 'GET',
    url: `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter_number}/verses/`,
    headers: {
      'X-RapidAPI-Key': 'ec64071271mshd0777f7b8c18e33p15d129jsn563f0650c1d3',
      'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
    }
  };

  const geetaVerses = async () => {
    try {
      const response = await fetch(options2.url, { method: options2.method, headers: options2.headers });
      const data = await response.json();
      if (data) {
        setGeetaVerse(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    geetaVerses();
  }, [chapter_number]);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
        });
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const restartAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Error restarting audio:", error);
        });
    }
  };

  return (
    <Box className="main-sloka" sx={{ backgroundColor: '#000', color: 'white', minHeight: '100vh' }}>
      <Box sx={{
        width: "68%",
        margin: "auto",
        marginTop: "80px"
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px",
        }}>
          <Typography color="#f57903" fontSize={22} fontWeight={500}>
            Chapter {singleData?.chapter_number}
          </Typography>
          <Typography color="#FFF" fontWeight={700} fontSize={35} mt={2}>
            {singleData?.name_translated || singleData?.name_transliterated}
          </Typography>
          <Typography color="#FFF" fontSize={18} mt={3} letterSpacing={.4}>
            {singleData?.chapter_summary}
          </Typography>
        </Box>

        {/* Audio Controls Section */}
        <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px"
        }}>
          <Button
            variant="outlined"
            onClick={playAudio}
            sx={{
              borderColor: '#fff',
              color: '#fff',
              fontSize: '1rem',
              padding: '10px 20px',
              '&:hover': { borderColor: '#f57903', color: '#f57903' }, // Border and text color on hover
            }}
            
          >
            Play
          </Button>
          <Button
            variant="outlined"
            onClick={pauseAudio}
            sx={{
              borderColor: '#fff',
              color: '#fff',
              fontSize: '1rem',
              padding: '10px 20px',
              '&:hover': { borderColor: '#f57903', color: '#f57903' }, // Border and text color on hover
            }}
           
          >
            Pause
          </Button>
          <Button
            variant="outlined"
            onClick={restartAudio}
            sx={{
              borderColor: '#fff',
              color: '#fff',
              fontSize: '1rem',
              padding: '10px 20px',
              '&:hover': { borderColor: '#f57903', color: '#f57903' }, // Border and text color on hover
            }}
            
          >
            Restart
          </Button>
        </Box>

        {/* Geeta Verses */}
        <GeetaVerse verses={geetaverse} />

        {/* Audio Element */}
        <audio ref={audioRef} src={audioUrl} />
      </Box>
    </Box>
  );
};

export default Sloka;
