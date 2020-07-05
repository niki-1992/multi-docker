import React, { Component } from 'react'
import Fib from './components/Fib'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import OtherPage from './components/OtherPage'

class App extends Component {
  render() {
    return (
     <Router>
       <Switch>
        <Route exact path='/' component={Fib} />
        <Route exact path='/other' component={OtherPage} />
       </Switch>
     </Router>
    )
  }
}

export default App;
