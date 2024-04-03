import React from 'react';
import { Typography, Chip, Box, IconButton } from '@mui/material';
import { Done, Schedule, Pause, HourglassEmpty, Clear } from '@mui/icons-material'; // Import icons
import { SelectedTaskCard, SelectedTaskStyle, TaskCardContent } from '../customconfig/customComponent';

export const SelectedTask = ({ selectedTask, darkMode, setSelectedTask }) => {
    const getStatusIcon = () => {
        if (selectedTask.completed) {
            return <Done style={{ color: '#4CAF50' }} />;
        } else if (selectedTask.status === 'inprogress') {
            return <Schedule style={{ color: '#FFC107' }} />;
        } else if (selectedTask.status === 'hold') {
            return <Pause style={{ color: '#F44336' }} />;
        } else {
            return <HourglassEmpty style={{ color: '#9E9E9E' }} />;
        }
    };

    return (
        <>
            {selectedTask && (
                <SelectedTaskCard darkMode={darkMode}
                    sx={SelectedTaskStyle}>
                    <IconButton
                        onClick={() => setSelectedTask()}
                        sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            color: darkMode ? '#FFFFFF' : '#000000',
                        }}
                    >
                        <Clear />
                    </IconButton>
                    <Box textAlign="center" mb={2} padding={3}>
                        <Chip icon={<Schedule />} label={new Date(selectedTask.createdAt).toLocaleString()} color="primary" variant="outlined" style={{ marginRight: 10, backgroundColor: darkMode ? '#424242' : '#E0E0E0', color: darkMode ? '#FFFFFF' : '#000000' }} />
                        <Chip icon={getStatusIcon()} label={selectedTask.completed ? 'Completed' : selectedTask.status === 'inprogress' ? 'In Progress' : 'On Hold'} color="primary" variant="outlined" style={{ backgroundColor: darkMode ? '#424242' : '#E0E0E0', color: darkMode ? '#FFFFFF' : '#000000' }} />
                        <Typography variant="h5" style={{ marginTop: '1rem' }}>{selectedTask.text}</Typography>
                    </Box>
                    <TaskCardContent>
                        {/* Task content */}
                    </TaskCardContent>
                </SelectedTaskCard>
            )}
        </>
    )
}
