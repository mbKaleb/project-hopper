import React, { useEffect } from 'react'
import {atom, useRecoilState, useRecoilValue} from "recoil";
import Inputs from './gamesrc/components/Inputs'
import World from './gamesrc/components/World'
import { baseURL } from '../constants';
import { frog } from './gamesrc/components/images';




function Game() {

  //player states
  const playerState = atom({key: "playerState", default: {}})
  const [player, setPlayer] = useRecoilState(playerState)
  

  // const [gameOver, setGameOver] = useRecoilState(
  //   atom({ key: "gameOverState", default: false})
  // )

  //End
  const hasReachedGoal = (player) => { //check if frog has x of a high enough number/specific number
    return player.x > 9;
  }

    useEffect(() => {
      if(hasReachedGoal(player)){
        setPlayer({...player, x:1, y:4})
      }
    }, [player])
  
  useEffect(() => {
    fetch(`${baseURL}/badges/1`,{
      method: `PATCH`,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"status": "Unlocked"})})
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
fetch(`${baseURL}/leaderboard`,{
      method: `POST`, 
      header: {'Content-Type': 'application/json'},
      body: JSON.stringify(),
    })
  },[]);*/
