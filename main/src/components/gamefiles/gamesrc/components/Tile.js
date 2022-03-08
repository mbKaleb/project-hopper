import React from "react";

function Tile({ src, x, y, z }) {
  console.log(x)
  x = x * 5.42;
  y = y * 11.75;

  return (
    <img
      alt="map tile"
      className="tile"
      style={{ left: `${x}%`, top: `${y}%`, zIndex: z }}
      src={src}
    />
  );
}

export default Tile;
