import React from 'react'

const Ex7 =(props)=>{
  return (
    <div>제가 좋아하는 음식은 <span style={{color:"red"}}>{props.food}</span>입니다.
    </div>
  )
}

Ex7.defaultProps = {
    food: '치킨'
}

//app.js에서  <Ex7 /> 이것만 치면 치킨으로 나옴 
export default Ex7;
