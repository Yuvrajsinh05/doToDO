import React from 'react';
import { Button, Box, Switch, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux'; // Importing useSelector
import { removeTask, selectTasks ,updateTask} from '../store/features/taskSlice';
import { TaskCardContent, TaskCard, TaskText } from '../customconfig/customComponent';

export const ListTasks = ({ setSelectedTask, filterOption, searchQuery, darkMode }) => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks); 

    const handleDeleteTask = (task) => {
        dispatch(removeTask(task.id)); 
        setSelectedTask(null);
    };

    const handleTaskCompletion = (id) => {
        const taskToUpdate = tasks.find(task => task.id === id); 
        if (taskToUpdate) {
            dispatch(updateTask({ id, updateTaskData : { completed: !taskToUpdate.completed } }));
        }
    };
    
    const filteredTasks = tasks?.filter(task => {
        const title = task?.title?.toLowerCase();
        if (!title) return false;    
        const status = task.status.toLowerCase();
        switch (filterOption) {
            case 'all':
                return title.includes(searchQuery.toLowerCase()) || status.includes(searchQuery.toLowerCase());
            default:
                return status === filterOption && title.includes(searchQuery.toLowerCase());
        }
    });
    

    return (
        <>
            <Box sx={{ height: '400px', overflowY: 'auto', marginTop: '0.5rem', scrollbarWidth: 'none' }}>
                {filteredTasks?.map((task, index) => (
                    <TaskCard key={index} darkMode={darkMode} onClick={() => setSelectedTask(task)}>
                        <TaskCardContent>
                            <Switch checked={task?.completed} onChange={() => handleTaskCompletion(task.id)} />
                            <TaskText  variant="body1" completed={task.completed}>
                                {task.title}
                            </TaskText>
                            <TaskText  variant="body1" completed={task.completed}>
                                {task.status}
                            </TaskText>
                            <TaskText  variant="body1" completed={task.completed}>
                                {task.id}
                            </TaskText>
                            <CardActions>
                                <Button size="small" color="secondary" onClick={() => handleDeleteTask(task)}>
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
