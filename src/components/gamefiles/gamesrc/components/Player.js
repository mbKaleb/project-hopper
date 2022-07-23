import { useState, useCallback} from 'react'
import { useInterval } from "../hooks/useInterval"

export default function Player({characterState}) {
  


    let xVar = characterState.x
    let yVar = characterState.y

    //https://www.omnicalculator.com/math/linear-independence

    //translate {x, y} state into vector instructions and compute them as style instructions
    const constSlope = 7.225
    let xderiv = constSlope*((.75)*((xVar) + (yVar))) -3.3
    let yDeriv = constSlope*(yVar - xVar) +1.2
    

  return (
    <img
    src={characterState.character}
    alt="character"
    className={'player'}
    style={{left:`${xderiv}%`, top:`${yDeriv}%`, zIndex:1000}}/>
  )
}
