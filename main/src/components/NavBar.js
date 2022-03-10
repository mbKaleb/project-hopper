import React from 'react'
import { NavLink } from "react-router-dom"

const linkStyles = {
    display: "inline-block",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#FF9040",
    textDecoration: "none",
    color: "white",
}

function NavBar() {
  return (
    <div>
        <NavLink 
            className="nav-bar"
            to="/"
            exact
            style={linkStyles}
            activeStyle={{
                background: "#BE8BFF", 
                borderRadius: "25px",
            }}
        >Home
        </NavLink>
        <NavLink 
            className="nav-bar"
            to="/gamescreen"
            exact
            style={linkStyles}
            activeStyle={{
                background: "#BE8BFF", 
                borderRadius: "25px",
            }}
        >Play
        </NavLink>
        <NavLink 
            className="nav-bar"
            to="/badgescreen"
            exact
            style={linkStyles}
            activeStyle={{
                background: "#BE8BFF", 
                borderRadius: "25px",
            }}
        >Badges
        </NavLink>
        <NavLink 
            className="nav-bar"
            to="/leaderboardscreen"
            exact
            style={linkStyles}
            activeStyle={{
                bbackground: "#BE8BFF", 
                borderRadius: "25px",
            }}
        >Leaderboard
        </NavLink>
    </div>
  )
}

export default NavBar


