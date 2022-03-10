import React, { useEffect, useCallback, useRef } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";


function Inputs() {
  const playerState = atom({
    key: "playerState",
    default: {
        x: 1,
        y: 5,
        },
  });
  const [player, setPlayer] = useRecoilState(playerState)

  const controlHandler = useCallback((e) => {
    console.log("keypress", e);
    if (e.preventDefault) {
        e.preventDefault();
    }
    if(e.keyCode === 37) {
        //Left
        console.log(player)
        setPlayer({
        x: player.x,
        y: player.y-1,
        })
    }
    else if(e.keyCode === 39) {
        //Right
        console.log(player)
        setPlayer({
        x: player.x,
        y: player.y+1,
        })
    }
    else if(e.keyCode === 38) {
        //Up
        console.log(player)
        setPlayer({
        x: player.x+1,
        y: player.y,
        })
    }
    else if(e.keyCode === 40) {
        //Up
        console.log(player)
        setPlayer({
        x: player.x-1,
        y: player.y,
        })
    }
    
  })

  useEffect(() => {
    window.addEventListener("keydown", controlHandler);
    return () => {
      window.removeEventListener("keydown", controlHandler);
    };
  }, [controlHandler]);
    
    
    return (null);
  
  
}

export default Inputs;

