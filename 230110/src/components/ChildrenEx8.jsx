import React from 'react'

export default function ChildrenEx8(props) {
  const { title, author, price, type } = props.obj;

  return (
    <div>
      <h1>{title}</h1>
      <h2>저자: {author}</h2>
      <h2>판매가: {price}</h2>
      <h2>구분: {type}</h2>
    </div>
  )
}

  //이게자손