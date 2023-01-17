import React from 'react';
// import dogImg from '../../public/images/바다.jpg'; 이걸로안해도됨
import dogImg from '../바다.jpg';
export default function Image() {
  return (
    <>
      <img src="/images/바다.jpg" alt="강아지" />;
      <img src={dogImg} alt="강아지" />;
    </>
  );
}

//엥 왜안됨?나중에 수업코드보기??되긴하는데 암튼 다시보기
