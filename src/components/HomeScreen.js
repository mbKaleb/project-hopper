import React from 'react'
import { Link } from 'react-router-dom'

function HomeScreen() {
  return (
    <div className="home">
      <h1>Project Hopper</h1>
      <div className="button-area">
        <Link className="button" id="homeBtn" to="/" >Home</Link>
        <Link className="button" id="gameBtn" to="/gamescreen">Play</Link>
        <Link className="button" id="badgeBtn" to="/badgescreen">Badges</Link>
        <Link className="button" id="leaderBtn" to="/leaderboardscreen">Leaderboard</Link>
      </div>
      
    </div>
  )
}

export default HomeScreen