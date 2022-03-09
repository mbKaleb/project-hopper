import React, { useEffect, useCallback, useRef } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";


function Inputs() {
  const playerState = atom({
    key: "playerState",
    default: {
        x: 1,
        y: 1,
        },
  });
  const [player, setPlayer] = useRecoilState(playerState)

  const keyPressHandler = useCallback((e) => {
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
    window.addEventListener("keydown", keyPressHandler);
    return () => {
      window.removeEventListener("keydown", keyPressHandler);
    };
  }, [keyPressHandler]);
    
    
    return (null);
  
  
}

// setCharacter({
//     x: 
// })
  
//   const [allowInput, setAllowInput] = useRecoilState(allowInputState);

//   let timer = useRef(false);
//   useEffect(() => {
//     return () => clearTimeout(timer.current);
//   }, [timer]);

//   const keyPressHandler = useCallback(
//     (e) => {
//       console.log("keypress");
//       if (e.preventDefault) {
//         e.preventDefault();
//       }
//       if (gameOver) {
//         return;
//       }
//       if (!allowInput) {
//         return;
//       }
//       setAllowInput(false);
//       timer.current = setTimeout(() => {
//         setAllowInput(true);
//       }, 350);
//       if (e.keyCode === 37) {
//         // left
//         setCharacter({
//           x: character.x > 0 ? character.x - 1 : 0,
//           y: character.y,
//           dir: "left",
//         });
//       } else if (e.keyCode === 39) {
//         // right
//         setCharacter({
//           x: character.x < 8 ? character.x + 1 : 8,
//           y: character.y,
//           dir: "right",
//         });
//       } else if (e.keyCode === 38) {
//         // up
//         setCharacter({
//           x: character.x,
//           y: character.y > -1 ? character.y - 1 : 0,
//           dir: "up",
//         });
//       } else if (e.keyCode === 40) {
//         // down
//         setCharacter({
//           x: character.x,
//           y: character.y < 8 ? .y + 1 : 8,
//           dir: "down",
//         });
//       }
//     },
//     [character, setCharacter, gameOver, allowInput, setAllowInput]
//   );

//   useEffect(() => {
//     window.addEventListener("keydown", keyPressHandler);
//     return () => {
//       window.removeEventListener("keydown", keyPressHandler);
//     };
//   }, [keyPressHandler]);

//   // useEffect(() => {
//   //   const timer = setTimeout(() => {
//   //     setInputBlocked(false);
//   //   }, 250);
//   //   return () => {
//   //     setInputBlocked(false);
//   //     clearInterval(timer);
//   //   };
//   // }, [inputBlockedState, setInputBlocked]);

//   return (
//     <div className="buttons w-100">
//       <div className="flex justify-between">
//         <div
//           onClick={() => {
//             keyPressHandler({ keyCode: 37 });
//           }}
//           className="button"
//         >
//           LEFT
//         </div>
//         <div
//           onClick={() => {
//             keyPressHandler({ keyCode: 38 });
//           }}
//           className="button"
//         >
//           UP
//         </div>
//       </div>
//       <div className="flex justify-between">
//         <div
//           onClick={() => {
//             keyPressHandler({ keyCode: 40 });
//           }}
//           className="button"
//         >
//           DOWN
//         </div>
//         <div
//           onClick={() => {
//             keyPressHandler({ keyCode: 39 });
//           }}
//           className="button"
//         >
//           RIGHT
//         </div>
//       </div>
//     </div>
//   );
// }

export default Inputs;

