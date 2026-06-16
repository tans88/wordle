import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function Header() {
  return (
    <Box>
      <AppBar color="inherit" 
        sx={{background: "inherit", boxShadow: "none", borderBottom: "1px solid #e5e5e5",}}>
        <Toolbar sx={{display: "flex", justifyContent: "center"}}>
          <Typography 
            variant="h6" 
            component="div"
            sx={{fontFamily: "inherit", fontWeight: "inherit", fontSize:  40}}>Wordle</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;