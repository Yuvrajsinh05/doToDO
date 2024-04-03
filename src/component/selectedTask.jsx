import React, { useEffect } from 'react';
import { Typography, Chip, Box, IconButton } from '@mui/material';
import { Schedule, Clear } from '@mui/icons-material'; // Import icons
import { SelectedTaskCard, SelectedTaskStyle, TaskCardContent } from '../customconfig/customComponent';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask } from '../store/features/taskSlice';
import { getStatusIcon, handleStatusChange } from '../customconfig/commonoperation';

export const SelectedTask = ({ selectedTask, darkMode, setSelectedTask }) => {
    const storedTasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();


    useEffect(() => {
        if (!selectedTask?.id) return;
        const currentSelectedId = selectedTask.id;
        const datafromStoreWrtId = storedTasks.tasks.filter((task) => task.id === currentSelectedId);
        setSelectedTask(datafromStoreWrtId[0]);
    }, [storedTasks]);


    function handleCheapChange() {
        const update = handleStatusChange(selectedTask)
        if (!update) return
        dispatch(updateTask(update))
    }
    return (
        <>
            {selectedTask && (
                <SelectedTaskCard darkMode={darkMode} sx={SelectedTaskStyle}>
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
                        <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap">
                            <Chip
                                icon={<Schedule />}
                                label={new Date(selectedTask.createdAt).toLocaleString()}
                                color="primary"
                                variant="outlined"
                                style={{ marginRight: 10, backgroundColor: darkMode ? '#424242' : '#E0E0E0', color: darkMode ? '#FFFFFF' : '#000000' }}
                            />
                            <Chip
                                icon={getStatusIcon(selectedTask)}
                                onClick={handleCheapChange}
                                label={<b>{selectedTask.status.toUpperCase()}</b> }
                                color="primary"
                                variant="outlined"
                                style={{ marginRight: 10, backgroundColor: darkMode ? '#424242' : '#E0E0E0', color: darkMode ? '#FFFFFF' : '#000000' }}
                            />
                            <Chip
                                label={selectedTask.completed ? 'Closed Ticket' : 'Open Ticket'}
                                color="primary"
                                variant="outlined"
                                style={{ backgroundColor: darkMode ? '#424242' : '#E0E0E0', color: darkMode ? '#FFFFFF' : '#000000' }}
                            />
                        </Box>

                       
                    </Box>
                    <Typography variant="h5" style={{ marginTop: '1rem',padding:'1.5rem' }}>{selectedTask.title}</Typography>
                    <TaskCardContent>
                        {/* Task content */}
                    </TaskCardContent>
                </SelectedTaskCard>
            )}
        </>
    );
};


