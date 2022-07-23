import { useState, useEffect } from 'react'

import Inputs from './gamesrc/components/Inputs'
import World from './gamesrc/components/World'

import { baseURL } from '../constants';


import {
  frog,
  car,
} from "../Images.js"


function Game() {

  const [characterState, setCharacterState] = useState({
    id: 1,
    x:0,
    y:0,
    character: frog
  })

  const [carArrSet, setCarArrSet] = useState([])

  const hasReachedGoal = (player) => { //check if frog has x of a high enough number/specific number
    return player.x > 9;
  }

  const hasDied = (player) => {
    // console.log(player)
  }

  const getBadges = () => {
    fetch(`${baseURL}/badges/1`,{
      method: `PATCH`,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"status": "Unlocked"})})
  }


  useEffect(() => {
    getBadges()
  },[]);


  return (
    <>
      <div className='points-board'>{}</div>
      <World characterState={characterState} carArrSet={carArrSet} />
      <Inputs characterState={characterState}/>
    </>
  )
}
export default Game
