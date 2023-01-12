import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export default function Comparing() {
  console.log(Math.random());
  const [countState, setCountstate] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const [render, setRender] = useState(false);

  const countUpState = () => {
    setCountstate(countState + 1);
    console.log('state : ', countState);
  };
  const countUpRef = () => {
    countRef.current = countRef.current + 1; //countRef.current +=1 ; 이랑같은거임
    console.log('Ref:', countRef.current);
  };

  const countUpVar = () => {
    countVar += 1;
    console.log('Variable : ', countVar);
  };

  const reRender = () => {
    setRender(!render); //컴포넌트 리랜더링
  };
  return (
    <div>
      <h1>State: {countState} </h1>
      <h1>Ref: {countRef.current}</h1>
      <h1>Variable : {countVar} </h1>
      <br />
      <button onClick={countUpState}>State UP!</button>
      <button onClick={countUpRef}>Ref UP!</button>
      <button onClick={countUpVar}>Variable UP!</button>
      <button onClick={reRender}>랜더링!</button>
    </div>
  );
}
//악 이거 나중에 수업코드 다시 비교하기//틀림
