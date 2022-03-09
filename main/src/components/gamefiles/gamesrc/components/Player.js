import React, {useCallback} from 'react'
import { atom, useRecoilState, useRecoilValue} from "recoil";

import { useInterval } from "../hooks/useInterval"

function Player({src}) {
    const playerState = atom({
        key: 'playerState',
        default: {
            x: 1,
            y: 1,
        },
    })
    const player = useRecoilValue(playerState)

    let xVar = player.x
    let yVar = player.y

    //https://www.omnicalculator.com/math/linear-independence
    //translate x, y state into vector instructions and compute them on a linear slope y=mx+b
    let xderiv = 7.14*((.753)*((xVar) + (yVar))) -2
 
    let yDeriv = 7.14*(yVar - xVar) +2//y+1 = yderiv+1/2
    
    console.log(yDeriv)

  return (
    <img
    src={src}
    alt="test"
    className={'player'}
    style={{left:`${xderiv}%`, top:`${yDeriv}%`, zIndex:1000}}/>
  )
}

export default Player