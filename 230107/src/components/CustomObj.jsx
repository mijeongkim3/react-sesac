import React from 'react'

export default function CustomObj(props) {
  if(props.obj){   
    const { name, age, nickName } = props.obj;

  return (
    <div>
      <h1>이름: {name}</h1>
      <h2>나이: {age}</h2>
      <h2>별명: {nickName}</h2>
    </div>
  )

  
} else { 
  return(
    <div>데이터가 없습니다</div>
  )
}
  //   const { name, age, nickName } = props.obj;

  // return (
  //   <div>
  //     <h1>이름: {name}</h1>
  //     <h2>나이: {age}</h2>
  //     <h2>별명: {nickName}</h2>
  //   </div>
  // )
}

//callcustomobj랑연결//객체 프롭스 전달

//if랑 for문은 리턴안에서는 사용불가능함 jsx라서....그래서 삼항연산자씀
//아예 큰상황이바뀔대는 if문쓰고 return을 그안에 넣는식으로 해야댐 (지금처럼)...