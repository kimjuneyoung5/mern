import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import Display from './components/Display';
import Form from './components/Form';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Form />
          <Switch>
            <Route path = "/:varName/:num">
              <Display />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
