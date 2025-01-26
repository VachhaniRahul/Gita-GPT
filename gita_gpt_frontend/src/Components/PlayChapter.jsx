

import React, { useState, useEffect, useRef } from "react";
import { Button, Typography, Box, Paper } from "@mui/material";

const PlayChapter = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState("/audio/chapter1.mp3");
  const [userCommand, setUserCommand] = useState("");
  const [isListening, setIsListening] = useState(false); // Track listening state
  const audioRef = useRef(null);
  const recognition = useRef(null);

  useEffect(() => {
    // Initialize the audio
    if (audioRef.current) {
      audioRef.current.src = audioUrl;
      audioRef.current.load();
    }

    // Initialize Speech Recognition
    if ("webkitSpeechRecognition" in window) {
      recognition.current = new window.webkitSpeechRecognition();
      recognition.current.continuous = false;
      recognition.current.interimResults = false;
      recognition.current.lang = "en-US";
      recognition.current.onresult = handleVoiceCommand;

      // Reset isListening when recognition ends
      recognition.current.onend = () => {
        setIsListening(false);
        console.log("Speech recognition ended.");
      };

      recognition.current.onerror = (error) => {
        setIsListening(false);
        console.error("Speech recognition error:", error);
      };
    } else {
      alert("Sorry, your browser doesn't support Speech Recognition.");
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [audioUrl]);

  const handleVoiceCommand = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    console.log("Recognized command:", command);
    setUserCommand(command);

    if (command.includes("play chapter")) {
      const chapterNumber = command.match(/\d+/)?.[0];
      if (chapterNumber) {
        const newUrl = `/audio/chapter${chapterNumber}.mp3`;
        console.log("Attempting to play:", newUrl);
        setAudioUrl(newUrl);
        playAudio();
      } else {
        alert("Could not detect chapter number. Please say, for example, 'play chapter 2'.");
      }
    } else if (command.includes("stop")) {
      stopAudio();
    } else if (command.includes("restart")) {
      restartAudio();
    } else if (command.includes("start")) {
      startAudio();
    }
  };

  const playAudio = async () => {
    if (audioRef.current) {
      try {
        const response = await fetch(audioUrl);
        if (!response.ok) {
          throw new Error(`Audio file not found: ${audioUrl}`);
        }

        audioRef.current.src = audioUrl;
        audioRef.current.load();
        await audioRef.current.play();
        setIsPlaying(true);
        console.log("Audio is playing...");
      } catch (error) {
        console.error("Error playing audio:", error);
        alert(`Error playing audio: ${error.message}. Please check the file.`);
      }
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      console.log("Audio stopped.");
    }
  };

  const restartAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          console.log("Audio restarted from the beginning.");
        })
        .catch((error) => {
          console.error("Error restarting audio:", error);
        });
    }
  };

  const startAudio = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          console.log("Audio resumed from where it was paused.");
        })
        .catch((error) => {
          console.error("Error resuming audio:", error);
        });
    }
  };

  const startListening = () => {
    if (recognition.current && !isListening) {
      recognition.current.start();
      setIsListening(true);
      console.log("Listening for commands...");
    } else {
      console.log("Already listening.");
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1E1E1E",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          border: "2px solid white",
          borderRadius: "10px",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 3 }}>
          Gita Audio Player By Voice Commands
        </Typography>

        <Typography variant="h6" sx={{ fontSize: "1.2rem", marginBottom: 2 }}>
          Speak command "play chapter 1" to play chapter
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "1.2rem", marginBottom: 2 }}>
          Speak command "stop" to stop
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "1.2rem", marginBottom: 2 }}>
          Speak command "start" to resume
        </Typography>
        <Typography variant="h6" sx={{ fontSize: "1.2rem", marginBottom: 2 }}>
          Speak command "restart" to restart
        </Typography>
        <Button
          variant="contained"
          onClick={startListening}
          sx={{
            backgroundColor: "#1976d2",
            color: "white",
            padding: "10px 20px",
            fontSize: "1.1rem",
            '&:hover': { backgroundColor: "#1565c0" },
            marginBottom: 3,
          }}
        >
          Press and Speak
        </Button>
      </Box>

      {userCommand && (
        <Paper
          sx={{
            padding: "10px 20px",
            backgroundColor: "#333",
            color: "#fff",
            borderRadius: "10px",
            marginBottom: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="body1" sx={{ fontSize: "1rem" }}>
            You said: <span style={{ fontWeight: "bold" }}>{userCommand}</span>
          </Typography>
        </Paper>
      )}

      <audio ref={audioRef} />
    </Box>
  );
};

export default PlayChapter;

