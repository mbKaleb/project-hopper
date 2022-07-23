import { useEffect, useCallback, useRef } from 'react';

export default function Inputs({ characterState, setCharacterState }) {
  const x = useRef(characterState.x);
  const y = useRef(characterState.y);
  const allowInput = useRef(characterState.allowInput);

  // const gameOver = useRecoilValue(atom({key: "gameOverState"}))//we use value because this value will not be change on this file

  //timer state to allow input
  let timer = useRef(false); //useRef to survive re-render
  useEffect(() => {
    return () => {
      clearTimeout(timer.current); //clear time on re-render of timer
    };
  }, [timer]);

  //useCallback to not reinstanchiate on each render
  const controlHandler = useCallback((e) => {
    if (e.preventDefault) {
      e.preventDefault();
    } //Keep some keys from reloading the page

    console.log(e)

    if (!allowInput) {
      return;
    }
    if (null) {
      return;
    }
    allowInput.current = false;
    timer.current = setTimeout(() => {
      allowInput.current = true;
    }, 1200);
    console.log(x,y)
    if (e.key === 'ArrowUp' && (characterState.x < 9)) {
      console.log('forward')
      setCharacterState((characterState) => ({...characterState, x:characterState.x+1}))
    }
    if (e.key === 'ArrowLeft' && (characterState.y > 1)){
      setCharacterState((characterState) => ({...characterState, y:characterState.y-1}))
    }
    if (e.key === 'ArrowRight' && (characterState.y < 9)){
      setCharacterState((characterState) => ({...characterState, y:characterState.y+1}))
    }
    if (e.key === 'ArrowDown' && (characterState.x > 1)){
      setCharacterState((characterState) => ({...characterState, x:characterState.x-1}))
    }

    allowInput.current = false;
    timer.current = setTimeout(() => {
      allowInput.current = true;
    }, 1200);
    allowInput.current = false;
  },[characterState.x, characterState.y, setCharacterState]);

  useEffect(() => {
    window.addEventListener('keydown', controlHandler);
    return () => {
      window.removeEventListener('keydown', controlHandler);
    };
  }, [controlHandler]);
  return null;
}