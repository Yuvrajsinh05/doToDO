import React, { useState, useEffect } from 'react';
import { CssBaseline, Button, Grid, Typography, IconButton, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ParentBoxStyle } from './customconfig/customComponent';
import { SelectedTask } from './component/selectedTask';
import { InputAddTask } from './component/inputAddTask';
import { SearchToggleFilter } from './component/SearchToggleFilter';
import { ListTasks } from './component/listTask';
import { useDispatch, useSelector } from 'react-redux';
import { clearCompletedTasks } from './store/features/taskSlice';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('all');
  const storedTask = useSelector(state => state?.tasks)
  const dispatch = useDispatch()






  useEffect(() => {
    if(storedTask?.tasks?.length){
      setTasks(storedTask.tasks)
    }
  }, [storedTask])






  const handleClearCompleted = () => {
    dispatch(clearCompletedTasks())
  };


  return (
    <Box
      sx={{

        backgroundColor: darkMode ? '#121212' : '#ffffff',
        color: darkMode ? '#ffffff' : '#000000',
        backgroundImage: `radial-gradient(circle, ${darkMode ? '#333333' : '#ffffff'}, ${darkMode ? '#121212' : '#f0f0f0'})`,
        ...ParentBoxStyle
      }}
    >

      <CssBaseline />
      <Box sx={{ width: '100%', height: '100%' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <SelectedTask selectedTask={selectedTask} darkMode={darkMode} setSelectedTask={setSelectedTask} />
          </Grid>
          <Grid item xs={12} md={7}>

            <Box sx={{ marginTop: '16px', display: 'flex', alignItems: 'center' }}>
              <Typography variant="h4" gutterBottom>
                Do To Do
              </Typography>
              <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" sx={{ marginRight: '8px' }}>
                  Developed by:
                </Typography>
                <IconButton href="https://github.com/Yuvrajsinh05/doToDO" target="_blank">
                  <GitHubIcon sx={{ color: !darkMode ? '#121212' : '#ffffff' }} />
                </IconButton>
              </Box>
            </Box>

            <InputAddTask setTasks={setTasks} tasks={tasks} darkMode={darkMode} />
            <SearchToggleFilter setDarkMode={setDarkMode} darkMode={darkMode} searchQuery={searchQuery} setSearchQuery={setSearchQuery} filterOption={filterOption} setFilterOption={setFilterOption} />
            <ListTasks
              setTasks={setTasks}
              tasks={tasks}
              setSelectedTask={setSelectedTask}
              selectedTask={selectedTask}
              filterOption={filterOption}
              searchQuery={searchQuery}
              darkMode={darkMode}
            />
            <Button
              variant="outlined"
              color={darkMode ? 'primary' : 'secondary'}
              onClick={handleClearCompleted}
              disabled={!tasks.some((task) => task.completed)}
              sx={{ marginTop: '16px' }}
            >
              Clear Completed
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default App;
