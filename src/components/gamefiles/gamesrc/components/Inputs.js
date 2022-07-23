import React, { useEffect, useCallback, useRef } from "react";


function Inputs({characterState}) {
  let {id, x, y, character, allowInput } = characterState
 
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

    allowInput = false
    timer.current = setTimeout(() => {
      allowInput = true
    }, 500);
      if(e.keyCode === 37 && y > 1) {
        //Left
      y--
      }
    else if(e.keyCode === 39 && y < 9) {
        //Right
        y++
    }
    else if(e.keyCode === 38) {
      x++
    }
    else if(e.keyCode === 40 && x >1) {
      x--
    }

      allowInput = false
      timer.current = setTimeout(() => {
        allowInput = true
      }, 300)
      allowInput = false
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

