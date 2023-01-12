import React from 'react';
import { useState } from 'react';
import PracticeTimer from './PracticeTimer';

export default function ExUnmount() {
  const [show, setShow] = useState('보여주기');
  const onChange = () => {
    show === '보여주기' ? setShow('감추기') : setShow('보여주기');
  };

  const ConditionalRender = show === '감추기' && <PracticeTimer />;
  return (
    <div>
      {show && <PracticeTimer />}
      <button onClick={show}>보이기</button>
    </div>
  );
}

//내가한거 망 망망
