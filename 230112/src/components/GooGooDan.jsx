import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';

export default function GooGooDan() {
  const [answer, setAnswer] = useState(-1);
  const [a, setA] = useState(createRandomNum());
  const [b, setB] = useState(createRandomNum());

  const RetryBtn = ({ isCorrect }) => (
    <button
      onClick={(e) => {
        setAnswer(-1);

        if (isCorrect === true) {
          setA(createRandomNum());
          setB(createRandomNum());
        }
      }}
    >
      다시풀기
    </button>
  );


  if (answer === -1) {
  return (
    <>
    <Problem a={a} b={b}></Problem>
    <InputAnswer setAnswer={setAnswer}></InputAnswer>
  </>
);
} else {
return (
  <GooGooDanResult
    a={a}
    b={b}
    answer={answer}
    RetryBtn={RetryBtn}
  ></GooGooDanResult>
);
}
}

function Problem({ a, b }) {
return (
<h2>
  {a} x {b} = ?
</h2>
);
}

function InputAnswer({ setAnswer }) {
const inputAnswerRef = useRef();
return (
<>
  <input type="number" ref={inputAnswerRef}></input>
  <button onClick={(e) => setAnswer(Number(inputAnswerRef.current.value))}>
    입력
  </button>
</>
);
}

function GooGooDanResult({ a, b, answer, RetryBtn }) {
const correct = checkAnswer(a, b, answer);

return (
<>
  <div>
    {a} x {b} = {answer} 은 {correct ? "정답" : "오답"}입니다
  </div>
  <RetryBtn isCorrect={correct}></RetryBtn>
</>
);
}

function createRandomNum() {
return Math.floor(Math.random() * 10);
}

function checkAnswer(a, b, answer) {
return a * b === answer;
}


