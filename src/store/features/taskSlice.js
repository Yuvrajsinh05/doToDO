import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'; 

const initialState = {
  tasks: [],
};
export const validStatuses = ['inprogress', 'completed', 'hold', 'notpicked'];
const isValidTask = (task) => {


  if (typeof task.title !== 'string') {
    throw new Error('Title is not a valid string');
  }

  if (typeof task.description !== 'string') {
    throw new Error('Description is not a valid string');
  }

  if (typeof task.createdAt !== 'string') {
    throw new Error('createdAt is not a valid string');
  }

  if (!validStatuses.includes(task.status)) {
    throw new Error('Status is not valid');
  }

  if (typeof task.completed !== 'boolean') {
    throw new Error('Completed is not a valid boolean');
  }

  return true;
};



export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuidv4(), // Generate unique ID
        ...action.payload,
      };
      if (isValidTask(newTask)) {
        state.tasks.push(newTask);
      }
    },
    updateTask: (state, action) => {
      const { id, updateTaskData } = action.payload;
      const taskIndex = state.tasks.findIndex(task => task.id === id);
      if (taskIndex !== -1) {
        const updatedTasks = [...state.tasks];
        updatedTasks[taskIndex] = { ...updatedTasks[taskIndex], ...updateTaskData };
        return { ...state, tasks: updatedTasks };
      }
      return state;
    },      
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    clearCompletedTasks: (state) => {
      console.log("clickedEvent")
      state.tasks = state.tasks.filter(task => !task.completed);
    },
  },
});

export const { addTask, updateTask, removeTask, clearCompletedTasks } = taskSlice.actions;

export const selectTasks = state => state.tasks.tasks;

export default taskSlice.reducer;
