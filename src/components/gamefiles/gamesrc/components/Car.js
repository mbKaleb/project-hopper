import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useInterval } from '../hooks/useInterval';

export default function Car({ carInstance }) {
  let { id, x, y, speed, src } = carInstance;
  const [yValue, setyValue] = useState(y);

  // Translate {x, y} state into vector instructions and compute them as style instructions.   https://www.omnicalculator.com/math/linear-independence
  const constSlope = 7.225;
  let xderiv = constSlope * (0.75 * (x + yValue)) - 2.5;
  let yDeriv = constSlope * (yValue - x) + 7;

  const moveCar = useCallback(() => {
    if (yValue > -3) {
      setyValue((yValue) => yValue - 1);
    } else {
      setyValue(13);
    }
  }, [yValue]);

  useInterval(() => {
    moveCar();
    carInstance.y = yValue;
  }, speed);

  return (
    <img
      src={src}
      alt="test"
      className={'car'}
      style={{
        left: `${xderiv}%`,
        top: `${yDeriv}%`,
        zIndex: 1001,
        opacity: yValue < 0 || yValue > 9 ? 0 : 1,
      }}
    />
  );
}