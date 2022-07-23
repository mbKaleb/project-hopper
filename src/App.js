import { useState, useEffect } from 'react';
import { Switch, Route} from "react-router-dom";

import NavBar from './components/NavBar'
import BadgeScreen from './components/BadgeScreen'
import LeaderboardScreen from './components/LeaderboardScreen'
import HomeScreen from './components/HomeScreen'
import Game from "./components/gamefiles/Game"

import './App.css';


export default function App() {
  const baseUrl = "http://localhost:3000"
  const [badges, setBadges] = useState([])
  const [scores, setScores] = useState([])
  
  useEffect(() => {
    fetch(baseUrl + '/badges')
    .then(r => r.json())
    .then(setBadges)
  }, [])

  useEffect(() => {
    fetch(baseUrl + '/leaderboard')
    .then(r => r.json())
    .then(setScores)
  }, [])

  

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route path = "/badgescreen">
          <BadgeScreen badges={badges}/>
        </Route>
        <Route path = "/leaderboardscreen">
          <LeaderboardScreen scores={scores} setScores={setScores}/>
        </Route>
        <Route path="/gamescreen">
          <Game />
         </Route>
      </Switch>
    </div>
    

  );
}