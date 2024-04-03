import { Done, Schedule, Pause, HourglassEmpty, Clear } from '@mui/icons-material'; // Import icons

export const getStatusIcon = (selectedTask) => {
    if(!selectedTask) return
    const { status, completed } = selectedTask;
    switch (status) {
        case 'completed':
            return <Done style={{ color: '#4CAF50' }} />;
        case 'notpicked':
            return  <HourglassEmpty style={{ color: '#9E9E9E' }}/>
        case 'inprogress':
            return <Schedule style={{ color: '#FFC107' }} />;
        case 'hold':
            return <Pause style={{ color: '#F44336' }} />;
        default:
            return completed ? <Done style={{ color: '#4CAF50' }} /> : <HourglassEmpty style={{ color: '#9E9E9E' }} />;
    }
};


export  const handleStatusChange = (selectedTask) => {
    if (selectedTask.completed) return;
    const { status, id } = selectedTask;
    let statusToBeUpdated = '';

    switch (status) {
        case 'inprogress':
            statusToBeUpdated = 'completed';
            break;
        case 'completed':
            statusToBeUpdated = 'hold';
            break;
        case 'notpicked':
            statusToBeUpdated = 'inprogress';
            break;
        default:
            statusToBeUpdated = 'notpicked';
            break;
    }

    const update = {
        updateTaskData: {
            status: statusToBeUpdated
        },
        id: id
    };

    return update
};
