import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

export default function RandomQuiz() {
  const firstRandomNumber = Math.floor(Math.random() * 10);
  //math.random은 소수점이나와서 floor써서 소수점버림 매스랜덤*10까지하면 9까지나옴
  const secondRandomNumber = Math.floor(Math.random() * 10);
  const arithmeticArr = ['+', '-', 'x'];
  //arithmetic이 0이나오면 더하기, 1나오면 - 2이면x식으로 배열로
  const arithmetic = Math.floor(Math.random() * 3); //이걸하면 0,1,2,3까지나오는데 2.99로 하면 2까지 나옴 근데 *2하면 2가 나올 확률이 되게 적어져서..2.99써주는게...

  let answer = 0; //상황에따라서 값이 업뎃돼야돼서 const아니고 let  그냥 초기값을 0으로 해놓은거임 다른 숫자도 되긴하고 셋팅안해도 되긴하는데

  if (arithmetic === 0) {
    answer = firstRandomNumber + secondRandomNumber;
  } else if (arithmetic === 1) {
    answer = firstRandomNumber - secondRandomNumber;
  } else {
    answer = firstRandomNumber * secondRandomNumber;
  }

  const answerInput = useRef();
  const [again, setAgain] = useState(false); //가짜로 리랜더링 시켜주는 함수 이전값이 뭐엿든지 리랜더링됨

  const checkAnswer = () => {
    if (answer === Number(answerInput.current.value)) {
      //number는 값을 숫자로 형변환시켜줌
      alert('정답입니다');
      answerInput.current.value = '';
      answerInput.current.focus();
      setAgain(!again); //again이 false였으면 트루로만들고 트루면 false로 만들어라 라는..리랜더링
    } else {
      alert('틀렸습니다. 다시 입력해 주세요');
      answerInput.current.value = '';
      answerInput.current.focus();
    }
  };
  return (
    <div>
      <h1>
        {firstRandomNumber} {arithmeticArr[arithmetic]} {secondRandomNumber}
      </h1>
      <input ref={answerInput} />
      <button onClick={checkAnswer}>정답 제출 </button>
    </div>
  );
}
