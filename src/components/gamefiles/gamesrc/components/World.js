import { useState, useEffect } from 'react'
import Map from './Map'
import Player from './Player'
import Car from './Car'

import {
  frog,
  car,
} from "./images"


// Inside world we have the map, player, and moving objects


function World({ characterState, carArrSet }) {
  return (
    <div className="world">
    <Map />
    {carArrSet?.map((car) => <Car carInstance={car}/>)}
    <Player characterState={characterState}/>
    </div>
  )
}

export default World