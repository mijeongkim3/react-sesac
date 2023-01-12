import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

export default function TestRef() {
  const [text, setText] = useState('안녕하세요') ;

  const inputValue = useRef();

  function onChangeText() {
    console.log(inputValue);

    // const inputText = e.target.value; //target으로 돔의 특정부분에 접근가능
    setText(inputValue.current.value);

  }
  return (
    <div>
        <h1>{text}</h1>
        <input 
          ref = {inputValue}
          onChange = {()=> {
            onChangeText();
            }}/>
    </div>
  )
}
