import { useState, useEffect } from 'react'

import Inputs from './gamesrc/components/Inputs'
import World from './gamesrc/components/World'

import { useInterval } from './gamesrc/hooks/useInterval';

import { baseURL } from '../constants';

import { grass, frog, car  } from './gamesrc/components/images';

function Game() {
  const defaultPlayerState = {
    id: 1,
    x:1,
    y:5,
    character: frog,
    allowInput:true
  }
  const [characterState, setCharacterState] = useState({...defaultPlayerState})
  const carInstance = (x,y=9, speed) => {return({id:{x,y},x,y,speed,src:car})}
  const [carArrSet, setCarArrSet] = useState([
    carInstance(3,10,140),
    carInstance(5,3,170),
    carInstance(7,8,130)
  ]);

  const hasReachedGoal = (player=characterState) => {
    return (player.x === 9);
  }

  const hasHitByCar = (player=characterState) => {
    let killedByCar = carArrSet.filter((car)=> (car.x === player.x && car.y === player.y))
    return !!(killedByCar[0])
  }

  const getBadges = () => {
    fetch(`${baseURL}/badges/1`,{
      method: `PATCH`,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"status": "Unlocked"})})
  }

  useInterval(()=>{
    if (hasReachedGoal()){setCharacterState(defaultPlayerState)}
    if (hasHitByCar()){setCharacterState(defaultPlayerState)}
  }, 100)




  useEffect(() => {
    getBadges()
    characterState.allowInput = true
  },[]);


  return (
    <>
      <div className='points-board'>{}</div>
      <World characterState={characterState} carArrSet={carArrSet} />
      <Inputs characterState={characterState} setCharacterState={setCharacterState}/>
    </>
  )
}
export default Game
