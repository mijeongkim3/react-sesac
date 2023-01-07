import React from 'react'
import ExListChild from './ExListChild';

export default function ExList() {
    const items = [
        {
            item:"PS5",
            price: "685000원",
        },
        {
            item:"에어프라이어",
            price: "50000원",
        },
        {
            item:"사세 치킨윙",
            price: "11500원",
        }
       
      ]

  return (
    <div>
        {items.map((el, index)=> {
        return <ExListChild item={el.item} price={el.price} key={index} />
      })}
    </div>
  )
}
