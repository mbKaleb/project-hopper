import { useState, useEffect } from 'react'

import Inputs from './gamesrc/components/Inputs'
import World from './gamesrc/components/World'

import { baseURL } from '../constants';

import { grass, frog, car  } from './gamesrc/components/images';

function Game() {

  const [characterState, setCharacterState] = useState({
    id: 1,
    x:1,
    y:5,
    character: frog,
    allowInput:false
  })
  const carInstance = (x,y=9, speed) => {return({id:{x,y},x,y,speed,src:car})}
  const [carArrSet, setCarArrSet] = useState([
    carInstance(3,10,140),
    carInstance(5,3,170),
    carInstance(7,8,130)
  ]);

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
    characterState.allowInput = true
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
