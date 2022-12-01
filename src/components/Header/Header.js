import React from 'react';
import logo from '../../logo.svg'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';


function DropMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
       <IconButton
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ mr: 2, color: 'white' }}
      >
        <MenuIcon />
      </IconButton>
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Employees</MenuItem>
        <MenuItem onClick={handleClose}>Departments</MenuItem>
        <MenuItem onClick={handleClose}>OrgChart</MenuItem>
        <MenuItem onClick={handleClose}>Locations</MenuItem>
        <MenuItem onClick={handleClose}>Teams</MenuItem>
      </Menu>
    </div>
  );
}



export default function Header() {
  
  
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <img src={logo} alt='logo' className='header--logo' />
                <Typography  variant="h6" sx={{  mr: 'auto' }}>
                    Employee Directory
                </Typography>
                <DropMenu />               
            </Toolbar>
        </AppBar>
    </Box>
  );
}