import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Task = ({ task }) => {
    
    const taskStyle = {margin:'20px 0', padding: '20px'}

    return (
        <Paper style={taskStyle}>
            <Typography variant="h5" component="h3">
                { task.title }
            </Typography>
            <Typography component="p">
                { task.description }
            </Typography>
        </Paper>
    )

}

export default Task