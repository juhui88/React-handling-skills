import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import About from './About'
import Home from './Home'

const App = () => {
  return (
    <div>
      <Route path="/" component={Home} exact={true}/>
      <Route path="/about" component={About} />
    </div>
  )
}

export default App;