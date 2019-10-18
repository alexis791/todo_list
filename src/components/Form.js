import React from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography';

const Form = () => {
    return (
        <Container fixed>
            <Paper>
                <Grid container spacing={3} style={{ padding: 20 }}>
                    
                    <Grid item xs={12}>
                        <Typography variant="h5" component="h3">
                            Write your new task
                        </Typography>
                    </Grid>

                    <Divider variant="middle" />

                    <Grid item xs={12} >
                        <TextField
                            id="task"
                            label="Task"               
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                              shrink: true,
                            }}
                        />
                    </Grid> 

                    <Grid item xs={12}>
                        <TextField
                            id="description"
                            label="Description"
                            fullWidth
                            rowsMax="10"
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid> 

                    <Grid item xs={12} alignItems="flex-end">
                        <Button variant="contained" color="primary" size="large">
                                Add
                        </Button>
                    </Grid> 

                </Grid>
            </Paper>
        </Container>
    )
}

export default Form