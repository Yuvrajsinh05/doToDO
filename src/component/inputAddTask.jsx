
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { darkModeColors, lightModeColors } from '../customconfig/customComponent';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../store/features/taskSlice';



export const InputAddTask = ({ setTasks, tasks, darkMode }) => {
    const [newTask, setNewTask] = useState('');
    const dispatch = useDispatch()

    
    const handleAddTask = () => {
        if (newTask.trim() == '') return
        setTasks([...tasks, { text: newTask, completed: false, createdAt: new Date().toISOString() }]);
        setNewTask('');
        const newTaskData = {
            title: newTask,
            description: '',
            createdAt: new Date().toISOString(),
            status: 'notpicked',
            completed: false
        }
        dispatch(addTask(newTaskData))
    };


    return (
        <>
            <Box display="flex" alignItems="center" justifyContent="space-between" marginBottom="16px">
                <TextField
                    label="Add Task"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleAddTask();
                        }
                    }}
                    sx={{
                        flexGrow: 1,
                        marginRight: '16px',
                        backgroundColor: darkMode ? darkModeColors.inputBackground : lightModeColors.inputBackground
                    }}
                />
                <Button variant="contained" color="primary" onClick={handleAddTask} startIcon={<AddIcon />}>
                    Add
                </Button>
            </Box>
        </>
    )
}