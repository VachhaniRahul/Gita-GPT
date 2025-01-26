

// import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   // const { isLoggedin, userdata } = useContext(AuthContext);
//   const navigate = useNavigate()

//   return (
//     <AppBar position="static" sx={{ backgroundColor: "#333" }}>
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
//           GitaGPT
//         </Typography>
//         <Box>
//           <Button
//             component={Link}
//             to="/"
//             color="inherit"
//             sx={{ mx: 1 }}
//           >
//             Quotes
//           </Button>
//           <Button
//             component={Link}
//             to="/gitagpt"
//             color="inherit"
//             sx={{ mx: 1 }}
//           >
//             Gita AI
//           </Button>
//           <Button
//             component={Link}
//             to="/playchapter" // Link to the PlayChapter page
//             color="inherit"
//             sx={{ mx: 1 }}
//           >
//             Gita Audio Player
//           </Button>
        
//           <Button
//             onClick={
//                 ()=>{
//                     localStorage.removeItem('access')
//                     localStorage.removeItem('refresh')
//                     navigate('/login')
//                 }
//             }
//             color="inherit"
//             sx={{ mx: 1 }}
//           >
//             Logout
//           </Button>

//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/system';

const Navbar = () => {
  const navigate = useNavigate();

  // Styled button to add hover effects and smooth transition
  const StyledButton = styled(Button)({
    "&:hover": {
      backgroundColor: "#f57903", // Hover effect on buttons
      color: "#333", // Text color changes on hover
    },
    transition: "background-color 0.3s, color 0.3s", // Smooth transition
  });

  return (
    <AppBar 
      position="static" 
      sx={{
        background: "linear-gradient(45deg, #3e3e3e, #222)", // Gradient background
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)", // Subtle shadow effect
      }}
    >
      <Toolbar>
        <Typography 
          variant="h6" 
          sx={{
            flexGrow: 1, 
            fontWeight: 'bold',
            fontFamily: "'Roboto', sans-serif", 
            letterSpacing: "1px", // Slight letter spacing for the title
            color: "#fff"
          }}
        >
          GitaGPT
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <StyledButton 
            component={Link} 
            to="/" 
            color="inherit" 
            sx={{ mx: 1, fontSize: "16px", textTransform: "none" }}
          >
            Quotes
          </StyledButton>
          <StyledButton 
            component={Link} 
            to="/gitagpt" 
            color="inherit" 
            sx={{ mx: 1, fontSize: "16px", textTransform: "none" }}
          >
            Gita AI
          </StyledButton>
          <StyledButton 
            component={Link} 
            to="/playchapter" // Link to the PlayChapter page
            color="inherit" 
            sx={{ mx: 1, fontSize: "16px", textTransform: "none" }}
          >
            Gita Audio Player
          </StyledButton>
        
          <StyledButton
            onClick={() => {
              localStorage.removeItem('access');
              localStorage.removeItem('refresh');
              navigate('/login');
            }}
            color="inherit"
            sx={{ mx: 1, fontSize: "16px", textTransform: "none" }}
          >
            Logout
          </StyledButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

