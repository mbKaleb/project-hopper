import React, { useState } from 'react';
import {Switch, Route} from "react-router-dom";


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;



/*

function App(){
  const [page, setPage] = useState("/defaultpage on refresh")


  return (
    <div>
      <NavBar onChangePage={setPage} />
      <Switch>
      <Route path = "/home">
        <Home />
      </Route>

      <Route path = "/about">
        <About />
      </Route>

      <Route path = "/projects">
        <Projects />
      </Route>

      </Switch>
    </div>
    );
}

export default App;

*/

