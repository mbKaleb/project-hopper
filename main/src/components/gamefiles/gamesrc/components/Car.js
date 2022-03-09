import React, {useCallback} from 'react'
import { atom, useRecoilState } from "recoil"
import {useinterval} from "../hooks/useInterval"

function Car({src}) {
  const carState = atom({
    key: 'carState',
    default: [{
        x: 2,
        y: 2,
    }]
})
const [car, setCar] = useRecoilState(carState)
  let xVar = player[0].x
  let yVar = player[0].y

//https://www.omnicalculator.com/math/linear-independence

//translate x, y state into vector instructions and compute them on a linear slope y=mx+b
let xderiv = (((xVar*.75 + yVar) - (.4)) *(8.5)) -6.2

let yDeriv = (((yVar - xVar*.75)-(.4)) * (10))

  


return (
  <img 
  src={src}
  alt="test"
  className={'player'} 
  style={{left:`${xderiv}%`, top:`${yDeriv}%`, zIndex:1000}}/>
  )
}

export default Car;