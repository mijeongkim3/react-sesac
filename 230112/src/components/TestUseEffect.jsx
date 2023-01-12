import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('입력 하세요!');
  const inputValue = useRef();

  const onButtonClick = () => {
    console.log('버튼 클릭');
    setCount(count + 1);
  };
  const onInputChange = () => {
    console.log('키 입력');
    setText(inputValue.current.value);
  };
  useEffect(() => {
    console.log('랜더링 될 때 마다 실행'); //이렇게 익명함수만 전달하면 마운트,업데이트,될때마다 실행됨  버튼클릭하면 업데이트되니까 또 실행됨
  }); //마운트,업데이트될대 두번 실행

  useEffect(() => {
    console.log('마운트 될때만실행');
  }, []); //배열 내부에 있는 값이 변경될때만 리랜더링된느거임  빈 배열을 주면 마운트 될때만 실행된다. 의존성 배열.
  //컴포넌트가 첨 화면에 등장할때만 실행

  //   useEffect(() => {
  //     console.log('버튼 클릭시에만 실행');
  //   }, [count]); //버튼클릭시에 카운트가변화됨. 맨첨에 리랜더링ㄹ되고 그담부터는 카운트값 업데이트될대만 실행됨 //마운트될때, 내부값이변할때 두번실행

  useEffect(() => {
    console.log('버튼 클릭시에만 실행');
  }, [count, text]); //버튼클릭시에 카운트가변화됨. 맨첨에 리랜더링ㄹ되고 그담부터는 카운트값 업데이트될대만 실행됨

  useEffect(() => {
    console.log('키 입력시에만 실행');
  }, [text]); //

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onButtonClick}>+1 버튼</button>
      <br />
      <h1>{text}</h1>
      <input ref={inputValue} onChange={onInputChange} />
    </div>
  );
}
