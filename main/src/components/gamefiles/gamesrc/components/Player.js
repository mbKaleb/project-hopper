import React, {useCallback} from 'react'
import { atom, useRecoilState, useRecoilValue} from "recoil";

import { useInterval } from "../hooks/useInterval"

function Player({src}) {
    const playerState = atom({
        key: 'playerState',
        default: {
            x: 1,
            y: 5,
            dead: false,
            id: Math.random()
        },
    })
    
    const player = useRecoilValue(playerState)

    let xVar = player.x
    let yVar = player.y

    //https://www.omnicalculator.com/math/linear-independence

    //translate {x, y} state into vector instructions and compute them as style instructions
    const constSlope = 7.225
    let xderiv = constSlope*((.75)*((xVar) + (yVar))) -3.3
    let yDeriv = constSlope*(yVar - xVar) +1.2
    

  return (
    <img
    src={src}
    alt="test"
    className={'player'}
    style={{left:`${xderiv}%`, top:`${yDeriv}%`, zIndex:1000}}/>
  )
}

export default Player