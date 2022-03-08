import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';

import HomeScreen from './components/HomeScreen';
import BadgeScreen from './components/BadgeScreen';
import LeaderboardScreen from './components/LeaderboardScreen';
import Game from './components/Game';


function App() {
  const [badges, setBadges] = useState([])

  return (
    <div>
    <Game />
    <BadgeScreen badges={badges}/>
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

