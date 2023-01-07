import React from 'react'
import ListChild from './ListChild'
import Modal from './Modal'

export default function List () {
  const dataArr = [
    {
        title:"리액트 공부하기",
        content: "state활용법 익히기"
    },
    {   title:"코테 문제 풀기",
        content: "Lv0 정복"
    },
    {   title:"변경",
    content: "확인"
}
  ]    

  return (
    <div>
      <h1>오늘 해야할 일</h1>
      <hr />
      <Modal />
      {dataArr.map((el, index)=> {
        return (
            <div key={index}>
                <h2>{el.title}</h2>
                <p>{el.content}</p>
                <hr/>
                </div>
        )
      })}
      <Modal />
    </div>
  )
}
