import React from 'react'
import CustomObj from './CustomObj'

export default function CallCustomObj() {
    const pororoObj ={
        name: '뽀로로',
        age: '5',
        nickName: '사고뭉치'
    }

  return (
    <div>
        <CustomObj obj={pororoObj}/>
    </div>
  )
}
//객체전달하는 방법 
//만약에 여기서  <CustomObj obj={pororoObj}/>에서 <CustomObj/>라고만 쓰면 데어티가없습니다 라고 뜰거임