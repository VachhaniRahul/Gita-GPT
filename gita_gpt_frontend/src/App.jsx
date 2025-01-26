import { Box } from "@mui/material"
import { BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
import Sloka from "./Components/Sloka";
import SingleGeetaVerse from "./Components/SingleGeetaVerse";
import GitaGPT from "./Components/GitaGPT";
import Login from "./Components/Login";
import Register from "./Components/Register";
import PlayChapter from './Components/PlayChapter';
import ProtectedRoute from './Services/ProtectedRoute.jsx';


function App() {
  
  return (
    <Box sx={{backgroundColor : "#000"}} minHeight="100vh">
    <Router>
      <Navbar/>
      <Routes>
       
        <Route path="/" element={<ProtectedRoute><Homepage/></ProtectedRoute>  }/>
        <Route path="/sloka/:chapter_number" element={<ProtectedRoute><Sloka/></ProtectedRoute>}/>
        <Route path="/singlegeetaverse/:verse_number" element={<ProtectedRoute><SingleGeetaVerse/></ProtectedRoute>}/>
        <Route path="/gitagpt" element={<ProtectedRoute><GitaGPT/></ProtectedRoute>}/>
        <Route path="/playchapter" element={<ProtectedRoute><PlayChapter /></ProtectedRoute>} />
       
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        {/* // Add route in Routes */}
        
      </Routes>
    </Router>
    </Box>
    
  );
}

export default App;
