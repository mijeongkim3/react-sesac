import React from 'react';
import { useState } from 'react';
import PracticeTimmer from './PracticeTimmer';

export default function ExShow() {
  const [show, setShow] = useState(false);

  return (
    <div>
      {show && <PracticeTimmer />}
      <button onClick={() => setShow(!show)}>
        {show ? '숨기기' : '보이기'}{' '}
      </button>
    </div>
  );
}
