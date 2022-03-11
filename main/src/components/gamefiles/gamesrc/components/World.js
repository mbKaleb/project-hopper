import React from 'react'
import Map from './Map'
import Player from './Player'
import Car from './Car'

import {
  frog,
  car,
} from "./images"


// Inside world we have the map, player, and moving objects


function World() {
  // const [playerSkin, setPlayerSkin] = useState()

  return (
    <div className="world">
    <Map />
    <Player src={frog} x={1} y={1}/>
    <Car src={car} x={1} y={9} />
    
    
    </div>
  )
}

export default World