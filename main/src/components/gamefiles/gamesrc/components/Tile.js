import React from "react";

function Tile({ src, x, y}) {
  
  x= x *5.4
  y = y *12



  return (
    <img
      alt="map tile"
      className="tile"
      style={{ left: `${x}%`, top: `${y}%`}}
      src={src}
    />
  );
}

export default Tile;
