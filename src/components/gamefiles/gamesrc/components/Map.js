import React from "react";
import TileRow from "./TileRow";
import { MAP_WIDTH, TILE_ASPECT_RATIO } from "../../../constants"

import {
    grass,
    water,
    road,
    finish,
  } from "./images"

function Map() {
    const yOffset = (100 / MAP_WIDTH) * (TILE_ASPECT_RATIO  / 3);

    let x = 0
    let y = 0
    return(<div className="map">
      <TileRow src={grass} rowX={0} rowY={0} rowZ={99}/>
      <TileRow src={grass} rowX={1} rowY={1} rowZ={98}/>
      <TileRow src={road} rowX={2} rowY={2} rowZ={97}/>
      <TileRow src={grass} rowX={3} rowY={3} rowZ={95}/>
      <TileRow src={road} rowX={4} rowY={4} rowZ={94}/>
      <TileRow src={grass} rowX={5} rowY={5} rowZ={93}/>
      <TileRow src={road} rowX={6} rowY={6} rowZ={91}/>
      <TileRow src={grass} rowX={7} rowY={7} rowZ={90}/>
      <TileRow src={finish} rowX={8} rowY={8} rowZ={89}/>
    </div>)
    
}



export default React.memo(Map);