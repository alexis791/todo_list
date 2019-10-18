import React from 'react'
import Container from '@material-ui/core/Container'
import Task from './Task'
import JSON from '../db'


const ListTodo = () => {
    console.log(JSON)
    return (
        <Container fixed>
             {
               JSON.map( (item) => {
                 return <Task task={item}/>
               } )
             }
        </Container>
    )
}

export default ListTodo