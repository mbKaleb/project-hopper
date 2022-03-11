import React, {useCallback, useEffect, useRef} from 'react'
import { atom, useRecoilState, useRecoilValue} from "recoil";
import { useInterval } from "../hooks/useInterval"

function Car({src}) {
    const carState = atom({
        key: 'carState',
        default: {
            x: 3,
            y: 9,
            id: Math.random()
        },
    })
    const [car, setCar] = useRecoilState(carState)
     //useRef to survive re-render

    // setTimeout(() => {setCar({...car,})}, 1000);



    let xVar = car.x
    let yVar = car.y

    //https://www.omnicalculator.com/math/linear-independence

    //translate {x, y} state into vector instructions and compute them as style instructions
    const constSlope = 7.225
    let xderiv = constSlope*((.75)*((xVar) + (yVar))) -2.5
    let yDeriv = constSlope*(yVar - xVar) +7

    const moveCar = useCallback(() => {
        if(car.y > -3){
            let carCopy =  {
                ...car,
                y: parseInt(car.y) -1,
            };
            setCar(carCopy)
        }else {
            let carCopy =  {
                ...car,
                y: 15,

            };
            setCar(carCopy)
        }

    },[car, setCar])



useInterval(() => {
    moveCar()
}, 150)



  return (
    <img
    src={src}
    alt="test"
    className={'car'}
    style={{left:`${xderiv}%`, top:`${yDeriv}%`, zIndex:1001, opacity: car.y < 0 || car.y > 9 ? 0 : 1,}}/>
  )
}

export default Car

//https://usehooks-ts.com/react-hook/use-interval