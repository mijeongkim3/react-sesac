import React, { useState } from "react";

export default function ArrState() {
  const [state, setState] = useState([0]); //값이 0이들어잇는거
  console.log(state);

  return (
    <div>
      {state[0]}
      <br />
      <button
        onClick={() => {
          //   //   state[0] = 1;
          //   // state([0]);
          //   setState([1]); //메모리주소를 바꿔준거임.그래서 스테이트가다르니까변경이 일어남
          //   //   setState(state);
          //   console.log(state);

          state[0] = 1;
          const copyArr = [...state];
          setState(copyArr);
          console.log(state);
        }}
      >
        +1
      </button>
    </div>
  );
}

//8번재줄 스테이트의 0번째인덱스 출력하라는뜻
