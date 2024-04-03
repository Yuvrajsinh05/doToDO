import React from 'react';
import {TextField,Typography,IconButton, Box} from '@mui/material';
import { MenuItem } from '@mui/material';
import { Select } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';







export const SearchToggleFilter = ({darkMode,setDarkMode,setFilterOption,filterOption,setSearchQuery,searchQuery}) => {

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
      };
    
    return (
        <>
            <Box display="flex" alignItems="center">
                <Typography variant="body2" sx={{ marginRight: '8px' }}>Toggle  Mode</Typography>
                <IconButton onClick={handleDarkModeToggle} color="inherit">
                    {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
                <TextField
                    variant="outlined"
                    placeholder="Search..."
                    size="small"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{ marginLeft: 'auto', backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.04)' }}
                />
                <Select
                    variant="outlined"
                    value={filterOption}
                    onChange={(e) => setFilterOption(e.target.value)}
                    size="small"
                    sx={{ marginLeft: '8px', backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.04)' }}
                >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                </Select>
            </Box>
        </>
    )
}