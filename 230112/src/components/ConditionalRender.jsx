import React from 'react';
import { useState } from 'react';
import Item from './Item';

export default function ConditionalRender() {
  const [condition, setCondition] = useState('보여주기');
  const onChange = () => {
    condition === '보여주기'
      ? setCondition('감추기')
      : setCondition('보여주기');
  };

  const ConditionalRender = condition === '감추기' && <Item />;
  return (
    <>
      {ConditionalRender}

      <button onClick={onChange}>{condition}</button>
    </>
  );
}

//감추기일때 트루니까 오른쪽인 item이 실행된다
