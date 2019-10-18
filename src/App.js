import React, { Component } from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Link } from 'react-router-dom'



/*Components*/
import ListTodo from './components/ListTodo'
import Form from './components/Form'

class App extends Component {


  

  render() {
    
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Route path='/' exact component={ListTodo} />
          <Route path='/new' component={Form} />
        </BrowserRouter>
      </div>
    )
  }

}

export default App