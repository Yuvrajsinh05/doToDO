import React from 'react';
import { Button, Box, Switch, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import UploadIcon from '@mui/icons-material/CloudUpload'; // Example upload icon
import BadgeIcon from '@mui/icons-material/AssignmentTurnedIn';

import { TaskCardContent, TaskCard, TaskText } from '../customconfig/customComponent';
// import  from './customconfig/customComponent';



export const ListTasks = ({ setTasks, tasks, setSelectedTask, filterOption, searchQuery, darkMode }) => {


    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
        setSelectedTask(null);
    };

    const handleTaskCompletion = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    const handleTaskClick = (task) => {
        setSelectedTask(task);
    };

    const filteredTasks = tasks.filter(task => {
        if (filterOption === 'all') {
            return task.text.toLowerCase().includes(searchQuery.toLowerCase());
        } else if (filterOption === 'completed') {
            return task.completed && task.text.toLowerCase().includes(searchQuery.toLowerCase());
        } else if (filterOption === 'pending') {
            return !task.completed && task.text.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return true;
    });

    return (
        <>
            <Box sx={{ height: '400px', overflowY: 'auto', marginTop: '0.5rem', scrollbarWidth: 'none' }}>

                {filteredTasks.map((task, index) => (
                    <TaskCard key={index} darkMode={darkMode} onClick={() => handleTaskClick(task)}>
                        <TaskCardContent>
                            <Switch checked={task.completed} onChange={() => handleTaskCompletion(index)} />
                            <TaskText variant="body1" completed={task.completed}>
                                {task.text}
                            </TaskText>
                            <CardActions>
                                <Button size="small" color="secondary" onClick={() => handleDeleteTask(index)}>
                                    <DeleteIcon />
                                </Button>
                            </CardActions>
                        </TaskCardContent>
                    </TaskCard>
                ))}
            </Box>
        </>
    )
}