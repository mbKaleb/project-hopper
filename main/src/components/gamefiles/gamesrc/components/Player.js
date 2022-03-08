import React from 'react'
import { atom, useRecoilState} from "recoil";



function Player({src}) {
    const playerState = atom({
        key: 'playerState',
        default: [{
            x: 0,
            y: 6,
        }]
    })
    
    const [player, setPlayer] = useRecoilState(playerState)

  return (
    <img src={src} className={'player'} style={{left:`${x}`, top:`${y}`}}/>
  )
}

export default Player