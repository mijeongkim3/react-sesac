import React from 'react'
import ChildrenEx8 from './ChildrenEx8'
import book from '../book.jpg';

export default function Ex8() {
    const bookObj ={
        title: '나의 하루는 4시 40분에 시작된다',
        author: '김유진',
        price: '13500원',
        type: '자기계발서'
    }
     const style = {
        backgroundColor: "yellow",
        
     }
  return (
    <div style= {style}>
        <div className = "head" >이번주 베스트셀러</div>
        <img src={book} alt="이미지" />
        <ChildrenEx8 obj={bookObj}/>
    </div>
  )
}

//app.js에서 ex8불러오면됨 이게부모