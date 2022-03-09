import React from 'react'
import Map from './Map'
import Player from './Player'

import {
  frog
} from "./images"


// Inside world we have the map, player, and moving objects


function World() {
  // const [playerSkin, setPlayerSkin] = useState()

  return (
    <div className="world">
    <Map />
    <Player src={frog} x={0} y={6}/>
    
    </div>
  )
}

export default World