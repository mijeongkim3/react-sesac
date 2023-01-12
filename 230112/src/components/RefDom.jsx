import React from 'react'
import { useRef } from 'react';

export default function RefDom() {
    const orangeEl = useRef();
    const skyblueEl = useRef();
    const inputEl = useRef();

    const adjustCSS = ()=>{
        orangeEl.current.style.backgroundColor= 'orange';
        skyblueEl.current.style.backgroundColor= 'skyblue';
    };

    const clearInput = ()=>{
        inputEl.current.value ="";  //빈값으로 변경
    };

  return (
    <div>
        <h1 ref={orangeEl}>Orange</h1>
        <h1 ref={skyblueEl}>Skyblue</h1>
        <input ref={inputEl} />
        <br /><br />
        <button onClick = {adjustCSS}>CSS적용하기</button>
        <button onClick = {clearInput}>인풋 초기화 </button>
    </div>
  )
}
