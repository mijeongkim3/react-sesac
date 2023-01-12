import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export default function PracticeTimmer() {
  const [render, setRender] = useState(false);
  const time = useRef(0); //0초부터 시작..

  useEffect(() => {
    const timer = setInterval(() => {
      time.current += 1;
      console.log(time.current);
    }, 1000); //1초에 한번

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>{time.current}</h1>
      <button onClick={() => setRender(!render)}>시간</button>
    </div>
  );
}
