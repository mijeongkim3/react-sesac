import React from 'react'

export default function CustomList(props) {
  return (
    <ul>
        {props.arr.map((el)=> <li key={el}>{el}</li>)}
        
    </ul>
  )
}

//callcustomlist에서 불러온다 배열을 전달 !
//자손