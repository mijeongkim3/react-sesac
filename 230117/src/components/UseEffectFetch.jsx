import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import ProfileComponent from './ProfileComponent';

export default function UseEffectFetch() {
  const [dataArr, setDataArr] = useState([]); //usestate값안에 []설정해줘야 return안의 map함수 오류가안남

  async function fetchData() {
    const resFetch = await axios.get('http://localhost:4000');

    if (resFetch.status !== 200) return alert('통신 에러');

    const data = resFetch.data;
    setDataArr(data); //이거랑 위에있는 const[dataArr]의 dataarr와의 주소가 달라서 리랜더링됨
    console.log(data);
  }

  useEffect(() => {
    //함수로 만들고 useeffect에서 호출
    fetchData();
  }, []); //컴포넌트가 마운팅됏을때만 리랜더링

  //   useEffect(() => {
  //     fetchData();
  //   }, [fetchData]);처럼 사용가능함 이럴경우 fetchData를 다른부분에서 호출했을경우 다른데에서 호출했기때문에 값이변해서 ..리랜더링?..가능한데..뭐라공?

  return (
    <div>
      {dataArr.map((el, index) => {
        //fetchdata가실행되기전에 얘네가 먼저 한번 실행됨 얘넨 배열이라서 위에 스테이트 초기값에 빈 배열을 넣어줘야 에러가안남
        return (
          <ProfileComponent
            key={index}
            name={el.name}
            age={el.age}
            nickName={el.nickName}
          />
        );
      })}
    </div>
  );
}
