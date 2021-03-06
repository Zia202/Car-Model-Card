import React from 'react'
import Box from "@mui/material/Box";
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/material/MenuItem'
 const Navbar = () => {
  return (
<>
<Box sx={{ flexGrow: 1  }}>
      <AppBar position="static" sx={{backgroundColor:"#363636"}}>
        <Toolbar>
          <IconButton
            size="larg ne"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Vehicle Arena
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
</>
    )
}

export default Navbar