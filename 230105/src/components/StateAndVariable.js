import React, { useState } from "react";

export default function StateAndVariable() {
  const [state, setState] = useState(0);
  let variable = 0;

  function setVariable() {
    variable += 1;
    console.log(`state: ${state}/ variable: ${variable}`); //현재의 스테이트값과 변수값출력
  }

  return (
    <div>
      {state} / {variable}
      <br />
      <button
        onClick={() => {
          setState(state + 1);
          setVariable();
        }}
      >
        +1
      </button>
    </div>
  );
}

//함수형 rfc
