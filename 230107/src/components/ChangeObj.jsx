import React, { useState } from 'react'

export default function ChangeObj(props) { //프롭스를 받아온다
    const [index,setIndex] = useState(0); //값이바뀌어야되니까 state선언 인덱스초기값이0임
 
    const obj = props.objArr[index];   //인덱스가0으로 초기화돼잇음 //객체형태로 프롭스 받기 
    
    function changeProfile(){
        if(index === props.objArr.length -1) { //끝의값이면  렝스가 3이고 -1이면 2. 인덱스2는 크롱 
            setIndex(0);                  //index=0;으로하면 리랜더링이안됨. 어떤값이바뀌엇을때 리랜더링이 돼야하는지 기억하고 그값을 스테이트로 설정 
      } else{
            setIndex(index+1);
      }
}
  return (
    <div>
      <h1>이름: {obj.name}</h1>
      <h2>나이: {obj.age}</h2>
      <h2>별명: {obj.nickName}</h2>
      <button onClick={changeProfile}>프로필 변경</button>
      
    </div>
  )
}


//  <button onClick={()=> {
        //if()여기에 걸어도됨 
    //     setIndex(index+1)
    //  }>프로필 변경</button>
