import React, { useEffect } from 'react'
import Inputs from './gamesrc/components/Inputs'
import World from './gamesrc/components/World'
import { baseURL } from '../constants';




function Game() {

  useEffect(() => {
    fetch(`${baseURL}/badges/1`,{
      method: `PATCH`,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"status": "unlocked"})})
  },[]);


  return (
    <>
      <World />
      <Inputs />
    </>
  )
}
export default Game
/*
fetch(`${baseURL}/badges`,{
      method: `POST`, 
      header: {'Content-Type': 'application/json'},
      body: JSON.stringify(),
    })
  },[]);*/
