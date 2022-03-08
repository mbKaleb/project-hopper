import React, { useState, useEffect } from 'react';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


import { BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';

import Game from "./components/gamefiles/Game"


function App() {

  return (

    <RecoilRoot>
      <Game />
    </RecoilRoot>

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

