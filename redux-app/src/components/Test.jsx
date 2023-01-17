import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Test() {
  //index.js에서 값받아오는법
  const weight = useSelector((state) => state); //state값을 리턴해준다 그럼그게 weihgt로 들어간다. 이 state는 index.js에 있는 웨잇트가 스테이트에들어갓다가 리턴되는구조라서 여기에 온다
  const dispatch = useDispatch();

  return (
    <>
      <h1>당신의 몸무게는 {weight}입니다 </h1>
      <button
        onClick={() => {
          dispatch({ type: '증가' }); //이 문자열이 우리가 index.js에서 설정한 action.type===키값 의 키값이랑 같아야된다
        }}
      >
        살 찌기
      </button>
      <button
        onClick={() => {
          dispatch({ type: '감소' });
        }}
      >
        살 빼기
      </button>
    </>
  );
}
// weihgt는 index.js에 있는 reducer에서(?)있는 곳으로부터왔다/////
