import React from 'react'

export default function Ex2() {
    const name = '코코';
    const animal = '강아지';
    const style = {
      textDecoration: 'underline',
      display: 'inline',
    };

  return (
    <div>
        
        <h2>
          제 반려 동물의 이름은 <div style={style}>{name}</div>입니다.
          <br />
          <div style={style}>{name}</div>는 <div style={style}>{animal}</div>
          입니다.
        </h2>
      

    </div>
  )
}
