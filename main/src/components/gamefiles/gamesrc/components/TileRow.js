import React from 'react'
import Tile from './Tile';
import { MAP_WIDTH, TILE_ASPECT_RATIO } from '../../../constants';




function TileRow({src, rowX, rowY, rowZ}) {

  //fills tileRowArray with a string of the source prop, 9 times by default, so [grass, grass, grass, grass etc.]
  let tileRowArray = Array(MAP_WIDTH).fill(src)
  rowY = rowY * -7.22;
  rowX = rowX * 5.5;
  
  
  let i = 0;
  return (
    <div
    className="tile-row"
    style={{ left:`${rowX}%`, top:`${rowY}%`, zIndex:`${rowZ}`}}
    >{
      tileRowArray.map((src) => {
        ++i
        return (<Tile src={src} x={i} y={i}/>)
      })
    }
  </div>
)
}

export default TileRow
