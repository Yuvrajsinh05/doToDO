import React, { useState, useEffect } from 'react';
import {
  CssBaseline,
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  IconButton,
  Box,
  Switch,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { MenuItem } from '@mui/material';
import { Select } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import UploadIcon from '@mui/icons-material/CloudUpload'; // Example upload icon
import BadgeIcon from '@mui/icons-material/AssignmentTurnedIn';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Dark mode icon
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Light mode icon
import { styled } from '@mui/system';



export const lightModeColors = {
    cardBackground: '#ffffff',
    textColor: '#000000',
    inputBackground: '#f5f5f5', // Light mode input background color
};
export const ParentBoxStyle = {
    height: '100%',
    minHeight: '100vh',
    transition: 'background-color 0.3s, color 0.3s, background-image 0.3s',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}
export const darkModeColors = {
    cardBackground: '#424242',
    textColor: '#ffffff',
    inputBackground: '#616161', // Dark mode input background color
};

export const TaskCard = styled(Card)(({ darkMode }) => ({
    marginBottom: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: darkMode ? darkModeColors.cardBackground : lightModeColors.cardBackground,
    color: darkMode ? darkModeColors.textColor : lightModeColors.textColor,
    transition: 'background-color 0.3s, color 0.3s',
    '&:hover': {
        backgroundColor: darkMode ? '#757575' : '#f5f5f5',
    },
}));

export const SelectedTaskCard = styled(Card)(({ darkMode }) => ({
    marginBottom: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: darkMode ? '#616161' : '#f9f9f9',
    color: darkMode ? '#ffffff' : '#000000',
}));

export const TaskCardContent = styled(CardContent)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
});

export const TaskText = styled(Typography)(({ completed }) => ({
    textDecoration: completed ? 'line-through' : 'none',
    flex: 1,
}));

export const SelectedTaskStyle={
marginTop: '3rem',
height: '80vh',
overflowY: 'auto', 
scrollbarWidth: 'none',
position: 'relative' 
}