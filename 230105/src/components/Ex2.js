import React, { useState } from "react";

export default function Ex2() {
  const [count, setCount] = useState(0);

  //κ·Έλ¦Όμμ
  return (
    <div>
      <span onClick={() => setCount(count + 1)}>
        {count <= 10 ? "π" : "π"}
      </span>
      <br />
      <span>{count}</span>
    </div>
  );
}
