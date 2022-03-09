import React from "react";
import TileRow from "./TileRow";
import { MAP_WIDTH, TILE_ASPECT_RATIO } from "../../../constants"



import {
    grass,
    water,
  } from "./images"

function Map() {
    const yOffset = (100 / MAP_WIDTH) * (TILE_ASPECT_RATIO  / 3);


    let x = 0
    let y = 0
    return(<div className="map">
    
    <TileRow src={grass} rowX={0} rowY={0} rowZ={99}/>
    <TileRow src={grass} rowX={5.5} rowY={-7.25} rowZ={98}/>
    <TileRow src={grass} rowX={11} rowY={-14.2} rowZ={97}/>
    <TileRow src={grass} rowX={16.5} rowY={-21.25} rowZ={96}/>
    <TileRow src={grass} rowX={22} rowY={-28.35} rowZ={95}/>
    <TileRow src={grass} rowX={27.5} rowY={-35.4} rowZ={94}/>


    </div>)
    
}



export default React.memo(Map);