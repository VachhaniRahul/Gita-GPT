
// import React from "react";
// import Footer from "./Footer";


// const GitaGPT = () => {
//   return (
//     <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
//       <iframe
//         style={{ height: "100%", width: "100%", border: "none" }}
//         src="https://widget.botsonic.com/CDN/index.html?service-base-url=https%3A%2F%2Fapi-azure.botsonic.ai&token=e8c6e04c-9d95-43bc-9925-325794aef95d&base-origin=https%3A%2F%2Fbot.writesonic.com&instance-name=Botsonic&standalone=true&page-url=https%3A%2F%2Fbot.writesonic.com%2Fbots%2Fd302376f-4a99-439a-8448-8802a50de8df%2Fconnect"
       
//         title="gitaGPT"
//       ></iframe>
//       <div style={{ 
//         position: "absolute",
//         bottom: 0,
//         left: 0,
//         width: "100%",
//         height: "60px", // Adjust height as needed
//         backgroundColor: "#000", // Black background
//         color: "#fff", // White text color
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         zIndex: 10
//       }}>
       
//       </div>
//     </div>
//   );
// };

// export default GitaGPT;


import React, { useState, useEffect } from 'react';

const GitaGPT = () => {
  const [transcription, setTranscription] = useState('');
  const [isListening, setIsListening] = useState(false);

  // Initialize Speech Recognition API (for modern browsers that support it)
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  useEffect(() => {
    // Configure speech recognition
    recognition.lang = 'en-US'; // Language for speech recognition
    recognition.continuous = true; // Keep listening for input
    recognition.interimResults = true; // Show partial results as user speaks
    recognition.maxAlternatives = 1;

    // Event listener for when speech is recognized
    recognition.onresult = (event) => {
      const currentTranscript = event.results[event.results.length - 1][0].transcript;
      setTranscription(currentTranscript);
    };

    // Event listener for when speech recognition ends
    recognition.onend = () => {
      setIsListening(false);
    };

    // Event listener for errors
    recognition.onerror = (event) => {
      console.error('Speech recognition error: ', event.error);
    };

    return () => {
      recognition.abort(); // Stop listening when component is unmounted
    };
  }, []);

  const startListening = () => {
    recognition.start();
    setIsListening(true);
  };

  const stopListening = () => {
    recognition.stop();
    setIsListening(false);
  };

  const sendToChatbot = () => {
    if (transcription) {
      // Send transcription to the chatbot (you can integrate this with your chatbot API)
      console.log('Sending to chatbot:', transcription);

      // You can replace this with actual API call to send data to the chatbot
      // Example: sendToChatbotAPI(transcription);
    }
  };

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <iframe
        style={{ height: '100%', width: '100%', border: 'none' }}
        src="https://widget.botsonic.com/CDN/index.html?service-base-url=https%3A%2F%2Fapi-azure.botsonic.ai&token=e8c6e04c-9d95-43bc-9925-325794aef95d&base-origin=https%3A%2F%2Fbot.writesonic.com&instance-name=Botsonic&standalone=true&page-url=https%3A%2F%2Fbot.writesonic.com%2Fbots%2Fd302376f-4a99-439a-8448-8802a50de8df%2Fconnect"
        title="gitaGPT"
      ></iframe>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '60px',
          backgroundColor: '#000',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
        }}
      >
        <button onClick={startListening} disabled={isListening}>
          Start Listening
        </button>
        <button onClick={stopListening} disabled={!isListening}>
          Stop Listening
        </button>
        <button onClick={sendToChatbot} disabled={!transcription}>
          Send to Chatbot
        </button>
        <div>{transcription && <p>Transcription: {transcription}</p>}</div>
      </div>
    </div>
  );
};

export default GitaGPT;
