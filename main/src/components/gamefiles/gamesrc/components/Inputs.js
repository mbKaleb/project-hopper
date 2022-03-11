import React, { useEffect, useCallback, useRef } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { frog } from "./images";


function Inputs() {

  //player location data in and atom//----->
  const playerState = atom({
    key: "playerState",
    default: {
        x: 1,
        y: 5,
        id: Math.random()
        },
  }); const [player, setPlayer] = useRecoilState(playerState)
  
  const allowInputState = atom({
    key: "allowInputState",
    default: true,
  }); const [allowInput, setAllowInput] = useRecoilState(allowInputState)

  // const gameOver = useRecoilValue(atom({key: "gameOverState"}))//we use value because this value will not be change on this file


  //timer state to allow input 
  let timer = useRef(false); //useRef to survive re-render
  useEffect(() => {
    return () => {
      clearTimeout(timer.current) //clear time on re-render of timer
    };
  }, [timer]);

  


//useCallback to not reinstanchiate on each render
  const controlHandler = useCallback((e) => {
    console.log("keystroke");
    if(e.preventDefault) {e.preventDefault()}//Keep some keys from reloading the page


    if (!allowInput) {return}
    if (null) {return}

    setAllowInput(false)
    timer.current = setTimeout(() => {
      setAllowInput(true);
    }, 500);
    
      if(e.keyCode === 37 && player.y > 1) {
        //Left
        console.log(player)
        setPlayer({
        x: player.x,
        y: player.y-1,
        })}

    else if(e.keyCode === 39 && player.y < 9) {
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
    else if(e.keyCode === 40 && player.x >1) {
        //Down
        console.log(player)
        setPlayer({
        x: player.x-1,
        y: player.y,
        })
      }


      setAllowInput(false)
      timer.current = setTimeout(() => {
        setAllowInput(true);
      }, 300)
      setAllowInput(false)
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

